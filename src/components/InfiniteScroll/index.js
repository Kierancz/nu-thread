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
      let height = window.innerHeight;
      let offsetHeight = document.body.offsetHeight;
      if((height + window.scrollY) >= (offsetHeight - 500)
        && this.props.items.length
        && !this.props.isLoading) {
        console.log('should get next page');
        console.log('infScroll props: ', this.props);
        this.props.onPaginatedSearch(this.props.page);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

export default withInfiniteScroll;
