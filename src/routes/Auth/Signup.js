import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {invalidEmail, passwordNotMatch, requiredMessage} from "../../utils/errorMessages";
import {isValidEmail} from "../../utils/commonHelpers";
import {onUserSignUp} from "../../redux/actions/Auth";
import {useDispatch} from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const onSubmitDetails = () => {
    if (!name) {
      setNameError(requiredMessage)
    } else if (!email) {
      setEmailError(requiredMessage)
    } else if (!isValidEmail(email)) {
      setEmailError(invalidEmail)
    } else if (!password) {
      setPasswordError(requiredMessage)
    } else if (!confirmPassword) {
      setConfirmPasswordError(requiredMessage)
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(passwordNotMatch)
    } else {
      dispatch(onUserSignUp({name, email, password}))
    }
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100 p-5 vh-100'>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{minWidth: 400}}>
        <div>
          <img src={require('../../assets/images/twitter_logo.png')} alt='logo' height={100} width={100}/>
        </div>
        <div className='font-weight-bold h5'>Welcome to Twitter</div>

        <TextField
          label="Name"
          variant="outlined"
          size='small'
          required
          value={name}
          onChange={e => {
            setName(e.target.value);
            setNameError('');
          }}
          helperText={nameError}
          className='mt-4 w-100'
        />

        <TextField
          label="Email"
          variant="outlined"
          size='small'
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setEmailError('');
          }}
          helperText={emailError}
          className='mt-4 w-100'
        />

        <TextField
          label="Password"
          variant="outlined"
          size='small'
          type="password"
          required
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
          helperText={passwordError}
          className='mt-4 w-100'
        />

        <TextField
          label="Confirm Password"
          variant="outlined"
          size='small'
          type="password"
          required
          value={confirmPassword}
          onChange={e => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError('');
          }}
          helperText={confirmPasswordError}
          className='mt-4 w-100'
        />

        <Button variant="contained" color="primary" className=" mt-4 w-100 rounded-lg" type="submit"
                onClick={onSubmitDetails}>
          Get Started
        </Button>

        <p className='mt-2'>Already have an account? <Link to='/signin' className="text-primary">Login</Link></p>

      </div>
    </div>
  );
};

export default Signup;