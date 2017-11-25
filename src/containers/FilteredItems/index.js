import { connect } from 'react-redux';
import ItemGrid from '../../components/ItemGrid';
import { getFilteredItems } from '../../redux/reducers';

const mapStateToProps = (state) => {
  return {
    items: getFilteredItems(
      state,
      state.filter
    )
  };
};

const FilteredItems = connect(mapStateToProps)(ItemGrid);

export default FilteredItems;