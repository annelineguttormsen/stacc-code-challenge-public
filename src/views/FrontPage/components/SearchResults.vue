<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    results: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  })
</script>

<template>
  <div class="results">
    <h2>Resultater</h2>
    <p class="results--empty">Ingen tidligere søk</p>
    <!--<table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Rolle</th>
          <th>Land</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="result in results"
          :key="result.caption"
        >
          <td data-th="Navn">{{ result.caption ?? '' }}</td>
          <td data-th="Rolle">{{ result.role ?? ''}}</td>
          <td data-th="Land">{{ result.country ?? ''}}</td>
        </tr>
      </tbody>      
    </table>-->
  </div>
</template>

<style lang="scss" scoped>
  .results {
    border: 1px solid var(--gray-color);
    //width needs to be specified because it is a flex child
    width: 100%;
    padding: 0.5rem 1rem;
    &--empty {
      color: var(--gray-color);
    }
  }
</style>
