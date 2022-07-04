<script setup lang="ts">
  import { defineProps } from 'vue'
  import InputWarningAlert from "@/components/Input/Alert/InputWarningAlert.vue"
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
    error: {
      type: Number,
      required: false
    },
    query: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <div class="results">
    <svg 
      v-if="isLoading" 
      class="loadingicon" 
      aria-live="polite"
      aria-label="Loading search results"
      viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"></path>
    </svg>
    <InputDangerAlert
      v-else-if="error"
    >
      An error occured, status code: {{ error }}
    </InputDangerAlert>
    <InputWarningAlert 
      v-else-if="results.length == 0 && !isLoading"
    >
      {{ `Couldn't find anything matching '${query}'` }}
    </InputWarningAlert>
    <div 
      v-else-if="results.length != 0 && !isLoading"
      class="results__table"
    >
      <h2>{{ `Search results for '${query}'` }}</h2>
      <table>
        <thead>
          <tr>
            <th class="tablecell--bigger">Name</th>
            <th>Type</th>
            <th class="tablecell--bigger">Position</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="result in results"
            :key="result.id"
          >
            <td 
              data-th="Name"
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
              data-th="Position"
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
            <td data-th="Country">
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
    padding: 1rem;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    &--empty {
      color: var(--gray-color);
    }
    &__table {
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;
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
    cursor: wait;
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
