import { Caption } from "./caption";

interface videoProps {
	id: string;
	alt?: string;
	s?: string;
	e?: string;
}

export function YouTube({ id, alt, s, e }: videoProps) {
	let url = `https://www.youtube.com/embed/${id}?cc_load_policy=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white&iv_load_policy=3`;

	if (e) {
		url += `&end=${e}`;
	}
	if (s) {
		url += `&start=${s}`;
	}
	return (
		<span className='my-5 flex flex-col items-center max-w-lg mx-auto'>
			<iframe
				id='ytplayer'
				width='720'
				height='405'
				src={url}
				allowFullScreen
				className='rounded w-full h-auto aspect-video'
			/>
			{alt && <Caption>{alt}</Caption>}
		</span>
	);
}

// example usage

/* 
<YouTube id="vApF_4tYbgQ" alt="caption here" s="0" e="120" />
*/
