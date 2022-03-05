<script>
  import { onMount } from "svelte";
  import App from "../App.svelte";
  import { items } from "../stores";
  import TodoApi from "../TodoApi";
  import Item from "./Item.svelte";

  function handleNewItem(e) {}

  function handleUpdate(e) {}

  function handleDelete(e) {}

  function calendar(e) {}

  onMount(async () => {
    $items = await TodoApi.getAll();
  });
</script>

<div class="list">
  {#each $items as item (item)}
    <Item {...item} on:update={handleUpdate} on:delete={handleDelete} />
  {:else}
    <p class="list-status">No items exist</p>
  {/each}
</div>

<style>
  .list {
    padding: 10px;
  }
  .list-status {
    margin: 0;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
  }
</style>
