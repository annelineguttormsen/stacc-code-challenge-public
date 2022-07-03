<template>
    <div 
        class="infoalert"
    >
        <p>
            <slot/>
        </p>
    </div>
</template>

<style scoped lang="scss">
    .infoalert {
        border-left: 5px solid var(--green-color);
        padding: 0.5rem 1rem;
        background-color: var(--light-gray-color);
    }
</style>
