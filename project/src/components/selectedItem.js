import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { selectItem } from '../actions';
import { connect } from 'react-redux';

class SelectedItem extends Component {
  componentDidMount() {
    this.props.selectItem(this.props.match.params.id);
  }

  render() {
    if (!this.props.selectedItem) return (
      <h1 style={{textAlign: 'center'}}> Item Not Found</h1>
    );

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Make: {this.props.selectedItem.make}</h1>
        <br />
        <h1>Model: {this.props.selectedItem.model}</h1>
        <br />
        <h1>Price: ${this.props.selectedItem.cost}</h1>
        <br />
        <Link to="/">Home</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem,
  };
};

export default connect(mapStateToProps, {selectItem})(SelectedItem);
