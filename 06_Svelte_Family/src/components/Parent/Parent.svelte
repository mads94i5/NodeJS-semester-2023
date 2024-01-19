<script>
    import Child from "../Child/Child.svelte";
    import { fridgeMessages } from "../../store/fridgeMessages";
    import { fridgeTitle } from "../../store/fridgeMessages";

    export let name;
    export let children;

    let cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];

    function handleShowLove(childName) {
        console.log(`${childName} loves ${name}`);
    }

    function handleEatCookie(childName) {
        cookieJar.pop();
        cookieJar = [...cookieJar];
        console.log(`${childName} ate a 🍪 and there are ${cookieJar.length} cookies left in the jar`);
        if (cookieJar.length === 0) {
            fillCookieJar();
        }
    }

    function fillCookieJar() {
        cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];
        console.log(`${name} filled the cookie jar`);
    }

    function clearFridgeMessages() {
        fridgeMessages.set([fridgeTitle]);
        /*
        fridgeMessages.update((storeValue) => {
            storeValue = [fridgeTitle];
            return storeValue;
        });
        */
    }
</script>

<h1>{name}</h1>
<button on:click={clearFridgeMessages}>Clear fridge</button>
<p>Cookie jar: {cookieJar}</p>

{#each children as currentChild}
    <Child child={currentChild} onShowLove={handleShowLove} onEatCookie={handleEatCookie} />
{/each}