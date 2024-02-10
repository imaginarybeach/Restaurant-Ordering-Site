<!-- npm run dev -->
<!-- reactive javascript code goes in script-->
<script>
    import Title from '$lib/title.svelte';
    import Sandwich from '$lib/assets/sandwich.jpeg'
    import Pasta from '$lib/assets/pasta.jpeg'
    import Coffee from '$lib/assets/coffee.png'
</script>


<Title />

<main>
    <h1>Deals and Specials!</h1>
    <hr>
    <div class= "flex-container">
        <div class= "flex-container-pasta">
            <h2>Half Price Pasta</h2>
        </div>
        <div class= "flex-container-coffee">
            <h2>Free Refills</h2>
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

    .flex-container-pasta {
        display: flex;
        padding: 1rem;
        flex-flow: row wrap;
        justify-content: space-around;
        background-color: aqua;
        background-image:

    }
    .flex-container-coffee {
        display: flex;
        padding: 1rem;
        flex-flow: row wrap;
        justify-content: space-around;
        background-color: #2bff00;

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