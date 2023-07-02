<script>
// @ts-nocheck
import BigRedButton from "./BigRedButton.svelte";
import { onMount } from 'svelte';

import horn from './Button.svelte';

console.log(horn)
let audio;
onMount(() => {
        if (typeof Audio === 'undefined') {
            return;
        }
    
       audio = new Audio();
       audio.src = horn
    })

    function handleMessage(event) {
        alert(event.detail.text);
    }

    function handleClick () {
        audio.play();
    } 

</script>


<BigRedButton on:click={handleClick}>

</BigRedButton>

