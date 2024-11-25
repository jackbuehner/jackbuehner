import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    throw redirect(307, '/filestore/sedaag_2024.pdf')
}) satisfies PageLoad;  