import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions/items'
import FLink from '../../components/FLink';

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
      dispatch(setFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FLink);

export default FilterLink;
