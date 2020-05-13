import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Form, Label, FormGroup, Input, FormText, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import authentication from '../../actions/authentication';
import {RegistrationModel} from '../../model/authentication-model';

export default function RegistrationComponent() {
  const dispatch = useDispatch();
  const [componentState] = useState({
    registration: {
      firstName: 'test',
      lastName: 'test',
      email: 'test@g.com',
      username: '',
      password: 'omsai',
      confirmPassword: 'omsai',
      role: 'user',
    },
  });

  function testConfirmPassword(this: any, value: Yup.TestContext) {
    // eslint-disable-next-line react/no-this-in-sfc
    return this.parent.password === value;
  }

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <Formik
              initialValues={componentState.registration}
              validationSchema={Yup.object().shape({
                firstName: Yup.string().required(
                  'The firstName field is required'
                ),
                lastName: Yup.string().required(
                  'The lastName field is required'
                ),
                email: Yup.string()
                  .email()
                  .required('The email field is required'),
                password: Yup.string()
                  .required('The password field is required')
                  .min(5, 'The password field must be at least 5 characters.'),
                confirmPassword: Yup.string()
                  .required('The confirmPassword field is required')
                  .min(
                    5,
                    'The confirmPassword field must be at least 5 characters.'
                  )
                  .test(
                    'passwords-match',
                    'Passwords do not match',
                    testConfirmPassword
                  ),
              })}
              onSubmit={(values: RegistrationModel) => {
                dispatch(authentication.userRegistration(values));
              }}
              render={({
                touched,
                errors,
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Fisrt Name*</Label>
                    <Input
                      invalid={touched.firstName && errors.firstName != null}
                      valid={touched.firstName && errors.firstName == null}
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.firstName && (
                      <FormText color="danger">{errors.firstName}</FormText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Last Name*</Label>
                    <Input
                      invalid={touched.lastName && errors.lastName != null}
                      valid={touched.lastName && errors.lastName == null}
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.lastName && (
                      <FormText color="danger">{errors.lastName}</FormText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Email*</Label>
                    <Input
                      invalid={touched.email && errors.email != null}
                      valid={touched.email && errors.email == null}
                      id="email"
                      type="text"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && (
                      <FormText color="danger">{errors.email}</FormText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.username && (
                      <FormText color="danger">{errors.username}</FormText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Password*</Label>
                    <Input
                      invalid={touched.password && errors.password != null}
                      valid={touched.password && errors.password == null}
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && (
                      <FormText color="danger">{errors.password}</FormText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Confirm Password*</Label>
                    <Input
                      invalid={
                        touched.confirmPassword &&
                        errors.confirmPassword != null
                      }
                      valid={
                        touched.confirmPassword &&
                        errors.confirmPassword == null
                      }
                      id="confirmPassword"
                      type="password"
                      placeholder="Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.confirmPassword && (
                      <FormText color="danger">
                        {errors.confirmPassword}
                      </FormText>
                    )}
                  </FormGroup>

                  <Button color="primary" type="submit" disabled={!isValid}>
                    Submit
                  </Button>
                  <Link to="/" className="ml-2">
                    Back to login
                  </Link>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
