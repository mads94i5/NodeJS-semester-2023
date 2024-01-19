<script>
    import { onMount } from "svelte";
    import Colours from "./pages/Colours/Colours.svelte";
    import Register from "./pages/Register/Register.svelte";
    import { BASE_URL } from "./stores/globalStore";
    import { currentUser } from "./stores/usersStore";

    onMount(async () => {
      const currentUserLocalStorage = localStorage.getItem("currentUser");
      if (currentUserLocalStorage) {
        currentUser.set(currentUserLocalStorage)
      } else {
        const response = await fetch($BASE_URL + "/api/users", {
          credentials: "include"
        });
        const result = await response.json();
        currentUser.set(result.data);
      }
    })
</script>

{#if !$currentUser}
    <Register />
{:else}
    <Colours />
{/if}
