<script lang="ts">
	export let result: any;
	export let selected: boolean;
</script>

<div
	class={`mt-2 transition-all cursor-pointer  mx-auto flex justify-center  flex-col p-3  bg-base-200  rounded-md w-[94%] hover:scale-[1.01] ${
		selected ? 'bg-slate-300 ' : ''
	} `}
>
	<img src={result.ThumbnailImage} alt={result.ThumbnailAltText} class=" rounded-md" />
	<div class="text-md mt-1">
		<p>
			<span class=" text-slate-400">#{result.id}</span>
			{result.name}
		</p>
		{#each result.type as type}
			<span class={`badge mr-2 rounded-2xl text-white border-none ${type}`}>{type}</span>
		{/each}
	</div>
</div>

<style>
	.badge.normal {
		background: #a8a878;
	}
	.badge.fire {
		background: #f08030;
	}
	.badge.water {
		background: #6890f0;
	}
	.badge.grass {
		background: #78c850;
	}
	.badge.electric {
		background: #f8d030;
	}
	.badge.ice {
		background: #98d8d8;
	}
	.badge.fighting {
		background: #c03129;
	}
	.badge.poison {
		background: #a040a0;
	}
	.badge.ground {
		background: #e0c068;
	}
	.badge.flying {
		background: #a890f0;
	}
	.badge.psychic {
		background: #f55888;
	}
	.badge.bug {
		background: #a8b821;
	}
	.badge.rock {
		background: #b8a037;
	}
	.badge.ghost {
		background: #705898;
	}
	.badge.dark {
		background: #705847;
	}
	.badge.dragon {
		background: #7038f8;
	}
	.badge.steel {
		background: #b8b8d0;
	}
	.badge.fairy {
		background: #f0b6bc;
	}
</style>
