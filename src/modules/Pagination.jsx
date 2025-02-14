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
        <p onClick={PaginationHandler} className={page===1?styles.selected:styles.unselected}>1</p>
        <p onClick={PaginationHandler} className={page===2?styles.selected:styles.unselected}>2</p>
        {page>2 && page<9&&(
          <>
            <span>...</span>
            <p className={styles.selected}>{page}</p>
          </>)}
        <span>...</span>
        <p onClick={PaginationHandler} className={page===9?styles.selected:styles.unselected}>9</p>
        <p onClick={PaginationHandler} className={page===10?styles.selected:styles.unselected}>10</p>
        <button onClick={nextHandler}className={page===10?styles.disabled:null}>next</button>
    </div>
  )
}

export default Pagination