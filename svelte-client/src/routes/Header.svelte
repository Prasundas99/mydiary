<script>
	import { browser } from "$app/environment";
	import { userStore } from "$lib/store/userStore";
	import { page } from "$app/state";
	import { goto } from "$app/navigation";
  
	let user = { token: "" };
  
	// Subscribe to userStore using reactive statement
	$: if (browser && $userStore) {
	  user = $userStore;
	  const currentPath = page.url.pathname;
	  
	  if (!user?.token) {
		if (!currentPath.startsWith("/auth/")) {
		  goto('/auth/login');
		}
	  } else if (
		currentPath === "/auth/login" ||
		currentPath === "/auth/register"
	  ) {
		goto('/');
	  }
	}

	const logout = () => {
	  userStore.set(null);
	  window.localStorage.removeItem("userData");
	  goto("/auth/login");
	  user = { token: "" };
	}

  </script>
  
  <style>
	header {
	  display: flex;
	  justify-content: space-between;
	}
  
	.corner {
	  width: 6em;
	  height: 3em;
	}
  
	.corner a {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  width: 100%;
	  height: 100%;
	}
  
	nav {
	  display: flex;
	  justify-content: center;
	  --background: rgba(255, 255, 255, 0.7);
	}
  
	svg {
	  width: 2em;
	  height: 3em;
	  display: block;
	}
  
	path {
	  fill: var(--background);
	}
  
	ul {
	  position: relative;
	  padding: 0;
	  margin: 0;
	  height: 3em;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  list-style: none;
	  background: var(--background);
	  background-size: contain;
	}
  
	li {
	  position: relative;
	  height: 100%;
	}
  
	li[aria-current="page"]::before {
	  --size: 6px;
	  content: "";
	  width: 0;
	  height: 0;
	  position: absolute;
	  top: 0;
	  left: calc(50% - var(--size));
	  border: var(--size) solid transparent;
	  border-top: var(--size) solid var(--color-theme-1);
	}
  
	nav a {
	  display: flex;
	  height: 100%;
	  align-items: center;
	  padding: 0 0.5rem;
	  color: var(--color-text);
	  font-weight: 700;
	  font-size: 0.8rem;
	  text-transform: uppercase;
	  letter-spacing: 0.1em;
	  text-decoration: none;
	  transition: color 0.2s linear;
	}
  
	a:hover {
	  color: var(--color-theme-1);
	}
  </style>
  

  <header>
	{#if user?.token}
	  <div class="corner">
		<a href="/">
			myDiary
		</a>
	  </div>
  
	  <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
		  <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
		  <li aria-current={page.url.pathname === "/" ? "page" : undefined}>
			<a href="/">Home</a>
		  </li>
		  <li aria-current={page.url.pathname === "/create" ? "page" : undefined}>
			<a href="/create">Create</a>
		  </li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
		  <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	  </nav>
  
	  <button class="corner" on:click={logout}>
		Logout
	  </button>
	{/if}
  </header>