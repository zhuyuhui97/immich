<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import BottomInfo from '$lib/components/shared-components/side-bar/bottom-info.svelte';
  import SideBarLink from '$lib/components/shared-components/side-bar/side-bar-link.svelte';
  import SideBarSection from '$lib/components/shared-components/side-bar/side-bar-section.svelte';
  import { AppRouteId } from '$lib/constants';
  import { mdiAccountMultipleOutline, mdiBookshelf, mdiCog, mdiServer, mdiSync } from '@mdi/js';
  import { t } from 'svelte-i18n';
</script>

<SideBarSection>
  <nav aria-label={$t('primary')}>
    <SideBarLink title={$t('users')} routeId={AppRouteId.ADMIN_USER_MANAGEMENT} icon={mdiAccountMultipleOutline} />
    <SideBarLink title={$t('jobs')} routeId={AppRouteId.ADMIN_JOBS} icon={mdiSync} />
    <SideBarLink title={$t('settings')} routeId={AppRouteId.ADMIN_SETTINGS} icon={mdiCog} />
    <SideBarLink title={$t('external_libraries')} routeId={AppRouteId.ADMIN_LIBRARY_MANAGEMENT} icon={mdiBookshelf} />
    <SideBarLink title={$t('server_stats')} routeId={AppRouteId.ADMIN_STATS} icon={mdiServer} />
  </nav>

  <BottomInfo />
</SideBarSection>
