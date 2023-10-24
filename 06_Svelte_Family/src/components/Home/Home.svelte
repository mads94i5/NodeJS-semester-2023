<script>
    import { fridgeMessages } from "../../store/fridgeMessages";

    console.log(fridgeMessages);
    console.log($fridgeMessages);
</script>

<h2>========================</h2>
{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage}</p>
{/each}
<h2>========================</h2>

<slot></slot>

<h3>Svelte Family Home</h3>