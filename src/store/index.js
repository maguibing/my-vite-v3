import { defineStore } from 'pinia'

import { otherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      name: 'maguibing',
    }
  },
  getters: {
    //  写法1：
    doublePlusOne: state => state.count * 2,
    //  写法2：
    doublePlusTwo(state) {
      return state.count * 3
    },
    //  写法3：
    doublePlusThree() {
      return this.count * 4
    },
    // 联合getters
    allyPlusCount: (state) => {
      // console.log(state);
      return userId => state.doublePlusOne + state.doublePlusTwo + state.doublePlusThree + userId
    },
    otherStorePlus() {
      return otherStore().otherData
    },
  },
  actions: {
    sotreIncrement() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },

  persist: {
    key: 'pnina-store',
    storage: localStorage,
  },
})
