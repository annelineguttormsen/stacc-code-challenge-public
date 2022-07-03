<template>
  <main class="layout">
    <router-view/>
  </main>
  <footer>
    <ul>
      <li>
        <a href="https://www.opensanctions.org/docs/api/" target="_blank">Open Sanctions API</a>
      </li>
      <li>
        <a href="https://github.com/annelineguttormsen/stacc-code-challenge-public" target="_blank">GitHub</a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
  @import "@/assets/scss/_main.scss";

  .layout {
    max-width: 1000px;
    margin: 0 auto;
    padding: 5rem 1rem 1rem;
  }
  footer {
    margin-bottom:2rem;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-flow: row wrap;
      padding: 0;
    }
  }
</style>
