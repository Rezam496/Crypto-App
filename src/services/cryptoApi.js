const BASE_APT="https://api.coingecko.com/api/v3";
const API_KEY="CG-pxJBexNRy7JFUBJgoEJRiQju"
const getCoinList=()=>{
    return `${BASE_APT}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=${API_KEY}`
}
export{getCoinList};