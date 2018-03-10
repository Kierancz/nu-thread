import { connect } from 'react-redux';
import ItemGrid from '../../components/ItemGrid';
import { getFilteredItems } from '../../redux/reducers';
import { requestItems } from '../../redux/actions/items';

const mapStateToProps = (state) => {
  return {
    items: getFilteredItems(
      state,
      state.filter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestItems: () => {
      dispatch(requestItems());
    }
  }
}

const FilteredItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemGrid);

export default FilteredItems;
