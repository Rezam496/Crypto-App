const BASE_APT="https://api.coingecko.com/api/v3";
const API_KEY="CG-pxJBexNRy7JFUBJgoEJRiQju"
const getCoinList=(page,currency)=>`${BASE_APT}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`

const searchCoin=(query)=>`${BASE_APT}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`
export {getCoinList,searchCoin};
// export default searchCoin;
