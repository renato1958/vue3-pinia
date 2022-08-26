import { defineStore } from 'pinia'

export const useCounterStore = defineStore('MyCounter', {
    state: () => ({
        count: 0
    }),
    getters: {
        oddEven(state) {return state.count % 2 === 0 ? 'even' : 'odd'}
    },
    actions: {
        incrementCount() {
            this.count++
        },
        decrementCount() {
            this.count--
        }
    }
})