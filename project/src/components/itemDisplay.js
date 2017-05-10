import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import { Link } from 'react-router-dom';

class ItemDisplay extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/items/${item.id}`}>{item.name}</Link>
              </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { getItems })(ItemDisplay);
