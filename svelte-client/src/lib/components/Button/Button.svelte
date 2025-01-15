<script>
    import { fade } from 'svelte/transition';
  
    export let disabled = false; 
    export let variant = 'primary';

  </script>
  
  <style>
    .button {
      padding: 10px 0;
      font-size: 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      width: 100%;
      margin-top: 0.69rem;
    }
  
    .button.primary {
      background: var(--color-theme-1);
      color: #fff;
    }
  
    .button.primary:hover {
      background: var(--color-theme-2);
    }
  
    .button.secondary {
      background: #f4f4f4;
      color: #555;
    }
  
    .button.secondary:hover {
      background: #e0e0e0;
    }
  
    .button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  </style>
  
  <button
    type="submit"
    class="button {variant}"
    disabled={disabled}
    in:fade={{ duration: 300 }} 
    out:fade={{ duration: 300 }}
  >
    <slot />
  </button>
  