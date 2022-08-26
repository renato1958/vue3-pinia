<template>
    <div class="counter_display">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .counter_display {
        width: 100px;
        height: 100px;
        /*display: flex;*/
        font-size: 30px;
        font-weight: bold;
        color: white;
        background-color: blue;
        /*justify-content: center;
        align-items: center;*/
    }
</style>