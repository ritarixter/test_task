import { FC, useState } from "react"
import styles from './card.module.scss'
import deleteIcon from '../images/delete.svg'

const Card: FC = () => {
  const [likes, setLikes] = useState<number>(0)
  const [isDeleted , setIsDeleted] = useState<boolean>(false);
  return (
    <li className={` ${styles.card} ${isDeleted && styles.card__delete_hidden}`}>
      <button className={`${styles.btn} ${styles.card__delete} `} onClick={()=>{setIsDeleted(true)}}>
        <img src={deleteIcon} alt="Кнопка удаления карточки"/>
      </button>
      <img src="https://placeimg.com/540/480/any" alt="" className={styles.card__image}/>
      <div className={styles.card__content}>
        <h2 className={styles.card__name}>Заголовок</h2>
        <div className={styles.card__like}>
          <button type="button" className={`${styles.btn} ${styles.card__btn} ${likes && styles.card__btn_active}`} onClick={()=>{likes ? setLikes(0) : setLikes(1)}}>
          </button>
          <p className={styles.card__like_number}>{likes}</p>
        </div>
      </div>
    </li>
  )}

  export default Card