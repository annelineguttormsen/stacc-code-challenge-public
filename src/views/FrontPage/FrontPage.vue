<script setup lang="ts">
  import { ref } from 'vue'
  import SearchInput from './components/SearchInput.vue'
  import SearchResults from './components/SearchResults.vue'
  import InfoAlert from "@/components/Alert/InfoAlert.vue"

  const searchValue = ref('')
  const results = ref([
    {
      caption: "Ola Nordmann",
      role: "Swedish politician" 
    },
    {
      caption: "Helge Helgesen",
      role: "Politician"
    }
  ])
  const isLoading = ref(false)

  async function searchName(query) {
    console.log("searchname function call", query)
  }
</script>

<template>
  <div class="search">
    <h1 class="search__title">Politically Exposed Person sjekk</h1>
    <form 
      class="search__form"
      @submit.prevent="searchName(searchValue);isLoading = !isLoading"
    >
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
      :isLoading="false"
      :results="results"
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
      &:active {
        background-color: var(--main-color-darkest);
      }
    }
  }
</style>