<script setup lang="ts">
  import { ref } from 'vue'
  import SearchInput from './components/SearchInput.vue'
  import SearchResults from './components/SearchResults.vue'
  import InfoAlert from "@/components/Alert/InfoAlert.vue"

  import { fetchOpenSanctions } from "./FrontPage.util.js"

  const searchValue = ref('')
  const finalSearchValue = ref('')
  const results = ref({})
  const isLoading = ref(false)

  async function searchName(query) {
    const response = await fetchOpenSanctions(query)
    results.value = response.data
    finalSearchValue.value = query
    isLoading.value = false
    // console.log(results.value.data.value)
  }
</script>

<template>
  <div class="search">
    <h1 class="search__title">Politically Exposed Person sjekk</h1>
    <form 
      class="search__form"
      @submit.prevent="searchName(searchValue);isLoading = !isLoading"
    >
      <!-- 
        searchvalue should be updated on input
        instead of change, that's why v-model is not used
      -->
      <SearchInput
        :value="searchValue"
        @input="searchValue = $event.target.value"
      />
      <button 
        class="search__button"
        type="submit"
      >
        Søk
      </button>
    </form>
    <SearchResults
      :isLoading="isLoading"
      :results="results"
      :query="finalSearchValue"
    />
    <InfoAlert>
      PEP, også kjent som <i>politically exposed person</i>, er en politisk eksponert person har generelt sett større risiko for korrupsjon og bestikkelser knyttet til seg, og vil dermed være flagget for manuell behandling i f.eks en lånesøknad hos en bank.
    </InfoAlert>
  </div>
</template>

<style lang="scss">
  .search {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;
    &__title {
      text-align:center;
    }
    &__form {
      display: flex;
      gap: 0.5rem;
      max-width: 600px;
      width: 100%;
    }
    &__button {
      all: unset;
      appearance: none;
      line-height: 1.5;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      transition: all .05s linear;
      background-color: var(--main-color);
      color: #fff;
      font-weight: 600;
      user-select: none;
      cursor: pointer;
      &:hover {
        background-color: var(--main-color-dark);
      }
      &:focus {
        outline: 3px solid lightblue;
      }
      &:active {
        background-color: var(--main-color-darkest);
        outline: none;
      }
    }
  }
</style>