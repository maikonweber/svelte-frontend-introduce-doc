<script>
// @ts-nocheck
    import { writable } from "svelte/store";
    import { spring } from "svelte/motion";
    let coordes = spring({ x: 50, y: 50});
    let size = spring(10)
</script>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <svg 
        on:mousemove={(e) => {
            coordes.set({x: e.clientX, y: e.clientY})
        }}
        on:mousedown={() => size.set(30)}
        on:mouseup={() => size.set(10)}
    >
   
    <circle
        cx={$coordes.x}
        cy={$coordes.y}
        r={$size}
    >

    </circle>
    </svg>


    <div class="controls">
	    <label>
		<h3>stiffness ({coordes.stiffness})</h3>
		<input
			bind:value={coordes.stiffness}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>

	<label>
		<h3>damping ({coordes.damping})</h3>
		<input
			bind:value={coordes.damping}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>
    </div>
    <style>
        svg {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
    
        circle {
            fill: #ff3e00;
        }
    
        .controls {
            position: absolute;
            top: 1em;
            right: 1em;
            width: 200px;
            user-select: none;
        }
    
        .controls input {
            width: 100%;
        }
    </style>
    