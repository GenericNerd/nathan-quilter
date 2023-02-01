<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="min-h-remaining bg-orange-50">
	<div class="py-16 pl-4">
		<div class="container mx-auto">
			<h1 class="mb-5 text-center text-3xl"><b>Portfolio</b></h1>
			<ol class="relative border-l border-gray-500">
				{#each data.portfolio as item}
					<li class="mb-10 ml-4" id={item.title.toLowerCase().replace(' ', '-')}>
						<div
							class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-600"
						/>
						<time class="mb-1 text-sm font-normal leading-none text-gray-500">
							{item.date}
						</time>
						<h3 class="text-lg font-semibold">
							{item.title}
						</h3>
						<p class="mb-4 text-base font-normal text-gray-500">
							{item.description}
						</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</div>
