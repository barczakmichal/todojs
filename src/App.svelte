<script>
  import Header from "./components/Header.svelte";
</script>

<div class="container"><Header />Simple text test</div>

<style>
  .container {
    width: 500px;
    background: lightseagreen;
  }

  :global(.container *) {
    font-family: sans-serif;
  }
</style>
