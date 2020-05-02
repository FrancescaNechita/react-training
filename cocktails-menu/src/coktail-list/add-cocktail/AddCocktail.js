import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../../assets/Buttons.css';
import '../../assets/Inputs.css';
import './AddCocktail.css';

function AddCocktail(props) {
  return (<div>
    <Formik
      initialValues={{ imageUrl: "", name: "", ingredient1: "", ingredient2: "", quantity: 0 }}
      validate={values => {
        const errors = {};
        if (!values.imageUrl) {
          errors.imageUrl = 'Required'
        } else if (!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(values.imageUrl)) {
          errors.imageUrl = 'The url is not valid!'
        }

        if (!values.name) {
          errors.name = 'Required'
        } else if (values.name.length > 30) {
          errors.name = 'The maximum length is 30!'
        }

        if (!values.ingredient1) {
          errors.ingredient1 = 'Required'
        }

        if (!values.ingredient2) {
          errors.ingredient2 = 'Required'
        }

        if (!values.quantity && values.quantity !== 0) {
          errors.quantity = 'Required'
        } else if (isNaN(values.quantity)) {
          errors.quantity = 'The quantity has to be a number!'
        } else if (+values.quantity < 1) {
          errors.quantity = 'The quantity has to be at least equal with 1!'
        }
        return errors;
      }}

      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting = false;
        props.history.push('/');
      }}
    >
      {({ errors, values, isSubmitting }) =>
        (<Form className="cocktail-details">
          <div>
            <img src={!errors.imageUrl ? values.imageUrl : undefined} alt="Cocktail will be shown here" />
          </div>
          <div className="input-section">
            <div><span className="detail">ImageUrl</span>
              <Field className="form-input" type="imageUrl" name="imageUrl" placeholder="ImageUrl"></Field>
              <span className="error-message"><ErrorMessage name="imageUrl" ></ErrorMessage></span>
            </div>

            <div><span className="detail">Name</span>
              <Field className="form-input" type="name" name="name" placeholder="Name"></Field>
              <span className="error-message"><ErrorMessage name="name" ></ErrorMessage></span>
            </div>

            <div><span className="detail">Ingredient1</span>
              <Field className="form-input" type="ingredient1" name="ingredient1" placeholder="Ingredient1"></Field>
              <span className="error-message"><ErrorMessage name="ingredient1" ></ErrorMessage></span>
            </div>

            <div><span className="detail">Ingredient2</span>
              <Field className="form-input" type="ingredient2" name="ingredient2" placeholder="Ingredient2"></Field>
              <span className="error-message"><ErrorMessage name="ingredient2" ></ErrorMessage></span>
            </div>

            <div><span className="detail">Quantity</span>
              <Field className="form-input" type="quantity" name="quantity" placeholder="Quantity"></Field>
              <span className="error-message"><ErrorMessage name="quantity" ></ErrorMessage></span>
            </div>

            <button className="basic-button" type="submit" disabled={isSubmitting || Object.keys(errors).length !== 0}>
              Submit
            </button>
          </div>
        </Form>)}
    </Formik>
  </div>);
}

export default withRouter(AddCocktail)
