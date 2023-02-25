import { postRequest } from '@/utils/request';

export default async function addWebsiteWatch() {
	await postRequest.get('/website/watch');
};
