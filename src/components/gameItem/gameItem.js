import React from 'react';
import Button from '../button/button';
import ApiService from '../../services/apiService';
import gameService from '../../services/gameService';

export default (props) => {
  return (
    <div className='game-item'>
      <img src={ApiService.getUrl(props.data.icon)} className='pull-left'></img>
      <div className='content pull-left'>
        <div className='title bold'>{props.data.name}</div>
        <div className='description'>{props.data.description}</div>
        <Button btnClass='pull-right' onClick={() => {
          console.log('game code', props.data.code);
          gameService.open(props.data.code);
        }}>Play</Button>
      </div>
      <div className='clear'></div>
    </div>
  );
};