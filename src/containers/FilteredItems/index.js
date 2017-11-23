import { connect } from 'react-redux';
import ItemGrid from '../../components/ItemGrid';

const getFilteredItems = (items, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return items;
    case 'PRICE_ASC':
      return items.slice().sort((a, b) => {
        return (
          parseFloat(
            a
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
          -
          parseFloat(
            b
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
        );
      });
    case 'PRICE_DESC':
      return items.slice().sort((a, b) => {
        return (
          parseFloat(
            b
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
          -
          parseFloat(
            a
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
        );
      });
    default:
      return items;
  }
}

const mapStateToProps = (state) => {
  return {
    items: getFilteredItems(
      state.items,
      state.filter
    )
  };
};

const FilteredItems = connect(mapStateToProps)(ItemGrid);

export default FilteredItems;