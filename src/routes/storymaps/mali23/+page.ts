import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    throw redirect(307, 'https://storymaps.arcgis.com/stories/233e8337a4ee412684b2ebc690a2903d')
}) satisfies PageLoad;