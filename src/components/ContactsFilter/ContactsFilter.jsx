import { useDispatch, useSelector } from 'react-redux';
import { LabelStyled, InputStyled } from './ContactsFilter.styled';
import { changeFilter } from '../../redux/filterSlice';

const ContactsFilter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleFilter = element => {
    dispatch(changeFilter(element.target.value));
  };

  return (
    <>
      <LabelStyled htmlFor="search">Find contacts by name</LabelStyled>
      <InputStyled
        type="text"
        value={filter}
        name="search"
        onChange={handleFilter}
      ></InputStyled>
    </>
  );
};

export default ContactsFilter;
