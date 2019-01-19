import React from 'react';

export default (props) => {
  return (
    <div className='categories-list'>
      {
        props.items.map((v, index) => {
          return (
            <div key={index} className='category-item bold' 
              onClick={() => {
                props.categoryChange(v);
              }}
            >
              {v.name}
            </div>
          );
        })
      }
    </div>
  );
};