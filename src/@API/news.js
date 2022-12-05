// q=apple&from=2022-12-02&to=2022-12-02&sortBy=popularity
// relevancy, popularity, publishedAt.
import axios from 'axios'
const API_KEY = 'dc67407d27a64ecebeeb8711c6af97ba'
const URL = 'https://newsapi.org/v2/everything'
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'


const filterToQuery = (q) =>{
    let query = {
        q:q.keyword,
        from:q.from,
        to:q.to,
        sortBy:q.sortBy
    }
    let stringifiedQuery = Object.entries(query).map(e=> e.join('=')).join('&')
    let defaultFeed = '?q=default&from=2022-11-11'
    return `?${stringifiedQuery}`
}
//`https://newsapi.org/v2/everything?q=asd
//                                  &from=2022-12-03
//                                  $to=2022-12-3
//                                  &sortBy=popularity`

const searchArticles = async(query) =>{
    if(query.keyword==null){
        console.log('no keyword')
        return ''
    }
    let data = await axios.get(URL+filterToQuery(query))
    .then(res =>{
        console.log('api res: ' ,res)
        return res;
    })
    .catch(err=>{
        throw err
    })
    console.log('API DATA' + data)
    return data
}


export{searchArticles}