<script>
    import { onMount } from "svelte";
    import { paint } from ".//grandient";
    // @ts-ignore
    let canvas;

    onMount(() => {
            // @ts-ignore
            const content = canvas.getContext('2d');

            let frame = requestAnimationFrame(function loop(t) {
            requestAnimationFrame(loop);
            paint(content, t);
        })


        return () => {
            cancelAnimationFrame(frame);
        }
    })

</script>


<canvas bind:this={canvas} width={32} height={32}>

</canvas>



<style>

    canvas {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #666;
        mask: url(./svelte--mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
    }
</style>