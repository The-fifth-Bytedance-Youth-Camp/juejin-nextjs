import { Fxios } from '@/utils/request/fxios';

export const bffRequest = new Fxios({
	basicURL: 'http://localhost:3001',
});

export const postRequest = new Fxios({
	basicURL: 'http://localhost:3100',
});

export const personRequest = new Fxios({
	basicURL: 'http://localhost:3000',
});
