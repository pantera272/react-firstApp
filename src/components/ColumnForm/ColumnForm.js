import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addColumn } from '../../redux/columnsReducer';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    const {listId} = useParams();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title: title, icon: icon, listId: listId }));
        setTitle('');
        setIcon('');
    };
  

	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <TextInput id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label htmlFor="icon">Icon:</label>
      <TextInput id="icon" type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;