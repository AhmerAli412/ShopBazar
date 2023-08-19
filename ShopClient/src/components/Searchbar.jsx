// import React from 'react'
// import './Search.css'

// const Searchbar = () => {
//     return (
//         <div>
//             search
//         </div>
//     )
// }

// export default Searchbar

import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Woodland Hills'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
