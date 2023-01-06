import { defineStore } from "pinia";

export const otherStore = defineStore('otherStore', {
    state: () => {
        return {
            num: 1234
        }
    },
    getters: {
        otherData() {
            return this.num
        }
    }
})