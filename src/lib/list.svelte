<script lang="ts">
import Task from "./classes/Task";
import { createEventDispatcher } from 'svelte';

let tasks: Task[] = [
    new Task('Static Task for testing'),
];
let inputValue: string;

const formSubmit = (e: Event, task: Task) => {
    e.preventDefault();
    task.title = inputValue;
    task.editing = false;
    inputValue = '';
}
</script>

<div class="flex flex-col items-center justify-center border border-gray-400 rounded-md px-4 py-2">
{#each tasks as task (task.title)}
    <hr class="border-gray-500 my-2 w-full">
    <div>
    {#if !task.editing}
        <span class="font-medium">{task.title}</span>
        <button class="px-2 bg-blue-500 text-white rounded-md" on:click={() => { task.editing = true; }}>Edit</button>
    {:else}
        <form on:submit={(e) => formSubmit(e, task)}>
        <input id="inputField" type="text" class="flex-1 bg-gray-200 focus:outline-none px-1" bind:value={inputValue} />
        <button type="submit" class="px-2 bg-blue-500 text-white rounded-md">Save</button>
        </form>
    {/if}
    </div>
    <hr class="border-gray-500 my-2 w-full">
{/each}
{#if tasks.length === 0}
    There are no tasks. You can add a new one from the input above.
{/if}
</div>