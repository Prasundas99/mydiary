  
<script>
	import Header from './Header.svelte';
	import '../app.css';
  import { FlatToast, ToastContainer } from 'svelte-toasts';
	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();

  </script>
  

	<div class="app">
	  <Header />
  
	  <main>
		{@render children()}
		<ToastContainer placement="top-right" let:data={data}>
			<FlatToast {data} />
		</ToastContainer>
	  </main>
  
	  <footer>
		<!-- Footer content here -->
	  </footer>
	</div>

  
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

</style>
