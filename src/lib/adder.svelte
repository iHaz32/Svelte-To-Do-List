<script lang="ts">
    let inputValue:String;   // input value of input
</script>

<!-- task adder / input clears on submit -->
<div class="flex flex-row items-center border border-gray-300 rounded-md px-4 py-2">
    <input type="text" class="flex-1 bg-transparent focus:outline-none" placeholder="Add a task" bind:value={inputValue}>
    <button on:click={() => { inputValue = ""; }} class="ml-4 px-1 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
</div>