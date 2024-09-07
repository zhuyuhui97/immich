import { env } from '$env/dynamic/private';
import * as immich_sdk from '@immich/sdk';

immich_sdk.setBaseUrl(env.IMMICH_BASE_URL + immich_sdk.getBaseUrl());
console.log(env.IMMICH_BASE_URL);