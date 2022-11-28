import React from 'react';
import styles from './ingredients.module.css'
import Card from '../card/card';
import PropTypes from 'prop-types';

class Ingredients extends React.Component {
    render() {
        const {title, card} = this.props;
    return (
    <section className={`${styles.ingredients__item}`}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={`${styles.container} ml-4 mr-2 mb-10`}>
      {card.map((card) => (
        <li className={`${styles.card}`} key={card._id}>
          <Card card={card}/>
        </li>
      ))}
      </ul>
    </section>
    )
    }  
}
Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  card: PropTypes.arrayOf().isRequired
}
export default Ingredients 
