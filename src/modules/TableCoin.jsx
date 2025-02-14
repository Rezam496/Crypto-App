import { LineWave } from 'react-loader-spinner';

import { FaEuroSign } from "react-icons/fa";
import { BsCurrencyYen } from "react-icons/bs";

import chartUp from '../assets/chart-up.svg';
import chartDown from '../assets/chart-down.svg';

import styles from './TableCoin.module.css';
import { marketChart } from '../services/cryptoApi';

function TableCoin({coins,isLoading,setChart,currency,coin1,setCoin1}) {
  
  return (
    <div className={styles.container}>
      {isLoading?<LineWave
          height="200"
          width="200"
          color="#4fa94d"
          middleLineColor="red"
                  />:
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin)=>(<TableRow coin={coin} key={coin.id} setChart={setChart} currency={currency} coin1={coin1}setCoin1={setCoin1}/>))}
          </tbody>

          </table>}
     </div>
  )
}

export default TableCoin;


const TableRow=({coin,setChart,currency,coin1,setCoin1})=>{
  
  const {
      id,
      image, 
      symbol, 
      name, 
      current_price, 
      price_change_percentage_24h:price_change, 
      total_volume
  }= coin;
    
    const showHandler=async ()=>{      
      try {
        const res =await fetch(marketChart(id || coin1));
        const json=await res.json();
        setChart({...json,coin})
      } catch (error) {
        setChart(null);
      }
      
    }
    if(coin1===id){
      showHandler()
    }
    setCoin1(null)
    
  return (
    <tr>
        <td>
          <div className={styles.symbol} onClick={showHandler}>
            <img src={image} alt="" />
            <span>{symbol.toUpperCase()}</span>
          </div>
        </td>
        <td>{name}</td>
        <td>{currency=="usd"?"$":currency=="eur"?<FaEuroSign />:<BsCurrencyYen />}{current_price.toLocaleString()}</td>
        <td className={price_change>0? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td><img src={price_change>0 ?chartUp:chartDown} alt="" /></td>
     </tr>
  )
}

