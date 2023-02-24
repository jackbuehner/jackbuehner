import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
  throw redirect(307, 'https://storymaps.arcgis.com/stories/e6de96820cff4685ba0df0c59f93bdd9')
}) satisfies PageLoad;