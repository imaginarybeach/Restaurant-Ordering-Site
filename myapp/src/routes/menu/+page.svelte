<!-- npm run dev -->
<!-- reactive javascript code goes in script-->
<script>
    import Title from '$lib/title.svelte'
    import Sandwich from '$lib/assets/sandwich.jpeg'
    import Pasta from '$lib/assets/pasta.jpeg'
    import Lasanga from '$lib/assets/lasanga.jpg'
    import Soup from '$lib/assets/soup.jpg'
    import Coffee from '$lib/assets/coffee.png'
    import Tea from '$lib/assets/tea.jpg'
    import Ramen from '$lib/assets/ramen.jpg'
</script>

<Title />

<svelte:head>
    <title>Code and Cusine • Menu</title>
</svelte:head>

<main>
    <h1>Menu</h1>
    
    <hr>

    <div class="flex-container">
        
        <div>
            <h2>Sandwich</h2>
            <img src={Sandwich} alt="Sandwich"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>
        
        <div>
            <h2>Pasta</h2>
            <img src={Pasta} alt="Pasta"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>
        
        <div>
            <h2>Lasanga</h2>
            <img src={Lasanga} alt="Lasanga"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>

        <div>
            <h2>Soup</h2>
            <img src={Soup} alt="Soup"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>

        <div>
            <h2>Ramen</h2>
            <img src={Ramen} alt="Ramen"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>

        <div>
            <h2>Coffee</h2>
            <img src={Coffee} alt="Coffee"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>

        <div>
            <h2>Tea</h2>
            <img src={Tea} alt="Tea"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>
        
    </div>    
    
</main>


<style>
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        margin-top: 20px;
        text-align: center;
        width: 50%;
        padding: 10px;
        color: black;
    }

    h2 {
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        text-align: center;
        margin-bottom: 3px;
        color: black;
    }

    hr {
        height: 5px;
        border-width: 0px;
        background-color: black;
    }

    button {
        background-color: #f76027;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        margin: auto;
        text-align: center;
        width: 300px;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 30px;

        transition-duration: 0.4s;

    }

    button:hover{
        background-color: #d14f1d;
        color: white;
    }

    img{
        display: block;
        border-radius: 15px;
        border: 2px solid #000;
        
        width: 300px;
        max-width: 100%;
        height: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    

    .perfect-flex{
        display: flex;
        padding: 10px;
        justify-content: center;
        align-items: center;
    }

    .flex-container {
        display: flex;
        padding: 1rem;
        flex-flow: row wrap;
        justify-content: space-around;

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