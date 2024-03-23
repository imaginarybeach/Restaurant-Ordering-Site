<!-- npm run dev -->
<!-- reactive javascript code goes in script-->
<script>
    import Title from '$lib/title.svelte';
    import Sandwich from '$lib/assets/sandwich.jpeg'
    import Pasta from '$lib/assets/pasta.jpeg'
    import Coffee from '$lib/assets/coffee.png'
</script>


<Title />

<meta name="viewport" content="width-device-width, initial-scale=1">


<main>
    <div class="pasta-image">
        <div class="pasta-text">
            <h1 style="font-size:100px">Exclusive Deal!</h1>
            <h2 style="font-size:30px">50% off on Pasta Dishes</h2>
            <button type="button" class="perfect-flex" onclick="location.href='/menu';">Add to Order</button>
        </div>
    </div>

    <div class="tea-image">
        <div class="tea-text">
            <h1 style="font-size:100px">I'm Thirsty!</h1>
            <h2 style="font-size:30px">Free Refills on Tea and Soda</h2>
            <button type="button" class="perfect-flex" onclick="location.href='/menu';">Add to Order</button>
        </div>
    </div>

    <div class="soup-image">
        <div class="soup-text">
            <h1 style="font-size:100px">Craving More?</h1>
            <h2 style="font-size:30px">Get a Soup to Go</h2>
            <button type="button" class="perfect-flex" onclick="location.href='/menu';">Add to Order</button>
        </div>
    </div>
    
</main>


<style>
    body{
        margin:0;
    }

    hr {
        height: 5px;
        border-width: 0px;
        background-color: black;
    }

    button {
        background-color: #370e47;
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
    img{
        display: block;
        border-radius: 15px;
        border: 2px solid #000;
        
        width: 300px;
        max-width: 100%;
        height: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .pasta-image {
        background-image: url(https://hips.hearstapps.com/hmg-prod/images/delish-230516-dirty-martini-pasta-038-rl-index-646f71444f8a4.jpg?crop=0.6667704926543113xw:1xh;center,top&resize=1200:*);
        height: 500px;
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .pasta-text {
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(145, 117, 158);
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: rgb(233, 226, 238);
        
    }

    .tea-image {
        background-image: url(https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1645021053/BW%20BLOG/Untitled-design---2022-02-16T194724.132_11zon.jpg);
        height: 500px;
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .tea-text {
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(145, 117, 158);
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: rgb(233, 226, 238);
        
    }
    .soup-image {
        background-image: url(https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/10/Chicken-Soup-main-2.jpg);
        height: 500px;
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .soup-text {
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(145, 117, 158);
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: rgb(233, 226, 238);
        
    }

    button:hover{
        background-color:#65417e;
        color: white;
    }
</style>