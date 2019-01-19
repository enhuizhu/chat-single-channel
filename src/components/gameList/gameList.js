import React from 'react';
import GameItem from '../gameItem/gameItem';

export default (props) => {
  return (
    <div className='game-list'>
      {
        props.items.map((v, index) => {
          return (
            <GameItem key={index} data={v}></GameItem>
          );
        })
      }
    </div>
  );
};