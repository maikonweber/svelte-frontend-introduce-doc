<script>
// @ts-nocheck

    let name = 'MutterCorp'
    import Nested from "./Nested.svelte";
    import Packageinfo from "./Packageinfo.svelte";

    const pkg = {
        name : 'svelte',
        seed : 'blazing',
        version : 4,
        website: 'https://svelte.dev'
    }
</script>


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

</style>