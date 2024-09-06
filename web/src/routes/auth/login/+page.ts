import { resolveRoute } from '$app/paths';
import { AppRouteId } from '$lib/constants';
import { serverConfig } from '$lib/stores/server-config.store';
import { getFormatter } from '$lib/utils/i18n';

import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
  await parent();
  const { isInitialized } = get(serverConfig);

  if (!isInitialized) {
    // Admin not registered
    redirect(302, resolveRoute(AppRouteId.AUTH_REGISTER));
  }

  const $t = await getFormatter();
  return {
    meta: {
      title: $t('login'),
    },
  };
}) satisfies PageLoad;
