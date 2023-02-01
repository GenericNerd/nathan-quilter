import { error } from '@sveltejs/kit';

export const _getPortfolio = async (limit: number | null, ftch: Function | null) => {
	if (ftch) {
		return await ftch('api/portfolio' + (limit ? `?limit=${limit}` : ''))
			.catch((err: Error) => {
				throw error(500, 'Failed to fetch portfolio. With error: ' + err.message);
			})
			.then((res: Response) => {
				if (!res.ok) {
					throw error(res.status, res.statusText);
				}
				return res.json();
			});
	}
	return await fetch('api/portfolio' + (limit ? `?limit=${limit}` : ''))
		.catch((err) => {
			throw error(500, 'Failed to fetch portfolio. With error: ' + err.message);
		})
		.then((res) => {
			if (!res.ok) {
				throw error(res.status, res.statusText);
			}
			return res.json();
		});
};
