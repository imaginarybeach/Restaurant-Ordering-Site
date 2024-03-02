<!-- npm run dev -->
<!-- reactive javascript code goes in script-->
<script>
    import Title from '$lib/title.svelte'

</script>


<Title />

<p>Hyperlinks to new pages: </p>
<a href="/menu">Menu</a>
<a href="/deals">Deals</a>
<a href="/reservation">Reservation</a>
<a href="/cart">Cart</a>



<style>
    p {
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        margin-top: 20px;
        text-align: center;
        width: 50%;
        padding: 10px;
        color: black;
    }

    a {
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        margin-top: 20px;
        text-align: center;
        width: 50%;
        padding: 10px;
        color: black;
    }

     :global(body) {
        /*background-image: url("$lib/assets/resturant.jpg");*/
        background-color: #f2eee2;        
		color: black;
		transition: background-color 0.3s;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: auto;
    }
</style>