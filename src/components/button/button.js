import React from 'react';

export default (props) => {
  return (
    <div className={'btn ' + props.btnClass} onClick={props.onClick}>
      {props.children}
    </div>
  );
};