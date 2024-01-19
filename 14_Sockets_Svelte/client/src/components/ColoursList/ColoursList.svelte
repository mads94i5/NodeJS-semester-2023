<script>
    import { colorsList } from "../../stores/coloursStore";
</script>

{#each $colorsList as colorListItem}
    <h4 style="background-color: {colorListItem.color}">{colorListItem.name}</h4>
{/each}