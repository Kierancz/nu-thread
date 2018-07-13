import { connect } from 'react-redux';
import { addSortType } from '../../redux/actions/search';
import FLink from '../../components/FLink';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.sortType === state.search.sortType
  };
};

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(addSortType(ownProps.sortType));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FLink);

export default FilterLink;
