import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic Workouts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.dmoose.com/cdn/shop/articles/Main-Image_f389f0f9-ef75-42ec-98bf-0f0259ad540a.jpg?v=1666358433'
              text='Explore the killer leg workouts'
              label='Legs'
              path='/workouts'
            />
            <CardItem
              src='https://www.dmoose.com/cdn/shop/articles/feature-image_664d327f-547e-4e9e-aae3-3e9d651d2cea.jpg?v=1683545606'
              text='Tap into muscle numbing chest excercises'
              label='Chest'
              path='/workouts'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.dmoose.com/cdn/shop/articles/1_2_1.jpg?v=1656429275'
              text='Set sail in the uncharted Waters of maximum bicep gainz'
              label='Biceps'
              path='/workouts'
            />
            <CardItem
              src='https://www.dmoose.com/cdn/shop/articles/Main_Image_85cf48c3-959d-42d4-a91a-c54959994076.jpg?v=1688809842'
              text='Gain flawless tricep through these tricep workouts'
              label='Triceps'
              path='/workouts'
            />
            <CardItem
              src='https://www.t-nation.com/wp-content/uploads/2019/12/11-Ab-Exercises-Youll-Love-to-Hate.jpeg'
              text='Washboard abs core workouts'
              label='Core'
              path='/workouts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
