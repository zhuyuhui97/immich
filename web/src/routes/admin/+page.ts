import { resolveRoute } from '$app/paths';
import { AppRouteId } from '$lib/constants';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (() => {
  redirect(302, resolveRoute(AppRouteId.ADMIN_USER_MANAGEMENT));
}) satisfies PageLoad;
