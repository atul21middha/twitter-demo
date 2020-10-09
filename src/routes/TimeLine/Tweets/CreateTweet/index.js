import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {useDropzone} from "react-dropzone";
import Button from "@material-ui/core/Button";
import {onCreateNewTweet} from "../../../../redux/actions/TimeLine";
import {idGenerator} from "../../../../utils/commonHelpers";

const CreateTweet = () => {
  const dispatch = useDispatch();
  const {authUser} = useSelector(({auth}) => auth);
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*, .pdf',
    multiple: true,
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file => {
        return {
          id: Math.floor(Math.random() * 10000),
          path: file.path,
          metaData: {type: file.type, size: file.size},
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  const onAddAttachments = files => {
    setAttachments([...attachments, ...files]);
  };

  const onSubmitTweet = () => {
    const tweet = {
      content,
      attachments,
      author: authUser,
      id: idGenerator(),
      date: new Date().toString(),
      likes: 0,
      comments: [],
      reTweets: 0
    };
    dispatch(onCreateNewTweet(tweet));
    setAttachments([]);
    setContent('');
  };

  return (
    <Card className='p-4'>
      <div className='d-flex'>
        <Avatar size={40} src={authUser.profilePic} alt={authUser.name}/>
        <div className='ml-4 flex-grow-1'>
          <TextField
            className='text-decoration-none'
            placeholder="What's in your mind?"
            multiline
            rows={2}
            fullWidth
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className='mt-2 d-flex flex-wrap'>
        {attachments.map((item, index) => (
          <div className='p-1' key={index}>
            <img src={item.preview} alt='attachment' height={100} width={100}/>
          </div>))}
      </div>
      <div className='d-flex mt-4'>
        <div
          {...getRootProps()}
          className="d-flex align-items-center mr-2">
          <input {...getInputProps()} />
          Add Image
        </div>
        <div className='ml-auto'>
          <Button
            size="small"
            color="primary"
            variant="contained"
            disabled={!content.trim() && attachments.length === 0}
            onClick={onSubmitTweet}>
            Tweet
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CreateTweet;