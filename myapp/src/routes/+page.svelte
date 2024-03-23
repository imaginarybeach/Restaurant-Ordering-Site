<!-- npm run dev -->
<!-- reactive javascript code goes in script-->
<script>
    import Title from '$lib/title.svelte'
    import Menu from '$lib/assets/menu pic.jpg'
    import Deals from '$lib/assets/discount.png'
    import Reservation from '$lib/assets/reservation.jpg'
    import Cart from '$lib/assets/shopping.png'
    
</script>
<!--above this import following pics: menu, deals, reservation, and cart-->

<Title />

<!--<p>Hyperlinks to new pages: </p>
<a href="/menu">Menu</a>
<a href="/deals">Deals</a>
<a href="/reservation">Reservation</a>
<a href="/cart">Cart</a>-->

<main>
    <h1>Code and Cuisine</h1>
    <hr>

    <div class="flex-container">
    <div>
        <div>Menu</div>
        <img src={Menu} alt="Menu"/>
        <button type="button" class="perfect-flex" onclick="location.href='/';">
            View
        </button>
    </div>

    <div>
        <div>Deals</div>
        <img src={Deals} alt="Deals"/>
        <button type="button" class="perfect-flex" onclick="location.href='/';">
            View
        </button>
    </div>

    <div>
        <div>Reservation</div>
        <img src={Reservation} alt="Reservation"/>
        <button type="button" class="perfect-flex" onclick="location.href='/';">
            View
        </button>
    </div>

    <div>
        <div>Cart</div>
        <img src={Cart} alt="Cart"/>
        <button type="button" class="perfect-flex" onclick="location.href='/';">
            View
        </button>
    </div>
</main>


<style>
    h1{
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        margin-top: 20px;
        text-align: center;
        width: 50%;
        padding: 10px;
        color: black;
    }

    h2{
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        text-align: center;
        margin-bottom: 3px;
        color: black;
    }

    img{/*suggest crop */
        display: block;
        border-radius: 15px;
        border: 2px solid #000;
        
        width: 300px;
        max-width: 100%;
        height: 200px;
        
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .flex-container {
        display: flex;
        padding: 1rem;
        flex-flow: row wrap;
        justify-content: space-around;

    }
</style>

<!--<style>
    p {/*the label for hyperlinks: "hyperlinks to new pages"*/
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        margin-top: 20px;
        text-align: center;
        width: 50%;
        padding: 10px;
        color: black;
    }

    a {/*below the hyperlinks label are smaller hyperlinks*/
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        margin-top: 20px;
        text-align: left;
        width: 50%;
        padding: 125px;
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
</style>-->