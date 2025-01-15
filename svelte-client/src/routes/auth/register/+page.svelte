<script>
  import { toasts } from "svelte-toasts";
  import { goto } from "$app/navigation";
  import AuthForms from "../components/AuthForms.svelte";
  import { userRegisterApi } from "$lib/apis/auth";

  let error = "";

  const handleRegister = async (email = "", password = "") => {
    error = "";

    try {
      await userRegisterApi(email, password);

      toasts.add({
        title: "Registration successful",
        type: "success",
      });

      goto("/auth/login"); // Redirect to login
    } catch (err) {
      error = err?.toString() ?? "An unexpected error occurred";
    }
  };
</script>

<svelte:head>
  <title>Register</title>
  <meta name="description" content="" />
</svelte:head>

<AuthForms formType="Register" handleAuth={handleRegister} bind:error>
  <div class="register-link">
    <p>Have an account? <a href="/auth/login">Login</a></p>
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
