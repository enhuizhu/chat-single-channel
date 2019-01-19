import React from 'react';

export default (props) => {
  return (
    <div className='list-wrapper'>
      <div className='list-title bold'>{props.title}</div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  );
};