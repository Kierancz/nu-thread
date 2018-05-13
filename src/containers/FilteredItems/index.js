import { connect } from 'react-redux';
import ItemGrid from '../../components/ItemGrid';
import { getFilteredItems } from '../../redux/reducers';
import { requestItems } from '../../redux/actions/items';
import { requestItemPage } from '../../redux/actions/items';

const mapStateToProps = (state) => {
  const { nextPage, isLoading, allLoaded } = state.items;
  return {
    nextPage,
    isLoading,
    allLoaded,
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
    },
    onPaginatedSearch: (page) => {
      dispatch(requestItemPage(page));
    }
  }
}

const FilteredItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemGrid);

export default FilteredItems;
