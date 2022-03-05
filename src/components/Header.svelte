<script>
  import { items } from "../stores";
  $: itemCount = $items.length;
  $: itemComplted = $items.filter((item) => item.completed).length;
</script>

<div class="header">
  <span>To-do-list</span>
  <span>{itemComplted}/{itemCount} </span>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
