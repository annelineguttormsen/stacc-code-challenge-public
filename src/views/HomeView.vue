<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <InputText/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputText from '@/components/Input/Input.Text.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    InputText,
  },
});
</script>
