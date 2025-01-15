<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import Card from "$lib/components/Card.svelte";
  import { deleteNoteApi, getUserNotesApi } from "$lib/apis/notes";
  import { userStore } from "$lib/store/userStore";
  import { toasts } from "svelte-toasts";

  let notes = [];

  onMount(async () => {
    const user = $userStore; // Get the reactive value from the store
    if (user?.token) {
      notes = await getUserNotesApi(user.token);
    }
  });

  const handleDelete = async (id) => {
    try {
      const user = $userStore;
      if (user?.token) {
        await deleteNoteApi(user.token, id);
      }
      notes = await getUserNotesApi(user.token);
    } catch (error) {
      toasts.add({
        title: "Error deleting note",
        type: "error",
      });
    }
  };

</script>

<svelte:head>
  <title>My Diary - Home</title>
  <meta name="description" content="My personal diary" />
</svelte:head>

<section>
  {#each notes as note}
    <Card cardData={note} {handleDelete}/>
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
