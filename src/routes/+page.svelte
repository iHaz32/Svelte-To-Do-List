<script>
	import Tasks from "../lib/tasks.svelte";   // import list from library
</script>

<head>
	<title>To Do list</title>   <!-- set tab title -->
</head>

<section class="flex flex-col gap-10 justify-center items-center h-screen">   <!-- put contents in middle, vertically and horizontally -->
	<Tasks />
</section>
