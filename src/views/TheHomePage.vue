<template>
    <div class="container-lg">
        <div class="row mb-3">
            <div class="column d-flex justify-content-center align-items-center">
                <h1>Home Page</h1>
            </div>
        </div>
        <div class="row mb-3">
            <div class="column d-flex justify-content-center align-items-center">
                <counter-display class="d-flex justify-content-center align-items-center">{{ store.count }}</counter-display>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="column d-flex justify-content-center align-items-center">
                    <increment-button class="btn btn-primary btn-lg mx-2" @click="store.incrementCount">+</increment-button>
                    <decrement-button class="btn btn-primary btn-lg mx-2" @click="store.decrementCount">-</decrement-button>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="column d-flex justify-content-center align-items-center">
        <odd-or-even-display>The count is {{ store.oddEven }}</odd-or-even-display>

            </div>
        </div>

        </div>
</template>

<script setup>
    import IncrementButton from '../components/IncrementButton.vue'
    import DecrementButton from '../components/DecrementButton.vue'
    import CounterDisplay from '../components/CounterDisplay.vue'
    import OddOrEvenDisplay from '../components/OddOrEvenDisplay.vue'
    import { useCounterStore } from '../stores/useCounterStore.js'

    const store = useCounterStore()
</script>