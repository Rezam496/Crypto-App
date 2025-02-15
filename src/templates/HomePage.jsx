import React, { useEffect, useReducer, useState } from 'react';
import TableCoin from '../modules/Tablecoin';
import {getCoinList} from '../services/cryptoApi';
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
import Chart from '../modules/Chart';

const initalState={
  isLoading:true,
  data:[],
  error:"",
  currency:"usd"
}

const reducer=(state,action)=>{
  switch(action.type){
    case "SUCCESS":
      return{...state,isLoading:false,data:action.payload,error:""}
    case"FAILED":
      return{...state,isLoading:false,error:action.payload}
    case"CHANGE":
      return{...state,currency:action.payload}  
      default:
        throw new Error("Invalid Action")

  }
}
function HomePage() {
    const[state,despatch]=useReducer(reducer,initalState)
    // const[coins,setCoins]=useState([]);
    // const[isLoading,setIsLoading]=useState(true);
    // const[currency,setCurrency]=useState("usd");
    const[page,setPage]=useState(1);
    const[chart,setChart]=useState(null);
    const[coin1,setCoin1]=useState(null);
        
    useEffect(()=>{
      // setIsLoading(true)
      const getData=async()=>{
        try {
          const res=await fetch(getCoinList(page,state.currency));
          const json=await res.json();
          despatch({type:"SUCCESS",payload:json})
          // setCoins(json);
          // setIsLoading(false);
        } catch (error) {
          despatch({type:"FAILED" ,payload:error.message})
        }
        }
      getData();
    },[page,state.currency])
  return (
    <div>
      <Search currency={state.currency} despatch={despatch} setCoin1={setCoin1} />
      <TableCoin coins={state.data} isLoading={state.isLoading} setChart={setChart} currency={state.currency} coin1={coin1} setCoin1={setCoin1}/>
      <Pagination page={page} setPage={setPage}/>
      {!!chart&&<Chart chart={chart} setChart={setChart}/>}
    </div>
  )
}

export default HomePage