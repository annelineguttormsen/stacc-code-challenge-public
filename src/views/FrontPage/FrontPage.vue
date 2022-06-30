<template>
  <h1>PEP sjekk</h1>
  <p>Søk opp om en kunde er en <i>politically exposed person</i></p>
  <SearchInput/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from './components/SearchInput.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'FrontPage',
  components: {
    SearchInput,
  },
});
</script>
