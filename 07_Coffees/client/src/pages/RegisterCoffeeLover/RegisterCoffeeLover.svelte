<script>
    let coffeeLoverName = "";

    async function submitCoffeeLoverName() {
        const response = await fetch("http://localhost:8080/users/register/" + coffeeLoverName, {
            credentials: "include"
        });
        const result = await response.json();
        console.log(result.data);
    }
</script>
<input bind:value={coffeeLoverName}>
<button on:click={submitCoffeeLoverName}>Submit</button>