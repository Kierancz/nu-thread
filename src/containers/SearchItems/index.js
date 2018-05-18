import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import { addQuery } from '../../redux/actions/search';

const mapStateToProps = state => {
  return {
    query: state.search.query
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSearch: query => {
      dispatch(addQuery(query));
    }
  }
}

const SearchItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default SearchItems;
