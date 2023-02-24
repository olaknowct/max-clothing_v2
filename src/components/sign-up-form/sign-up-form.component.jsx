import { useState } from 'react';
import { createAuthUserWithEmailAndPassowrd, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');

      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassowrd(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action='' onSubmit={handleSubmit}>
        <FormInput required label='Display Name' type='text' onChange={handleChange} name='displayName' value={displayName} />

        <FormInput required label='Email' type='email' onChange={handleChange} name='email' value={email} />

        <FormInput required label='Password' type='password' onChange={handleChange} name='password' value={password} />

        <FormInput required label='Confirm Password' type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
