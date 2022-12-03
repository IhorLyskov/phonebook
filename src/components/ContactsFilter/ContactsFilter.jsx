import { useDispatch } from 'react-redux';
import { LabelStyled, InputStyled } from './ContactsFilter.styled';
import { setFilter } from '../../redux/filterSlice';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = element => {
    dispatch(setFilter(element.target.value));
  };

  return (
    <>
      <LabelStyled htmlFor="search">Find contacts by name</LabelStyled>
      <InputStyled
        type="text"
        // value={filter}
        name="search"
        onChange={handleFilter}
      ></InputStyled>
    </>
  );
};

export default ContactsFilter;
