import Vuex from 'vuex';
import axios from 'axios';
import apiURL from '../connect';

const store = {
    state: {
        authenticated: false,
        user: {},
        admin: {},
        config: {},
        token: localStorage.getItem('token') || 0,
    },
    getters: {
        authenticated(state) {
            return state.authenticated
        },
        user(state) {
            return state.user;
        },
        admin(state) {
            return state.admin;
        },
        token(state) {
            return state.token
        },
        config(state){
            return state.config
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },
        setUser(state, user) {
            state.user = user;
        },
        setAdmin(state, admin) {
            state.admin = admin;
        },
        setToken(state, token) {
            state.token = token;
        },
        setConfig(state, config){
            state.config = config;
        }
    },
    actions: {
        login({ commit }, { user, token }) {
            commit('setUser', user);
            commit('setToken', token);
        },
        logout({ commit }) {
            commit('setUser', null);
            commit('setToken', null);
        },
        async setTokenUser({commit}, token) {
            localStorage.setItem('token', token.token);
            commit('setToken',  token.token);
        },
        async getUser({commit, state}) {
            const token = localStorage.getItem('token');
            const headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer '  + token
            }
            try {
                const API_BACK_END = apiURL.baseURL;
                if(token != "" && token != null){
                    const { data } = await axios.get(`${API_BACK_END}auth/get-user`, {headers : headers});
                    if (data.status == 'success') {
                        commit('setUser', data.data);
                        commit('setAdmin', data.admin);
                        commit('SET_AUTHENTICATED', true);
                    }
                }
            } catch ({ res }) {
                localStorage.removeItem('token');
                commit('setUser', {});
                commit('setAdmin', {});
                commit('SET_AUTHENTICATED', false);
            }
        },
        async getConfig({commit, state}) {
            try {
                const API = apiURL.URL;
                const { data } = await axios.get(`${API}/api/get-config`);
                if (data.status === 'success') {
                    // Lưu dữ liệu vào localStorage
                    localStorage.setItem('config', JSON.stringify(data.data));

                    // Commit mutation để lưu dữ liệu vào Vuex store
                    commit('setConfig', data.data);
                }
            } catch ({ res }) {
                
            }
        },
        async logout({commit}, token) {
            localStorage.removeItem('token');
            commit('setUser', {});
            commit('setAdmin', {});
            commit('SET_AUTHENTICATED', false);
            commit('setToken', '');
        }
    }
};
export default store;
