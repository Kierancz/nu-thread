import { connect } from 'react-redux';
import SearchConfigForm from '../../components/SearchConfigForm';
import { addConfig } from '../../redux/actions/search';

const mapStateToProps = (state) => {
  return {
    config: state.search.config
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (config) => {
      dispatch(addConfig(config));
    }
  };
};

const SearchConfig = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchConfigForm);

export default SearchConfig;
