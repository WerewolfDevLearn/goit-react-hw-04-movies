import { useState } from 'react';
import PropTypes from 'prop-types';

import SrchbarStyle from './Searchbar.module.css';

function Searchbar({ onSubmitForm }) {
  const [inputValue, setInputValue] = useState('');

  const onInputValue = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const onSubmitSearchForm = e => {
    e.preventDefault();
    onSubmitForm(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitSearchForm} className={SrchbarStyle.SearchForm}>
      <button type="submit" className={SrchbarStyle.SearchFormButton}>
        Search
      </button>
      <input
        className={SrchbarStyle.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        name="inputValue"
        value={inputValue}
        onChange={onInputValue}
      />
    </form>
  );
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
