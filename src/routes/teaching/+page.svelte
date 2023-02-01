<script lang="ts">
	const onlineBaseRate = 20;
	const homeBaseRate = 25;

	let locationSelectionSwitch = true;
	let hours = 2;
</script>

<div class="h-remaining content-center bg-purple-100">
	<div class="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-0">
		<h1 class="mb-3 text-center text-3xl"><b>Get your quote</b></h1>
		<hr class="my-2 bg-black" />
		<h2 class="mb-3 text-center text-xl"><i>Choose your session</i></h2>
		<div class="flex flex-wrap justify-evenly gap-x-5 gap-y-3">
			<div class="grow">
				<div class="grid auto-cols-max grid-flow-col justify-center gap-x-5">
					<p class="my-auto text-xl"><i>At Home</i></p>
					<div class="relative inline-block w-14 select-none align-middle">
						<input
							type="checkbox"
							bind:checked={locationSelectionSwitch}
							class="toggle-checkbox absolute block h-8 w-8 cursor-pointer appearance-none rounded-full border-4 bg-white"
						/>
						<label
							for="toggle"
							class="toggle-label block h-8 cursor-pointer overflow-hidden rounded-full bg-gray-300"
						/>
					</div>
					<p class="my-auto text-xl"><i>Online</i></p>
				</div>
			</div>
			<div class="grow">
				<div class="grid auto-cols-max grid-flow-col justify-center gap-x-2">
					<input
						type="number"
						class="block w-full rounded-lg border border-gray-300 bg-purple-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						min="1"
						max="4"
						bind:value={hours}
						required
					/>
					<p class="my-auto">hours</p>
				</div>
			</div>
		</div>
		<hr class="my-2 bg-black" />
		<h3 class="text-center text-2xl">
			<b
				>Your base rate is <i
					>£{hours * (locationSelectionSwitch ? onlineBaseRate : homeBaseRate)}</i
				></b
			>
		</h3>
		<p class="text-center text-gray-500">
			This base rate is based on the information provided.<br />Please
			<a href="/contact" class="underline">contact Nathan Quilter</a> for a fully accurate price.
		</p>
	</div>
</div>
