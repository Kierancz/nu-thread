import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import { addQuery } from '../../redux/actions/search';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => {
      dispatch(addQuery(query));
    }
  }
}

const SearchItems = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchItems;
