<script lang="ts">
	import { fade } from 'svelte/transition';
	import { _getPortfolio } from './+layout';
</script>

<div>
	<div
		class="h-[28rem] bg-cover bg-fixed bg-no-repeat bg-origin-padding text-center blur-sm"
		style="background-image: url('https://www.rcm.ac.uk/media/rcmacuk/content/images/Woodwind%20Clarinet%20Orchestra%206x4.jpg');"
	/>
	<div class="absolute top-0 left-auto w-full py-64 text-center text-white">
		<h1 class="text-3xl"><b>Nathan Quilter</b></h1>
		<p class="text-xl"><i>Musician and Teacher</i></p>
	</div>
</div>
<div class="bg-sky-100 py-16">
	<div class="container mx-auto text-center">
		<h2 class="text-2xl"><b>Who is Nathan Quilter?</b></h2>
		<hr class="my-2 bg-black" />
		<div class="flex flex-wrap gap-x-5">
			<img
				class="mx-auto mb-2 max-w-xs sm:max-w-sm sm:rounded-xl"
				alt="Nathan Quilter playing the clarinet while wearing black shirt, black pants and black shoes"
				src="https://nathanquilter.art/assets/img/Nathan.png"
			/>
			<div class="xl:max-w-xxl m-auto max-w-xs flex-grow sm:max-w-sm md:max-w-xs lg:max-w-xl">
				<p class="mb-2 lg:text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate facilisis diam,
					sed luctus massa porttitor in. Vivamus facilisis efficitur elit nec sagittis. Curabitur eu
					erat facilisis, pharetra mauris eget, ultricies risus. Suspendisse leo sem, finibus vel
					finibus porta, gravida ut diam. Aenean et dolor elit. Morbi viverra, sapien quis congue
					tempor, urna sapien semper elit, vel consequat libero lectus vitae orci. Sed congue ut
					massa vitae tristique. Morbi egestas urna ac neque hendrerit, sit amet tristique mauris
					euismod.
				</p>
				<p class="mb-2 lg:text-xl">
					Nam vulputate magna efficitur viverra mollis. Cras convallis nulla ultrices ex suscipit
					facilisis. Nullam semper lorem quis mollis consectetur. Donec quis dui quis felis finibus
					aliquet. Duis blandit libero vel nibh sollicitudin, eu sodales lacus mattis. Maecenas
					imperdiet eget lacus nec rutrum. Morbi tempor ante nec euismod condimentum. Vivamus quis
					interdum nunc, imperdiet aliquam tortor.
				</p>
			</div>
		</div>
	</div>
</div>
<div class="bg-purple-100 py-16">
	<div class="container mx-auto text-center">
		<h2 class="text-2xl"><b>Teaching</b></h2>
		<hr class="my-2 bg-black" />
		<p>
			Sed ultricies neque eu lacus laoreet, in viverra metus commodo. Sed mollis sapien nisl, vel
			tristique ante faucibus eu. Aenean et ipsum at lacus egestas vehicula quis a diam. Sed eget
			odio a arcu aliquet mattis. Phasellus sodales dolor augue, eu iaculis nibh ultrices pharetra.
			Ut dignissim metus ut quam tempus, a consequat mi iaculis. Mauris hendrerit lacus in dolor
			volutpat, sed vulputate augue scelerisque. Duis sit amet libero molestie nibh ullamcorper
			commodo. In hac habitasse platea dictumst. Sed nec quam vel quam commodo venenatis.
		</p>
		<hr class="my-2 bg-black" />
		<a href="teaching">
			<button
				type="button"
				class="w-full rounded-lg bg-purple-300 p-3 text-center transition-all hover:scale-105 hover:bg-purple-400"
			>
				Learn More
			</button>
		</a>
	</div>
</div>
<div class="bg-orange-100 py-16">
	<div class="container mx-auto text-center">
		<h2 class="text-2xl"><b>Previous Work</b></h2>
		<hr class="my-2 bg-black" />
		<div class="flex flex-wrap justify-center gap-5">
			{#await _getPortfolio(3, null)}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-h-8 animate-spin"
					><path
						d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"
					/></svg
				>
			{:then portfolio}
				{#each portfolio as item}
					<div
						class="group m-2 my-auto flex-grow basis-full rounded-md border-2 bg-white p-2 text-left transition-all hover:scale-105 hover:bg-gray-100 md:basis-1/4"
						in:fade
					>
						<div class="px-5 py-2">
							<h3 class="text-2xl"><b>{item.title}</b></h3>
							<p class="text-gray-600 group-hover:text-gray-800">{item.date}</p>
						</div>
						<hr class="my-2" />
						<p class="pl-5">{item.shortDescription}</p>
						<hr class="my-2" />
						<a href="portfolio#{item.title.toLowerCase().replace(' ', '-')}">
							<button
								type="button"
								class="w-full rounded-md bg-sky-300 p-3 text-center transition-all hover:bg-sky-400 hover:text-white"
							>
								View
							</button>
						</a>
					</div>
				{/each}
			{:catch error}
				<!-- TODO: Better error handling -->
				{error}
			{/await}
		</div>
	</div>
</div>
