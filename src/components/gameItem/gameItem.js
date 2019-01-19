import React from 'react';
import Button from '../button/button';
import ApiService from '../../services/apiService';

export default (props) => {
  return (
    <div className='game-item'>
      <img src={ApiService.getUrl(props.data.icon)} className='pull-left'></img>
      <div className='content pull-left'>
        <div className='title bold'>{props.data.name}</div>
        <div className='description'>{props.data.description}</div>
        <Button btnClass='pull-right'>Play</Button>
      </div>
      <div className='clear'></div>
    </div>
  );
};