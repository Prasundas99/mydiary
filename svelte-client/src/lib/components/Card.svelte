<script>
    export let cardData = {
      title: "",
      body: "",
      _id: ""
    };
  
    export let handleDelete;
  </script>
  
  {#if cardData}
    <div class="card">
      <h2>{cardData.title}</h2>
      <p>{cardData.body}</p>
      <button on:click={() =>handleDelete(cardData._id)}>Delete</button>
    </div>
  {/if}
  
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 10px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 200px;
    }
  
    h2 {
      font-size: 1.2em;
      margin: 0 0 8px;
    }
  
    p {
      font-size: 1em;
      margin: 0 0 16px;
    }
  
    button {
      background-color: red;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: darkred;
    }
  </style>
  