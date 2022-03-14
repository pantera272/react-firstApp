import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../redux/searchStringReducer';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {dispatch(addSearch(''))}, []);

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