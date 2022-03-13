import styles from './Favorites.module.scss';
import { useSelector } from "react-redux";
import { getFavoriteCard } from "../../redux/store";
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";

const Favorites = () => {

  const cards = useSelector(getFavoriteCard);
  console.log(cards);
  return (
    <div className={styles.container}>
      <PageTitle>Favorites</PageTitle>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id}/>)}
      </ul>
    </div>
    
  )
}

export default Favorites;