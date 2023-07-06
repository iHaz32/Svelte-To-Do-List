<script lang="ts">
    import Task from "./classes/Task";
    const dueDate1 = new Date(7, 6, 2023);
    const dueDate2 = new Date(7, 7, 2023);
    let tasks: Task[] = [
        new Task('Static Task for testing'),
    ];
</script>

<div class="flex flex-col items-center justify-center border border-gray-400 rounded-md px-4 py-2">
    {#each tasks as task}
        <hr class="border-gray-500 my-2 w-full">
        <div>
            <span class="font-bold"> {task.title}</span>
        </div>
        <hr class="border-gray-500 my-2 w-full">
    {/each}
    {#if tasks.length == 0}
        There are not any tasks. You can add a new one from the input above.
    {/if}
</div>