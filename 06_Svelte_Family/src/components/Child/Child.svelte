<script>
    export let child;
    export let onShowLove;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessages";

    let customFridgeMessage = "";

    function submitFridgeMessage() {
        console.log(customFridgeMessage);
        fridgeMessages.set([...$fridgeMessages, customFridgeMessage]);
        /*
        fridgeMessages.update((storeValue) => {
            storeValue.push(customFridgeMessage);
            return storeValue;
        });
        */
        customFridgeMessage = "";
    }
</script>

<div 
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.blackSheep || "not-a-black-sheep"}
>
    <h3>{child.name}</h3>

    <button on:click={() => onShowLove(child.name)}>❤️</button>
    <button on:click={() => onEatCookie(child.name)}>🍪</button>

    <input bind:value={customFridgeMessage}>
    <button on:click={submitFridgeMessage}>Submit message</button>
</div>


<style>
    .is-boy {
        border: 1px solid blue;
    }
    .is-girl {
        border: 1px solid pink;
    }
    .not-a-black-sheep {
        background-color: aquamarine;
    }
    .medium-black-sheep {
        background-color: blueviolet;
    }
    .ultra-black-sheep {
        background-color: darkolivegreen;
    }
</style>