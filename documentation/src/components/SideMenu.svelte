<script lang="ts">
	import { fly } from 'svelte/transition';
	import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte';
	import StickyBottom from './StickyBottom.svelte';
	import TiPlus from 'svelte-icons/ti/TiPlus.svelte';
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<button
	on:click={toggle}
	class="w-[50px] h-[50px] md:hidden auto p-3 z-30 bg-base-100  ghostButton fixed bottom-5 left-5 shadow-lg rounded-full"
>
	<TiThMenu title="menu" width={20} />
</button>

{#key isOpen}
	{#if isOpen}
		<!-- content here -->
		<div
			on:click={toggle}
			transition:fly
			class="fixed top-0 left-0 h-screen z-40  w-screen bg-slate-500 opacity-40"
		/>

		<nav
			in:fly={{ x: -300 }}
			out:fly={{ x: -300 }}
			class="fixed z-50 left-0 top-0 h-screen z-50 min-h-screen w-[300px] bg-white max-w-[100vw] overflow-y-auto flex flex-col justify-between"
		>
			<div>
				<div class="flex items-center px-4 justify-between py-2 ">
					<h4 class="text-xl font-bold">Svelte-spotlight</h4>
					<button on:click={toggle} class="w-[50px] h-[50px] p-3 ghostButton">
						<div class="rotate-45">
							<TiPlus title="close" width={20} />
						</div>
					</button>
				</div>
				<hr />
				<div class="px-2 flex flex-col py-2">
					<a href="/" class="ghostButton py-3 px-2"> 🏠 Inicio </a>
					<a href="/products/fundas" class="ghostButton py-3 px-2"> 🪑 Funda </a>
					<a href="/products/cruz" class="ghostButton py-3 px-2"> ✝︎ Cruz </a>
					<a href="/pages/contact" class="ghostButton py-3 px-2"> 💌 Contacto </a>
				</div>

				<StickyBottom />
			</div>
		</nav>
	{/if}
{/key}
