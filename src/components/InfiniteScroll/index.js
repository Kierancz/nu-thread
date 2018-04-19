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
        && this.props.items.length) {
        console.log('should get next page');
        //this.props.onPaginatedSearch();
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

export default withInfiniteScroll;
