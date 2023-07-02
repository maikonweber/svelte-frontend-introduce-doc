<script>
    let count = 0;


    function increment () {
        count += 1;
    }
$: doubled = count * 2;

</script>






<h1> This another component </h1>

<button on:click={increment}> 
    Clicked {count}
   
    {count === 1 ?  'time' : 'times'}
</button>

<p>{count} - doubles id { doubled }</p>

