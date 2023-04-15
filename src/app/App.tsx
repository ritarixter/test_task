import { useEffect, useState } from 'react';
import Card from '../card/card';
import styles from './app.module.scss';
import { useAppDispatch, useAppSelector } from '../services/hooks';
import { getCardsData } from '../services/actions/card/card';

function App() {
  const [likes, setLikes] = useState<number>(0)
  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.cards.cards)
  useEffect(()=>{
    dispatch(getCardsData())
  },[])

  const handlerClick = () =>{

  }

  return (
    <div className={styles.app}>
      <button className={styles.filter} type='button' onClick={()=>{

      }}>Фильтр</button>
      <ul className={styles.cards}>
      {cards.map((item, index)=>(  
      <Card name={item.name} link={item.link} index={item.index}key={item.index} likes={item.likes} />)
      )}
      </ul>
   
    </div>
  );
}

export default App;
