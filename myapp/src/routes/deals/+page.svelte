<!-- npm run dev -->
<!-- reactive javascript code goes in script-->
<script>
    import Title from '$lib/title.svelte'

</script>


<Title />


<main>
    <h1>Deals</h1>
    
    <hr>

    <div class="flex-container">
        
        <div>
            <h2>Sandwich and Drink Combo</h2>
            <img src={Sandwich} alt="Sandwich"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>
        
        <div>
            <h2>Lunch Special</h2>
            <img src={Pasta} alt="Pasta"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>

        <div>
            <h2>Free Refills</h2>
            <img src={Coffee} alt="Coffee"/>
            <button type="button" class="perfect-flex" onclick="location.href='/';">
                Order
            </button>
        </div>


        
    </div>    
    
</main>