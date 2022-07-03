<script setup lang="ts">
  import { defineProps } from 'vue'
  import InputDangerAlert from "@/components/Input/Alert/InputDangerAlert.vue"

  const props = defineProps({
    results: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    query: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <div class="results">
    <svg v-if="isLoading" class="loadingicon" viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"></path></svg>
    <InputDangerAlert 
      v-if="results.length == 0 && !isLoading"
    >
      {{ `Fant ingenting som matchet '${query}'` }}
    </InputDangerAlert>
    <div v-else-if="results.length != 0 && !isLoading">
      <h2>{{ `Søkeresultater for ${query}` }}</h2>
      <table>
        <thead>
          <tr>
            <th class="tablecell--bigger">Navn</th>
            <th>Type</th>
            <th class="tablecell--bigger">Rolle</th>
            <th>Land</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="result in results"
            :key="result.id"
          >
            <td 
              data-th="Navn"
              class="tablecell--bigger"
            >
              {{ result.caption ?? '' }}
            </td>
            <td
              data-th="Type"
            >
              {{ result.schema }}
            </td>
            <td 
              data-th="Rolle"
              class="tablecell--bigger"
            >
              <div>
                <p
                  v-for="(position, index) in result.properties.position"
                  :key="`position-${index}`"
                >
                  {{ position }}
                </p>
              </div>
            </td>
            <td data-th="Land">
              <div>
                <p
                  v-for="(country, index) in result.properties.country"
                  :key="`country-${index}`"
                >
                  {{country}}
                </p>
              </div>
            </td>
          </tr>
        </tbody>      
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .results {
    border: 1px solid var(--gray-color);
    //width needs to be specified because it is a flex child
    width: 100%;
    padding: 0.5rem 1rem 1rem;
    &--empty {
      color: var(--gray-color);
    }
  }
  td p {
    margin: 0;
  }
  .tablecell--bigger {
    flex: 2;
  }
  .loadingicon {
    animation: spin infinite alternate 1.7s ease-in-out;
    height: 3rem;
    width: 3rem;
    display: block;
    margin: 1rem auto;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(1000deg);
    }
  }
</style>
