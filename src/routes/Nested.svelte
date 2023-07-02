
<script>
    
    const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};

    const colors = ['red', 'orange', 'yellow'];

    let selected = colors[0];

    let numbers = [1, 2, 3, 4];
    let count = 0;
    export let answer;

    function addNumber() {
        numbers.push(numbers.length + 1);
        numbers = numbers;
    }

    function anotherAddNumber(){
        numbers = [...numbers, numbers.length + 1];
    }

    function newAddNumber() {
        numbers[numbers.length] = numbers.length + 1;

    }

    function increment() {
        count += 1;
    }


    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

    $: {
        console.log(`the console log ${count}, sum ${sum}`);
        console.log(`Log in Blocck`);
    }


    $: doubled = count * 2;
</script>

<p> {numbers.join(' + ')} = {sum} </p>

<h1>{answer}This another component</h1>

<button on:click={increment}>
    Clicked {count}

    {count === 1 ? "time" : "times"}
</button>


<button on:click={anotherAddNumber}>
        another
</button>


<p>{count} - doubles id {doubled}</p>



{#if count > 10} 
    <p>
        {count} Count is grather than 10</p>
{:else if count < 5}
        <p>{count} is less than 5</p>
{:else}
<p> {count} is beetween 0 and 10 </p>

{/if}


<h1 style="color: {selected}">
    Pick a colour 
</h1>

<div>
    {#each colors as color, i}
    <button
        aria-current={selected === color}
        aria-label={color}
        style="background: {color}"
        on:click={() => selected = color}
    >
    {i + 1}
    </button>
    {/each}
</div>

<style>
    	h1 {
		transition: color 0.2s;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>


