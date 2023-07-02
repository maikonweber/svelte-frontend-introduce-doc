<script>
// @ts-nocheck
    import { error } from "@sveltejs/kit";
import { getRandomNumber } from "../utilis/utilis";
    import Nested from "./Nested.svelte";
    import Packageinfo from "./Packageinfo.svelte";
    import Thing from './Thing.svelte';
    
    let promise = getRandomNumber();

    let name = 'MutterCorp'
    
    let things = [
        { id: 1, name: 'apple'},
        { id: 1, name: 'banana'},
        { id: 1, name: 'carrot'},
        { id: 1, name: 'egg'},
    ];

    let m = { x: 0, y: 0};
    function handleClick() {
        things = things.slice(1);
    }

    function handlePromisse() {
        promise = getRandomNumber();
    }

    function handleMove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    const pkg = {
        name : 'svelte',
        seed : 'blazing',
        version : 4,
        website: 'https://svelte.dev'
    }

    
</script>


{#each things as thing}
    <Thing name={thing.name} />
{/each}

<button on:click={handleClick}>
    Remove first thing
</button>

<div on:pointermove={(e) => { m = { x: e.clientX, y: e.clientY}}}>
    the point is at {m.x} x {m.y} 

</div>

<h1>  Welcome !!! {name.toUpperCase()} ! </h1>

<button on:click={handlePromisse}>
    generate random number
</button>

{#await promise}
    <p> ...waiting</p>
{:then number } 
    <p> the number is { number } </p>
{:catch error}    
    <p style="color: red"> {error.message} </p>
{/await}

{#await promise then number} 
    <p> The number is { number }</p>    
{/await}



<p> ... waiting </p>



<Nested answer={42}></Nested>

<Packageinfo
     {...pkg}
>

</Packageinfo>

// awai
<style>
    h1 {
        color : goldenrod;
        font-family:'Comic Sans MS', cursive;
        font-size: 2em;
    }

    button {
        background-color: blueviolet;
        color: brown;
        width:'50px';
        height:'50px';
    }

    div {
        width: 500px;
        height: 500px;
        background-color: red;
        position: fixed;
        left: 0;
        right: 0;
    }

</style>