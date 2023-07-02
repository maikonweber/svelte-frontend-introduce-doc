<script>
    let name = 'MutterCorp'
    import Nested from "./Nested.svelte";
</script>


<h1>  Welcome !!! {name.toUpperCase()} ! </h1>

<Nested ></Nested>

<style>
    h1 {
        color : goldenrod;
        font-family:'Comic Sans MS', cursive;
        font-size: 2em;
    }

</style>