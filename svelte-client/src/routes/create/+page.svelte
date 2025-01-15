<script>
  import { createNoteApi } from "$lib/apis/notes";
  import Button from "$lib/components/Button/Button.svelte";
  import InputField from "$lib/components/Input/InputField.svelte";
  import { userStore } from "$lib/store/userStore";
  import { toasts } from "svelte-toasts";

  
    let title = "";
    let body = "";
    let user = $userStore
  
    const createNote = async () => {
      try {
        // Call your createNoteApi function here
        const response = await createNoteApi(user?.token, title, body);
        console.log("Note created:", response);
        toasts.add({
          title: "Note created successfully",
          type: "success",
        })
        title = "";
        body = "";
      } catch (error) {
        console.error("Error creating note:", error);
        toasts.add({
          title: "Error creating note",
          type: "error",
        })
      }
    };
  </script>
  
  <form class="note-form" on:submit|preventDefault={createNote}>
    <h2>Create a New Note</h2>
  
    <InputField label="Title" bind:value={title} placeholder="Enter note title" />
    <InputField label="Body" bind:value={body} placeholder="Enter note body" />
  
    <Button>Create Note</Button>
  </form>
  
  <style>
    .note-form {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  
    h2 {
      text-align: center;
      font-size: 1.5em;
      margin-bottom: 20px;
    }
  </style>
  