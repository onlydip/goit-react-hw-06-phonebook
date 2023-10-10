import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../redux/reducer'; 

import { FilterLabel, FilterInput } from './ContactFilter.styled';

export default function Filter({ title }) {
  const value = useSelector(state => state.contacts.filter); 
  const dispatch = useDispatch();

  const changeFilterValue = e => {
    dispatch(changeFilter(e.currentTarget.value)); 
  };

  return (
    <FilterLabel htmlFor="filter">
      {title}
      <FilterInput
        name="filter"
        type="text"
        value={value}
        onChange={changeFilterValue}
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
