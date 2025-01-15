<script>
  import { goto } from "$app/navigation";
  import { userLoginApi } from "$lib/apis/auth";
  import { userStore } from "$lib/store/userStore";
  import AuthForms from "../components/AuthForms.svelte";

  let error = "";

  const handleLogin = async (email = "", password = "") => {
    error = "";

    try {
      const data = await userLoginApi(email, password);

      const userData = {
        _id: data._id,
        token: data.token,
        email: data.email,
      };

      userStore.set(userData);
      window.localStorage.setItem("userData", JSON.stringify(userData));
      goto("/");
    } catch (err) {
      error = err?.toString() ?? "An unexpected error occurred";
    }
  };
</script>

<svelte:head>
  <title>Login</title>
  <meta name="description" content="" />
</svelte:head>

<AuthForms formType="Login" handleAuth={handleLogin} bind:error>
  <div class="register-link">
    <p>Don't have an account? <a href="/auth/register">Register</a></p>
  </div>
</AuthForms>

<style>
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
