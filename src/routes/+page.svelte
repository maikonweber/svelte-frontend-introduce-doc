<script>
// @ts-nocheck
    import Nested from "./Nested.svelte";
    import Packageinfo from "./Packageinfo.svelte";
    import Thing from './Thing.svelte';
    
    let name = 'MutterCorp'
    
    let things = [
        { id: 1, name: 'apple'},
        { id: 1, name: 'banana'},
        { id: 1, name: 'carrot'},
        { id: 1, name: 'egg'},
    ];

    function handleClick() {
        things = things.slice(1);
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

<h1>  Welcome !!! {name.toUpperCase()} ! </h1>

<Nested answer={42}></Nested>

<Packageinfo
     {...pkg}
>

</Packageinfo>



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

</style>