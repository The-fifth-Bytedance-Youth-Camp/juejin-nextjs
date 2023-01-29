import { Fxios } from '@/utils/request/fxios';
import { lruCachePlugin } from '@/utils/request/plugin/LruCache';

const fxios = new Fxios({ basicURL: 'https://vkceyugu.cdn.bspapp.com' });
fxios.use(lruCachePlugin);

export function getPost(id) {
	return fxios.get('VKCEYUGU-64a7a9ec-6536-4aec-a1c6-f76a1aa71ccf/da96c5bd-c4eb-4e3a-a562-1df7de26dba8.md', {
		headers: {
			'Content-Type': 'text/plain',
		},
	});
}
