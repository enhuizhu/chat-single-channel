import React from 'react';

export default (props) => {
  let searchBox = {};
  
  const onSearch = () => {
    props.onSearch(searchBox.value);
  }

  return (
    <div className={'search-box ' + props.className}>
      <input 
        type='text' 
        placeholder='search game' 
        ref={(ref) => {searchBox = ref;}}
        onChange={onSearch}
      ></input>
      <i className='fas fa-search' onClick={onSearch}></i>
    </div>
  );
};