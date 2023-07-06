<script lang="ts">
import Task from "./classes/Task";

let tasks: Task[] = [
    new Task('Static Task 1 for testing'),
    new Task('Static Task 2 for testing'),
    new Task('Static Task 3 for testing'),
];
let addValue: string;
let editValue: string;

const addTask = (e: Event) => {
    e.preventDefault();
    if (addValue!=undefined && !/^\s*$/.test(addValue)) {   // checks if input has only blank characters (ε kleen star)
        console.log(addValue);
        const task = new Task(addValue);
        tasks = [...tasks, task];   
        addValue = ''; 
    }
}

const editTask = (e: Event, task: Task) => {
    e.preventDefault();
    if (editValue!=undefined && !/^\s*$/.test(editValue)) {   // checks if input has only blank characters (ε kleen star)
        task.title = editValue;
        task.editing = false;
        editValue = '';
    }
}

const deleteTask = (e: Event, task: Task) => {
    const key = task.title;
    tasks = tasks.filter(t => t.title!== key);
}
</script>
<div class="flex flex-col gap-2 sm:gap-5 md:gap-10 w-full px-10 sm:px-36 md:px-56 lg:px-72">   <!-- wrapper for width and responsiveness -->

    <!-- Add -->
    <form class="flex justify-between border border-gray-300 rounded-md px-4 py-2 text-[8px] sm:text-xs md:text-base" on:submit={(e) => addTask(e)}>
        <input type="text" class="flex-1 bg-transparent focus:outline-none" placeholder="Add a task" bind:value={addValue}>
        <button type="submit" class="ml-4 px-1 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
    </form>

    <!-- Tasks -->
    <div class="flex flex-col border border-gray-400 rounded-md px-4 py-2">
        {#each tasks as task (task.title)}
            <hr class="border-gray-500 my-2 w-full">
            <div class="mx-1 sm:mx-2 md:mx-5">
                <div class="text-[8px] sm:text-xs md:text-base">
                    {#if !task.editing}
                    <div class="flex gap-1 justify-between">
                        <span class="font-medium">{task.title}</span>
                        <div class="flex items-center gap-2">
                            <button class="px-2 bg-blue-500 text-white rounded-md" on:click={() => { task.editing = true; editValue = task.title; }}>Edit</button>
                            <button class="px-2 bg-blue-500 text-white rounded-md" on:click={(e) => { deleteTask(e, task) }}>Delete</button>
                            <input id="checkbox-{task.title}" type="checkbox" class="h-2 w-2 sm:h-4 sm:w-4" />
                        </div>
                    </div>
                    {:else}
                    <form on:submit={(e) => editTask(e, task)} class="flex justify-between">
                        <input id="inputField" type="text" class="bg-gray-200 focus:outline-none px-1" bind:value={editValue} />
                        <div>
                            <button type="submit" class="px-2 bg-blue-500 text-white rounded-md">Save</button>
                            <button class="px-2 bg-blue-500 text-white rounded-md opacity-50" on:click={(e) => { deleteTask(e, task) }} disabled>Delete</button>
                        </div>
                    </form>
                    {/if}
                </div>  
            </div>
            <hr class="border-gray-500 my-2 w-full">
        {/each}
        {#if tasks.length === 0}
            There are no tasks. You can add a new one from the input above.
        {/if}
    </div>
</div>