import React from 'react';
import Button from '../button/button';
import ApiService from '../../services/apiService';

export default (props) => {
  return (
    <div className={'profile ' + props.className }>
      {
        props.player ?
          (
            <div>
              <div className='avatar-wrapper'>
                <img src={ApiService.getUrl(props.player.avatar)} className='avatar'></img>
                <div className='profile-detail'>
                  <div className='bold'>{props.player.name}</div>
                  <div className='state'>{props.player.event}</div>
                </div>
                <div className='clear'></div>
              </div>
              <Button btnClass='arrow-left margin-top-10' onClick={props.onLogout}>Log Out</Button>
            </div>
          ) : 
          (
            <Button btnClass='arrow-left margin-top-10' onClick={props.onLogin}>Log In</Button>
          )
      }
      
    </div>
  );
}