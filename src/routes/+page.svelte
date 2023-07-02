<script>
// @ts-nocheck
    import { error } from "@sveltejs/kit";
import { getRandomNumber } from "../utilis/utilis";
    import Nested from "./Nested.svelte";
    import Packageinfo from "./Packageinfo.svelte";
    import Inner from './inner.svelte';    

    function handleMessage(event) {
        alert(event.detail.text);
    }
</script>


<Inner on:message={handleMessage} />


<style></style>
