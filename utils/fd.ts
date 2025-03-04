export interface serverFetchProps {
	cacheTime?: number;
	tag?: string;
	url: string;
	headers?: HeadersInit;
	params?: Record<string, string | number | boolean>;
	page?: number;
}

const fd = async <T>({ cacheTime = 3600, tag = "", url, headers, params }: serverFetchProps): Promise<T> => {
	"use server";
	try {
		const urlObj = new URL(url);
		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				urlObj.searchParams.append(key, String(value));
			});
		}
		const response = await fetch(urlObj.toString(), {
			headers,
			next: {
				revalidate: cacheTime,
				tags: tag ? [`${tag}`] : undefined,
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
};

export default fd;
