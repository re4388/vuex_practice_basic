import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        flavor: ''
    },
    actions: {
        increment(context, payload) {
            context.commit('increment', payload)
        },
        decrement(context, payload) {
            context.commit('decrement', payload)
        }
    },
    mutations: {
        increment(state, payload) {
            return state.count = state.count + payload.amount;
        },
        decrement(state, payload) {
            return state.count = state.count - payload.amount;
        },
        change(state, flavor) {
            state.flavor = flavor
        }
    },
    getters: {
        flavor: state => state.flavor
    }

})
export default store;