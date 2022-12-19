import { Label } from './Filter.styled';
import { InputStyled } from '../Elements/Elements.styled';
import { useDispatch } from 'react-redux/es/exports';
import { setNameFilter } from '../../redux/contacts/filterSlice';

function Filter() {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setNameFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <InputStyled type="text" name="name" onChange={onFilterChange} />
    </Label>
  );
}

export default Filter;
