import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state: {
        counter: 0,
        colorCode: '',
        pow: 0
    },
    mutations: {
        increaseCounter(state, randomNumber){
            state.counter += randomNumber
        },
        decreaseCounter(state, randomNumber){
            state.counter -= randomNumber
            if (state.counter < 0){
                return state.counter = 0
            }
        },
        setColorCode(state, newValue){
            state.colorCode = newValue
        },
        setPowNumber(state, Value){
            state.pow = Value
        }
    },
    actions: {
        increaseCounter({commit}){
            axios(`https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new`)
            .then((response) => {
                commit('increaseCounter', response.data)
            })
        },
        decreaseCounter({commit}){
            axios(`https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new`)
            .then((response) => {
                commit('decreaseCounter', response.data)
            })
        },
        setColorCode({commit}, newValue){
            commit('setColorCode', newValue)
        },
        setPowNumber({commit}, Value){
            commit('setPowNumber', Value)
        }
    },
    getters: {
        counterSquared(state){
            return Math.pow(state.counter, state.pow)
        }
    },
    modules: {

    }
})

export default store;