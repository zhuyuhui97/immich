<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import FormatMessage from '$lib/components/i18n/format-message.svelte';
  import { AppRouteId, OpenSettingQueryParameterValue, QueryParameter } from '$lib/constants';
  import { t } from 'svelte-i18n';
</script>

<FormatMessage
  key="admin.storage_template_migration_description"
  values={{ template: $t('admin.storage_template_settings') }}
  let:message
>
  <a
    href="{resolveRoute(
      AppRouteId.ADMIN_SETTINGS,
      {},
    )}?{QueryParameter.IS_OPEN}={OpenSettingQueryParameterValue.STORAGE_TEMPLATE}"
    class="text-immich-primary dark:text-immich-dark-primary"
  >
    {message}
  </a>
</FormatMessage>
