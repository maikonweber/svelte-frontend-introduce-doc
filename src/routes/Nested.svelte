
<script>
    
    const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};




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


<style>
    button {
        background-color: blue;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        width: 200px;
        height: 35px;
        font-size: 20px;
        border-color: blueviolet;
        border-style: double;
        border-radius: 5px;       
    }
</style>