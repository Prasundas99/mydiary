<script>
    export let type = 'text'; // Default input type
    export let placeholder = '';
    export let value = ''; // Bound value
    export let label = ''; // Label text
  </script>
  
  <style>
    .input-container {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 1rem;
    }
  
    label {
      font-size: 14px;
      color: #555;
    }
  
    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }
  
    input:focus {
      border-color: #4a90e2;
      outline: none;
    }
  </style>
  
  <div class="input-container">
    {#if label}
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label>{label}</label>
    {/if}
    <input
      type={type}
      placeholder={placeholder}
      bind:value={value}
    />
  </div>
  