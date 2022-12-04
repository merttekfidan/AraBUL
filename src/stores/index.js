import {createStore} from 'vuex'
import { searchArticles } from '../@API/news'
import { formatDate } from '../utils/functions'
//.toLocaleDateString('sv')
// API has limited usage by 29days
const today = new Date()
const earliestDate = new Date()
earliestDate.setDate(today.getDate() - 29)


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
        }
    },
    mutations:{
        SET_QUERY(state,q){
            state.query=q
            console.log('mutations: '+ q.keyword)
        },
        CATCH_API_DATA(state,data){
            state.apiData = data
            console.log('mutations')
        }
    },
    actions:{
        async catchNews({ commit }, payload) {
            let data = await searchArticles(payload)
            console.log('data: ' , data)
            commit('CATCH_API_DATA', data)
            commit('SET_QUERY', payload)
          }
    },
    getters:{
        //Here's the place when you set the order
        // Array is not going to be filtered here.
    }
})