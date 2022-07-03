<template>
  <main class="layout">
    <router-view/>
  </main>
</template>

<style lang="scss">
  @import "@/assets/scss/_main.scss";

  .layout {
    max-width: 1000px;
    margin: 0 auto;
    padding: 5rem 1rem 1rem;
  }
</style>
