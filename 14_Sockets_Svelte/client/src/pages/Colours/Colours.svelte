<script>
    import ColoursList from "../../components/ColoursList/ColoursList.svelte";
    import { colorsList } from "../../stores/coloursStore";
    import { currentUser } from "../../stores/usersStore";
    import io from "socket.io-client";
    const socket = io("localhost:8090");

    let color;

    function submitColour() {
        console.log(color);
        socket.emit("client-color", { data: color, name: "hardcoded" });
    }

    socket.on("server-color", (data) => {
        // dont do this in svelte:
        document.body.style.backgroundColor = data.data;

        colorsList.update(colours => {
            colours.push({ color: data.data, name: data.name });
            return colours;
        });
    })
</script>

<input type="color" bind:value={color}>
<button on:click={submitColour}>Submit</button>

<ColoursList />