import { connect } from 'react-redux';
import ItemGrid from '../../components/ItemGrid';
import { requestItems } from '../../redux/actions/items';
import { requestItemPage } from '../../redux/actions/items';

const mapStateToProps = (state) => {
  const { items, nextPage, isLoading, allLoaded } = state.items;
  return {
    items,
    nextPage,
    isLoading,
    allLoaded
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
