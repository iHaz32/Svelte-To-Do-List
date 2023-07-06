<script lang="ts">
    import Adder from "./adder.svelte"   // import task adder from library
    import List from "./list.svelte"   // import task list from library
</script>


<div class="flex flex-col gap-10 w-full px-10 sm:px-36 md:px-56 lg:px-72 text-[10px] sm:text-sm md:text-base">   <!-- wrapper for width and responsiveness -->
    <Adder />
    <List />
</div>