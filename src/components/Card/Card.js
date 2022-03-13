import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { favorite } from '../../redux/store';

const Card = props => {

  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(favorite(id));
  }

    return (
      <li className={styles.card}>
        <span>{props.title}</span>
        <button onClick={() => handleClick(props.id, props.isFavorite)} className={clsx(styles.button, props.isFavorite && styles.favorite)}>
          <span className='fa fa-star' />
        </button>
      </li>
    );
};

export default Card;