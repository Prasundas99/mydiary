<script>
    import Button from '$lib/components/Button/Button.svelte';
    import InputField from '$lib/components/Input/InputField.svelte';
  
    let email = '';
    let password = '';
    export let error = ''; 
    export let formType = "";
    export let handleAuth;  
</script>

<style>
    .auth-container {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 400px;
      padding: 20px;
      box-sizing: border-box;
      margin: 0 auto;
      margin-top: 15vh;
    }
  
    h1 {
      margin: 0 0 20px;
      text-align: center;
      font-size: 24px;
      color: #333;
    }
  
    .error {
      color: #ff3860;
      font-size: 14px;
      margin-bottom: 15px;
      text-align: center;
    }
</style>

<div class="auth-container">
    <h1>{formType}</h1>
    {#if error}
      <p class="error">{error}</p>
    {/if}
  
    <form on:submit|preventDefault={() => handleAuth(email, password)}>
      <InputField
        type="email"
        label="Email"
        placeholder="Enter your email"
        bind:value={email}
      />
      <InputField
        type="password"
        label="Password"
        placeholder="Enter your password"
        bind:value={password}
      />
      <Button variant="primary">{formType}</Button>
      <slot />
    </form>
</div>