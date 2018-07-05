import React from 'react';

const withInfiniteScroll = (Component) =>
  class WithInfiniteScroll extends React.Component {
    componentDidMount() {
      const { container } = this.props;
      const elem = container? 
        document.querySelector(container) : window;
      elem.addEventListener('scroll', this.onScroll, false);
    }
    componentWillUnmount() {
      const { container } = this.props;
      const elem = container? 
        document.querySelector(container) : window;
        elem.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      const { 
        items, 
        isLoading, 
        allLoaded, 
        nextPage, 
        onPaginatedSearch,
        container,
        content
      } = this.props;

      const wrapper = container?
        document.querySelector(container) : window;
      const scrollDown = wrapper? 
        wrapper.scrollTop :
        window.innerHeight;

      const elem = content? 
        document.querySelector(content) : 
        document.body;

      const initialHeight = wrapper.offsetHeight;
      const offsetHeight = elem.offsetHeight;

      const shouldFetch = initialHeight + scrollDown >= offsetHeight - 500;
      if(
        shouldFetch
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
