import {createStore} from 'vuex'
import { searchArticles } from '../@API/news'

export const store = createStore({
    state:{
        query:{
            keyword:'',
            from: new Date(),
            to: new Date(),
            sortBy:'popularity'
        },
        apiData:{
            status:'',
            totalResults:0,
            articles:{},
        },
        pagination:{
            currentPage:1,
            chunk:25,
        }
    },
    mutations:{
        SET_QUERY(state,q){
            state.query=q
        },
        CATCH_API_DATA(state,data){
            state.apiData = data
        }
    },
    actions:{
        async catchNews({ commit }, payload) {
            let data = await searchArticles(payload)
            commit('CATCH_API_DATA', data)
            commit('SET_QUERY', payload)
          }
    },
    getters:{
    }
})