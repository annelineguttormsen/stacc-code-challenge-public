<template>
  <input
    type="text"
    placeholder="Person, company, etc."
    autocomplete="off"
  />
</template>

<style scoped lang="scss">
  input {
    appearance: none;
    all: unset;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 1px solid var(--gray-color);
    padding: .7rem 2.25rem .7rem 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
    &:focus {
      outline: 3px solid var(--blue-color);
    }
  }
</style>
