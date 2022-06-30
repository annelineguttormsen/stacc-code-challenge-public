<template>
  <input
    type="text"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputText',
});
</script>

<style scoped lang="scss">
  input {
    appearance: none;
    all: unset;
    display: block;
    border: 1px solid #666;
    padding: .5rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
