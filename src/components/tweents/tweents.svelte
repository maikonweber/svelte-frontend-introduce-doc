<script>
    import { writable } from "svelte/store";
    import { cubicInOut } from "svelte/easing";
    import { tweened } from "svelte/motion";

    const progress = tweened(0, {
        duration: 4000,
        easing: cubicInOut
    })


</script>



<progress value={$progress} />

<button on:click={() => progress.set(0)}>
	0%
</button>

<button on:click={() => progress.set(0.25)}>
	25%
</button>

<button on:click={() => progress.set(0.5)}>
	50%
</button>

<button on:click={() => progress.set(0.75)}>
	75%
</button>

<button on:click={() => progress.set(1)}>
	100%
</button>




<style>
    progress {
        display: block;
        width: 100%;
    }
</style>
