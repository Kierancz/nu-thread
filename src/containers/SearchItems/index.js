import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: () => {
      dispatch(requestItems());
    }
  }
}

const SearchItems = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchItems;
