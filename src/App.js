import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema'
import './App.css';


function App() {

  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  // function validate(values) {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.name = 'Nome é obrigatorio'
  //   } if (!values.email) {
  //     errors.email = 'Email é obrigatorio'
  //   }
  //   return errors;
  // }

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        // validate={validate}
        validateOnMount
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        render={({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>

            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>

            <div>
              <label>Senha</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" />
            </div>

            <div>
              <label>Telefone</label>
              <Field name="telefone" type="phone" />
              <ErrorMessage name="telefone" />
            </div>

            <button type="submit" disabled={!isValid}>Enviar</button>

          </Form>
        )}
      />

    </div>
  );
}

export default App;
