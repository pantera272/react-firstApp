import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { favorite } from '../../redux/cardsReducer';
import { deleteCard } from '../../redux/cardsReducer';

const Card = props => {

  const dispatch = useDispatch();

  const handleClickFavorite = id => {
    dispatch(favorite(id));
  }

  const handleClickDelete = id => {
    dispatch(deleteCard(id));
  }

    return (
      <li className={styles.card}>
        <span>{props.title}</span>
        <div>
          <button onClick={() => handleClickFavorite(props.id, props.isFavorite)} className={clsx(styles.button, props.isFavorite && styles.favorite)}>
            <span className='fa fa-star' />
          </button>
          <button className={styles.button} onClick={() => handleClickDelete(props.id)}>
            <span className='fa fa-trash' />
          </button>
        </div>
      </li>
    );
};

export default Card;