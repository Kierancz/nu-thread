import { connect } from 'react-redux';
import ItemGrid from '../../components/ItemGrid';
import { getFilteredItems } from '../../redux/reducers';
import { loadItems } from '../../redux/actions/items';

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
    loadItems: () => {
      console.log("in mapDispatchToProps loadItems");
      dispatch(loadItems());
    }
  }
}

const FilteredItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemGrid);

export default FilteredItems;
