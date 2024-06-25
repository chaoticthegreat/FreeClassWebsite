<script>

import Navbar from './Navbar.svelte';
import MainScreen from './MainScreen.svelte';
import Features from './Features.svelte';
import Testimonial from './Testimonial.svelte';
import Newsletter from './Newsletter.svelte';
import FAQ from './FAQ.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Free Python Class For Kids" />
</svelte:head>

<div class="bg-white">
	<Navbar/>
	<MainScreen/>
</div>
<Features/>
<Testimonial/>
<Newsletter/>
<FAQ/>
