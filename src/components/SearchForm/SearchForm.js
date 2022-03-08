import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../redux/store';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    dispatch(addSearch(searchString));
    setSearchString('');
  } 

  return (
      <form className={styles.searchForm} onSubmit={handleSearch}>
          <TextInput value={searchString}  placeholder="Search" onChange={e => setSearchString(e.target.value)}/>
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;