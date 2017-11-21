import { connect } from 'react-redux';
//import setVisibilityFilter from '../../redux/actions/items'
import FLink from '../FLink';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.filter ===
      state.filter
  };
};

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_FILTER',
        filter: ownProps.filter
      });
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FLink);

export default FilterLink;