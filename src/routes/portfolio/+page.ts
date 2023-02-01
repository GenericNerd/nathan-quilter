import { _getPortfolio } from '../+layout';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	return { portfolio: await _getPortfolio(null, fetch) };
}) satisfies PageLoad;
