<script>
    export let title = ""
</script>
<!-- MACARONI BOWLSSSS-->
<div class="logo">
    <img src="/favicon.png" alt="site logo"
        width="50"
        height="50"/>
        <img src="/favicon.png" alt="site logo"
        width="50"
        height="50"/>
        <img src="/favicon.png" alt="site logo"
        width="50"
        height="50"/>
        <img src="/favicon.png" alt="site logo"
        width="50"
        height="50"/>
        <img src="/favicon.png" alt="site logo"
        width="50"
        height="50"/>
        <img src="/favicon.png" alt="site logo"
        width="50"
        height="50"/>

</div>

<div class="title">
    <!-- <h1>{title}</h1> -->
    <a href="/"><b>Code and Cuisine</b></a>
    <a href="/menu">Menu</a>
    <a href="/deals">Deals</a>
    <a href="/reservation">Reservation</a>
    <a href="/cart">Cart</a>

</div>

<style>
    .title{
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        background-color: rgb(196, 181, 216);
    }
    .title img{
        display: flex;

    }
    .title h1{
        margin-left: 20px;
    }
    .title a{
        font-size: 30px;
        font-family:Georgia, 'Times New Roman', Times, serif;
        font-style:oblique;

    }
    .logo img{
        background-image: "/favicon.png";
    }
</style>