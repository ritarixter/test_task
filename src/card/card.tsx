import { FC, useState } from "react"
import styles from './card.module.scss'
import deleteIcon from '../images/delete.svg'
import { ICard } from "../models/ICard"
import { useAppDispatch, useAppSelector } from "../services/hooks"
import { addLike, removeLike } from "../services/actions/card/card"

const Card: FC<ICard> = (props) => {
  const dispatch = useAppDispatch();
  const [isDeleted , setIsDeleted] = useState<boolean>(false);
  return (
    <li className={` ${styles.card} ${isDeleted && styles.card__delete_hidden}`}>
      <button className={`${styles.btn} ${styles.card__delete} `} onClick={()=>{setIsDeleted(true)}}>
        <img src={deleteIcon} alt="Кнопка удаления карточки"/>
      </button>
      <img src={props.link} alt={props.name} className={styles.card__image}/>
      <div className={styles.card__content}>
        <h2 className={styles.card__name}>{props.name}</h2>
        <div className={styles.card__like}>
          <button type="button" className={`${styles.btn} ${styles.card__btn} ${props.likes && styles.card__btn_active}`} onClick={()=>{props.likes ? dispatch(removeLike(props.index)) : dispatch(addLike(props.index))}}>
          </button>
          <p className={styles.card__like_number}>{props.likes}</p>
        </div>
      </div>
    </li>
  )}

  export default Card