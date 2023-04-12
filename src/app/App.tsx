import { useEffect } from 'react';
import Card from '../card/card';
import styles from './app.module.scss';
import { cardsLoad } from '../utils/api';
import { useAppDispatch, useAppSelector } from '../services/hooks';

function App() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.cards.cards)
  useEffect(()=>{
    dispatch(cardsLoad())
    console.log(cards)
  },[])
  return (
    <div className={styles.app}>
      <ul className={styles.cards}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </ul>
   
    </div>
  );
}

export default App;
