import styles from './Pagination.module.css'
function Pagination({page,setPage}) {
    
    const previousHandler=()=>{
        if(page<=1)return;
        setPage((page)=>page-1)
    }
    const nextHandler=()=>{
        if(page>=20)return;
        setPage((page)=>page+1)
    }
    const PaginationHandler=(event)=>{
      const x=event.target.innerText;
      setPage(Number(x))
    }
  return (
    <div className={styles.pagination}>
        <button onClick={previousHandler} className={page===1?styles.disabled:null}>previous</button>
        <button onClick={PaginationHandler} className={page===1?styles.selected:null}>1</button>
        <button onClick={PaginationHandler} className={page===2?styles.selected:null}>2</button>
        {page>2 && page<9&&(
          <>
            <span>...</span>
            <p className={styles.selected}>{page}</p>
          </>)}
        <span>...</span>
        <button onClick={PaginationHandler} className={page===9?styles.selected:null}>9</button>
        <button onClick={PaginationHandler} className={page===10?styles.selected:null}>10</button>
        <button onClick={nextHandler}className={page===10?styles.disabled:null}>next</button>
    </div>
  )
}

export default Pagination