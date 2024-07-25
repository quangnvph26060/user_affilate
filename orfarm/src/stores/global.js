import Vuex from 'vuex';
import axios from 'axios';
import apiURL from '../connect';

const store = {
    state: {
        cart: [],
        product: {},
    },
    getters: {
        cart(state) {
            return state.cart
        },
        product(state) {
            return state.product
        },
    },
    mutations: {
        setCart(state, cart) {
            state.cart = cart;
        },
        setProduct(state, product) {
            state.product = product;
        },
        removeCart(state, id) {
            state.cart = state.cart.filter(cart => cart.id !== id);
        },
    },
    actions: {
        async getCart({commit, state}) {
            // const token = localStorage.getItem('token');
            // const headers = {
            //     'accept': 'application/json',
            //     'Authorization': 'Bearer '  + token
            // }
            // try {
            //     const API_BACK_END = apiURL.baseURL;
            //     if(token != "" && token != null){
            //         const { data } = await axios.get(`${API_BACK_END}cart`, {headers : headers});
            //         if (data.status == 'success') {
            //             commit('setCart', data.data);
            //         }
            //     }
            // } catch ({ res }) {
            //     commit('setCart', {});
            // }
        },
        async getProduct({commit, state}) {
            try {
              
                    const API_BACK_END = apiURL.baseURL;
                    const { data } = await axios.get(`${API_BACK_END}products`);
                    if (data.status == 'success') {
                        commit('setProduct', data.data);
                        
                    }
    
            } catch ({ res }) {
                commit('setProduct', {});
            }
        },
        async updateCart({ commit, state },param) {
            const token = localStorage.getItem('token');
            const headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            try {
                const API_BACK_END = apiURL.baseURL;
                if (token != "" && token != null) {
                    const { data } = await axios.post(
                        `${API_BACK_END}cart/update/${param.id}`, 
                        { amount: param.amount },
                        { headers: headers }
                    );
                }
            } catch ({ res }) {
                commit('setCart', {});
            }
        },   
        async deleteCart({ commit, state }, id) {
            const token = localStorage.getItem('token');
            const headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            try {
                const API_BACK_END = apiURL.baseURL;
                if (token != "" && token != null) {
                    const { data } = await axios.delete(
                        `${API_BACK_END}cart/${id}`, 
                        { headers: headers }
                    );
                    if (data.status == 'success') {
                        commit('removeCart', id);
                    }
                }
            } catch ({ res }) {
                commit('setCart', {});
            }
        },     
       
    }
};
export default store;
