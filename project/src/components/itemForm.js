import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class NewItemForm extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <Link to="/">Home</Link>
          <br />
          <label htmlFor="make">Make </label>
          <Field name="make" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="Model">Model </label>
          <Field name="model" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="cost">Cost </label>
          <Field name="cost" component="input" type="text" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

NewItemForm = reduxForm({
  form: 'new-item',
})(NewItemForm);

export default NewItemForm;
