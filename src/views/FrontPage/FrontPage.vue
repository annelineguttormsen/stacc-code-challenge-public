<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  import { ref, watch, onMounted } from 'vue'
  
  import SearchInput from './components/SearchInput.vue'
  import SearchResults from './components/SearchResults.vue'
  import InfoAlert from "@/components/Alert/InfoAlert.vue"

  import { fetchOpenSanctions } from "./FrontPage.util.js"

  const router = useRouter()
  const route = useRoute()

  const searchValue = ref('')
  const finalSearchValue = ref('')
  const results = ref({})
  const isLoading = ref(false)
  const error = ref()

  async function searchName(query) {
    router.push({
      query: {
        search: query,
      }
    })
    isLoading.value = true
    const response = await fetchOpenSanctions(query)
    results.value = response.data
    error.value = response.error
    finalSearchValue.value = query
    isLoading.value = false
  }

  onMounted(() => {
    if (route.query.search) {
      searchValue.value = route.query.search
      searchName(searchValue.value)
    }
  })

  watch(
    () => route.query.search,
    async newSearch => {
      searchValue.value = newSearch
      searchName(searchValue.value)
    }
  )
</script>

<template>
  <div class="search">
    <h1 class="search__title">Politically Exposed Person check</h1>
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
        Search
      </button>
    </form>
    <p 
      v-if="!route.query.search"
      class="search__results--empty"
    >
      No search done yet
    </p>
    <SearchResults
      v-else
      :isLoading="isLoading"
      :results="results"
      :query="finalSearchValue"
      :error="error"
    />
    <InfoAlert>
      PEP is the shorthand term for <i>politically exposed person</i> and is a person who is at a greater risk of corruption and/or being bribed. Because of this, customers who are flagged as <i>PEP</i> will be manually handled when it comes to something like setting up a loan with a bank.
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
      padding: 0.5rem 1rem 0.5rem 2.25rem;
      transition: all .05s linear;
      background-color: var(--main-color);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='1em' width='1em' fill='%23fff'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'%3E%3C/path%3E%3C/svg%3E");
      background-size: 1.25rem;
      background-repeat: no-repeat;
      background-position: center left 0.5rem;
      color: #fff;
      font-weight: 600;
      user-select: none;
      cursor: pointer;
      &:hover {
        background-color: var(--main-color-dark);
      }
      &:focus {
        outline: 3px solid var(--blue-color);
      }
      &:active {
        background-color: var(--main-color-darkest);
        outline: none;
      }
    }
    &__results {
      &--empty {
        border: 1px solid var(--gray-color);
        width:100%;
        padding: 1rem;
        margin: 0;
        color: var(--gray-color);
      }
    }
  }
</style>