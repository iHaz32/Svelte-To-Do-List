<script lang="ts">
    let inputValue:String;   // input value of input
</script>

<!-- task adder / input clears on submit -->
<div class="w-full p-10 sm:p-36 md:p-56 lg:p-72">   <!-- wrapper for width and responsiveness -->
    <div class="flex items-center border border-gray-300 rounded-md px-4 py-2 text-[10px] sm:text-sm md:text-base">
        <input type="text" class="flex-1 bg-transparent focus:outline-none" placeholder="Add a task" bind:value={inputValue}>
        <button on:click={() => { inputValue = ""; }} class="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
    </div>
</div>
