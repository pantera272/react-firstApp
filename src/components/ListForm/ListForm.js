import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <TextInput id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label htmlFor="icon">Description:</label>
      <TextInput id="icon" type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add column</Button>
    </form>
  )
}

export default ListForm;