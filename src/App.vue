<template>
  <div class="layout">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/_main.scss";

  .layout {
    max-width: 600px;
    margin: 0 auto;
    padding: 5rem 1rem 1rem;
  }
</style>
