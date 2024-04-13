<!-- npm run dev -->
<!-- reactive javascript code goes in script-->
<script>
    import Title from '$lib/title.svelte'
    let firstName = " ";
    let lastName= " ";
    let email= " ";
    let phoneNumber= " ";
    let date = " ";
    let times = [
        { id: 1, text: '10:00' },
		{ id: 2, text: '11:00' },
		{ id: 3, text: '12:00'},
		{ id: 4, text: '1:00' },
        { id: 5, text: '2:00' },
        { id: 6, text: '3:00' },
        { id: 7, text: '4:00' },
        { id: 8, text: '5:00' }
	];
    let selected="";

    const inputValues = (e) => {
        firstName = e.target.value;

    }



</script>

<Title />

<form on:submit|preventDefault={validate}>
    <input>
    <button type="submit">First Name</button>
    <button type="submit">Last Name</button>
    



</form>




<p>{firstName}</p>
<h1>Reservation</h1>
<div class=flexcontainer>
    <div>
        <h3>First Name </h3>
        <input bind:value={firstName} />
    </div>
    <div>
        <h3>Last Name </h3>
        <input bind:value={lastName} />
    </div>
    <div>
        <h3>Date </h3>
        <input bind:value={date} placeholder="mm/dd/yyyy"/>
    </div>
    <div>
        <h3>Time</h3>
        <select bind:value={selected} placeholder="Select a time">
            {#each times as time}
                <option value={time}>
                    {time.text}
                </option>
            {/each}
        </select>
    </div>
    <div>
        <h3>Email </h3>
        <input bind:value={email} />
    </div>
    <div>
        <h3>Phone Number </h3>
        <input bind:value={phoneNumber} />
    </div>
    <div>
        <button type="button" on:submit={inputValues}>
            Submit
        </button>
    </div>
</div>




<style>
    
    h3{
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 10px;
        color: black;
    }
    button{
        background-color: #6e3b91;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        margin: auto;
        width: 300px;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 30px;

        transition-duration: 0.4s;

    }
    button:hover{
        background-color:#4e2966;
        color: white;
    }
    .flex-container {
        display: flex;
        padding: 1rem;
        flex-flow: row wrap;
        justify-content: space-around;

    }
</style>
