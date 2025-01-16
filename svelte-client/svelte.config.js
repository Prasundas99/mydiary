import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter({
		  runtime: 'node18' 
		})
	  }
	};

export default config;
