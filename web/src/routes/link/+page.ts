import { resolveRoute } from '$app/paths';
import { AppRouteId } from '$lib/constants';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ url }) => {
  enum LinkTarget {
    HOME = 'home',
    UNSUBSCRIBE = 'unsubscribe',
    VIEW_ASSET = 'view_asset',
    ACTIVATE_LICENSE = 'activate_license',
  }

  const queryParams = url.searchParams;
  const target = queryParams.get('target') as LinkTarget;
  switch (target) {
    case LinkTarget.HOME: {
      return redirect(302, resolveRoute(AppRouteId.PHOTOS, {}));
    }

    case LinkTarget.UNSUBSCRIBE: {
      return redirect(302, `${resolveRoute(AppRouteId.USER_SETTINGS, {})}?isOpen=notifications`);
    }

    case LinkTarget.VIEW_ASSET: {
      const id = queryParams.get('id');
      if (id) {
        return redirect(302, `${resolveRoute(AppRouteId.PHOTOS, {})}/${id}`);
      }
      break;
    }

    case LinkTarget.ACTIVATE_LICENSE: {
      // https://my.immich.app/link?target=activate_license&licenseKey=IMCL-9XC3-T4S3-37BU-GGJ5-8MWP-F2Y1-BGEX-AQTF
      const licenseKey = queryParams.get('licenseKey');
      const activationKey = queryParams.get('activationKey');
      const redirectUrl = new URL(resolveRoute(AppRouteId.BUY, {}), url.origin);

      if (licenseKey) {
        redirectUrl.searchParams.append('licenseKey', licenseKey);

        if (activationKey) {
          redirectUrl.searchParams.append('activationKey', activationKey);
        }

        return redirect(302, redirectUrl);
      }

      break;
    }
  }

  return redirect(302, resolveRoute(AppRouteId.PHOTOS, {}));
}) satisfies PageLoad;
