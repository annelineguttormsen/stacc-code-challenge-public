<template>
    <p class="dangeralert">
        <slot/>
    </p>
</template>

<style lang="scss" scoped>
    .dangeralert {
        padding: 0.5rem 1rem 0.5rem 2.5rem;
        margin: 0;
        border-radius: 2px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='1em' width='1em' fill='%23222'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z'%3E%3C/path%3E%3C/svg%3E");
        background-position: center left 0.5rem;
        background-size: 1.5rem;
        background-repeat: no-repeat;
        background-color: var(--yellow-color);
    }
</style>