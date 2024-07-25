import { createStore } from 'vuex'
import auth from './auth.js'
import global from './global.js'
import createPersistedState from "vuex-persistedstate";
const store = createStore({
    modules:{
        auth : auth,
        global : global,
    },
     plugins: [createPersistedState()]
})


export default store;
