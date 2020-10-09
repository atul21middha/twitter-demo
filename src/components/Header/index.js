import React from 'react';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {onUserSignOut} from "../../redux/actions/Auth";
import {Link} from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className='px-5 py-2 border-bottom d-flex align-items-center'>
      <Link to='/home' style={{cursor: 'pointer'}}>
        <img src={require('../../assets/images/twitter_logo.png')} alt='logo' height={50} width={50}/>
      </Link>
      <div className='ml-5'>
        <TextField
          size="small"
          className='search-bar-grey w-100'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          placeholder="Search people around you"
        />
      </div>
      <div className='ml-auto'>
        <Button color="primary" variant="contained" onClick={() => dispatch(onUserSignOut())}>Sign Out</Button>
      </div>
    </div>
  );
};

export default Header;