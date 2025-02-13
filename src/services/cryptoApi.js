const BASE_APT="https://api.coingecko.com/api/v3";
const API_KEY="CG-pxJBexNRy7JFUBJgoEJRiQju"
const getCoinList=(page)=>{
    return `${BASE_APT}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`
}
export default getCoinList;