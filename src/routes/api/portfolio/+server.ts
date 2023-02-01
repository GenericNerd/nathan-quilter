import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (({ url }) => {
	let portfolio: {
		title: string;
		date: string;
		description: string; // This is a long description
		shortDescription: string; // This is a short description on the index page
		images: string[] | null;
	}[] = [
		{
			title: 'Essex Youth Orchestra',
			date: '2020-09-20 - 2023-08-25 ',
			description:
				'I have been performing with the Essex Youth Orchestra for 3 years this year. Opportunities I have experienced with this orchestra include performing around Essex and Touring around Europe. We have performed in multiple venues selling tickets to the public in and around Essex playing some of the most well known orchestral repatoire icluding Firebird and Westside Story. I first started in 2020 just after the lockdown on 2nd clarinet where I learned necessary skills needed in an orchestra and since then have worked my way up onto 1st or deping on either bass or Eb clarinet whenever needed.',
			shortDescription:
				'I have been performing with the Essex Youth Orchestra for 3 years this year. Opportunities I have experienced with this orchestra include performing around Essex and Touring around Europe.',
			images: null
		},
		{
			title: 'Essex Youth Symponic Wind Orchestra',
			date: '2019-09-20 - 2023-08-25',
			description:
				'I joined the Essex Youth Symphonic Wind Orchestra since 2019 when I joined on 3rd clarinet for my first chance of playing in an orchestral setting. Within a year, I had progressed onto 1st clarinet and was principle for most of 2020. However, after lockdown, the orchestra was in need of a bass player, so I switched onto bass in 2021. Since then I have been the resident bass clarinet player for all performances and have been helping out the all new young clarinettists that join for the same reason I have; either with helping technique or building confidence in a performance setting. We have performed also in many different venues around Essex, mainly in Colchester and Chelmsford.',
			shortDescription:
				'I joined the Essex Youth Symphonic Wind Orchestra since 2019 when I joined on 3rd clarinet for my first chance of playing in an orchestral setting. Within a year, I had progressed onto 1st clarinet and was principle for most of 2020.',
			images: null
		},
		{
			title: 'European Clarinet Festival',
			date: '2019-09-20',
			description:
				'The 2019 European Clarinet Festival was hosted in camerino and a group of students from Trinity Laban conservatoire for Music and Dance were invited by Paolo De Gaspari to perform in a bass clarinet enseble. Due to a member dropping out my teacher, Louise Cahppell, was also attending and offered me to step in. This then meant we all flew out to Italy for a few days to rehearse and perform in venues within the small town of Camerino. We performed multiple small venues which were open to public and attended by most of Europes most well known clarinettists. All pieces were performed on bass clarinet and were rehearsed under the tutorlige of Paolo, as every piece was either arranged by him or by members of the group',
			shortDescription:
				'Due to a member dropping out my teacher, Louise Cahppell, was also attending and offered me to step in. This then meant we all flew out to Italy for a few days to rehearse and perform in venues within the small town of Camerino.',
			images: null
		}
	];
	const limit = Number(url.searchParams.get('limit') ?? 100);
	const offset = Number(url.searchParams.get('offset') ?? 0);
	portfolio = portfolio.slice(offset, offset + limit);
	return json(portfolio);
}) satisfies RequestHandler;
