import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import { requestItems } from '../../redux/actions/items';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => {
      dispatch(requestItems(query));
    }
  }
}

const SearchItems = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchItems;
