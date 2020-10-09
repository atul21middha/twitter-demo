import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from "@material-ui/core/CircularProgress";
import {useDispatch, useSelector} from "react-redux";
import {hideMessage} from "../../redux/actions/Common";


const InfoView = () => {
  const dispatch = useDispatch();

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.error || nextProps.alertMessage) {
  //     setTimeout(() => {
  //       this.props.hideMessage();
  //     }, 1500);
  //   }
  // }

  const {error, loading} = useSelector(({common}) => common);

  return (
    <>
      {loading && <div className="position-absolute" style={{
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        zIndex: 1000
      }}>
        <CircularProgress/>
      </div>}
      {error && <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={true}
        autoHideDuration={3000}
        onClose={() => dispatch(hideMessage())}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{error}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={() => dispatch(hideMessage())}
          >
            <CloseIcon/>
          </IconButton>,
        ]}
      />}
    </>
  );
};


export default InfoView;
