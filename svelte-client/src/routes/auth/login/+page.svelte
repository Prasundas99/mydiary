<script context="module">
  export const layout = null; // Disable the layout for this page
</script>

<script>
    import { goto } from '$app/navigation';
  
    let email = '';
    let password = '';
    let error = '';
  
    const handleLogin = async () => {
      error = '';
  
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem('auth_token', token); // Store token in localStorage
          goto('/dashboard'); // Redirect to dashboard
        } else {
          const { message } = await response.json();
          error = message || 'Invalid credentials';
        }
      } catch (err) {
        error = 'An unexpected error occurred.';
      }
    };
  </script>
  
  <style>
  
    .login-container {
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
  
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  
    label {
      display: flex;
      flex-direction: column;
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
  
    button {
      background: #4a90e2;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 10px 0;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background: #357ab8;
    }
  
    .register-link {
      text-align: center;
      margin-top: 20px;
    }
  
    .register-link a {
      color: #4a90e2;
      text-decoration: none;
      font-size: 14px;
    }
  
    .register-link a:hover {
      text-decoration: underline;
    }
  </style>
  
  <div class="login-container">
    <h1>Login</h1>
    {#if error}
      <p class="error">{error}</p>
    {/if}
    <form on:submit|preventDefault={handleLogin}>
      <label>
        Email:
        <input type="email" bind:value={email} required />
      </label>
      <label>
        Password:
        <input type="password" bind:value={password} required />
      </label>
      <button type="submit">Login</button>
    </form>
    <div class="register-link">
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  </div>
  