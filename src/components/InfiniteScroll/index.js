import React from 'react';

const withInfiniteScroll = (Component) =>
  class WithInfiniteScroll extends React.Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      const { 
        items, 
        isLoading, 
        allLoaded, 
        nextPage, 
        onPaginatedSearch 
      } = this.props;
      const height = window.innerHeight;
      const offsetHeight = document.body.offsetHeight;

      if(
        (height + window.scrollY) >= (offsetHeight - 500)
        && items
        && !isLoading
        && !allLoaded) 
      {
        onPaginatedSearch(nextPage);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

export default withInfiniteScroll;
