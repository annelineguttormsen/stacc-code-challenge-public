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
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512' fill='%23222'%3E%3Cpolygon points='240 304 272 304 278 144 234 144 240 304' style='fill:none'%3E%3C/polygon%3E%3Cpath d='M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm20,319.91H236v-40h40ZM272,304H240l-6-160h44Z'%3E%3C/path%3E%3C/svg%3E");
        background-position: center left 0.5rem;
        background-size: 1.5rem;
        background-repeat: no-repeat;
        background-color: var(--blue-color);
    }
</style>