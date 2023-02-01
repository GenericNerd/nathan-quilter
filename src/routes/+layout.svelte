<script lang="ts">
	import '../app.css';

	let navbarOpen = false;
	let pages: { name: string; href: string }[] = [
		{
			name: 'Portfolio',
			href: '/portfolio'
		},
		{
			name: 'Teaching',
			href: '/teaching'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
</script>

<nav
	class="sticky top-0 z-10 flex flex-wrap items-center justify-between bg-white px-2 py-3 drop-shadow-md"
>
	<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a
				class="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed"
				href="/"
			>
				Nathan Quilter
			</a>
			<button
				class="block cursor-pointer rounded border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
				type="button"
				on:click={() => (navbarOpen = !navbarOpen)}
			>
				<i
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						class="fill-black"
						height="20px"
						><path
							d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
						/></svg
					>
				</i>
			</button>
		</div>
		<div class="flex-grow items-center lg:flex {navbarOpen ? 'flex' : 'hidden'}">
			<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
				{#each pages as page}
					<li>
						<a
							class="flex items-center bg-gradient-to-r from-black via-black to-black bg-size-200 bg-clip-text bg-pos-0 px-3 py-2 text-xs font-extrabold uppercase leading-snug text-transparent transition-all hover:from-blue-400 hover:via-purple-400 hover:to-pink-600 hover:bg-pos-100"
							href={page.href}
						>
							{page.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
<slot />
