import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {invalidEmail, requiredMessage} from "../../utils/errorMessages";
import {isValidEmail} from "../../utils/commonHelpers";
import {useDispatch} from "react-redux";
import {onUserSignIn} from "../../redux/actions/Auth";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onSubmitDetails = () => {
    if (!email) {
      setEmailError(requiredMessage)
    } else if (!isValidEmail(email)) {
      setEmailError(invalidEmail)
    } else if (!password) {
      setPasswordError(requiredMessage)
    } else {
      dispatch(onUserSignIn({email, password}))
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div>
        <img src={require('../../assets/images/twitter_logo.png')} alt='logo' height={100} width={100}/>
      </div>

      <div className='font-weight-bold h5'>Welcome to Twitter</div>

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
        className='mt-4 w-25'
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
        className='mt-4 w-25'
      />

      <Button variant="contained" color="primary" className=" mt-4 w-25 rounded-lg" type="submit"
              onClick={onSubmitDetails}>
        Login
      </Button>

      <p className='mt-2'>New to Twitter? <Link to='/signup' className="text-primary">Create Account</Link></p>

    </div>
  );
};

export default Login;