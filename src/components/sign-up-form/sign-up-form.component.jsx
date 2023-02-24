import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action='' onSubmit={() => {}}>
        <label>Display Name</label>
        <input required type='text' onChange={handleChange} name='displayName' value={displayName} />

        <label>Email</label>
        <input required type='email' onChange={handleChange} name='email' value={email} />

        <label>Password</label>
        <input required type='password' onChange={handleChange} name='password' value={password} />

        <label>Confirm Password</label>
        <input required type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
