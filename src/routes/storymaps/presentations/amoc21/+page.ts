import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    throw redirect(307, 'https://furman-my.sharepoint.com/:p:/g/personal/jbuehner_furman_edu/EQg0_ClXB6BLtp3WF_1YJ4kBmAnwUO178zYLfEquNtZfHg?e=81jwiF')
}) satisfies PageLoad;  