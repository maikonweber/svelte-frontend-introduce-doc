<script>
    import { count } from './store.js';

</script>

<h1> This  count is {$count} </h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<style>

    button {
        width: '50px';
        background-color: 'red';
        height: '50px';
    }
</style>