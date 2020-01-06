import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  TextField: {
    width:'100%',
    margin: '1rem 0',
  },
  Button: {
    margin: '1rem 0'
  }
}));

export default function ModalForm(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // 폼내용을 수정하는데 필요한 state
  const [title, setTitle] = useState(props.todo.title);
  const [content, setContent] = useState(props.todo.content);
  const [image, setImage] = useState(props.todo.image);

  const onEdit = (evt) => {
      evt.preventDefault();

      if(title.trim().length === 0 || content.trim().length === 0){
          alert('뭔가 내용이 비어있어용');
      }
      else if(title.trim().length >= 30 || content.trim().length >= 200){
          alert('뭔가 내용이 너무 길어요');
      }
      else {
          props.onPutData(props.todo.id, title, content, image);
          // 내용 비우기
          setTitle("");
          setContent("");
          setImage('');
          handleClose()
          console.log(props.todo.id, title, content, image)
      }
  };

  const handleImageChange = (e) => {
      setImage({
        image:e.target.files[0]
      })
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <IconButton  className={classes.iconButton} aria-label="directions" onClick={ handleOpen }>
            <EditOutlinedIcon/>
        </IconButton>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
              <form onSubmit={onEdit}>
                  <TextField label="제목" rows="1" variant="outlined" className={classes.TextField}
                      value={title}
                      onChange = {e=>setTitle(e.target.value)}
                      name="title"
                  >
                  </TextField>
                  <TextField label="내용" rows="1" variant="outlined" className={classes.TextField}
                      value={content}
                      onChange = {e=>setContent(e.target.value)}
                      name="content"
                  >
                  </TextField>
                  <input type = "file" onChange={handleImageChange} />
                  {/* 버튼 내용 쓰는 곳 */}
                  <Button  className={classes.Button} variant="contained" color="primary" type = "submit">{props.children}</Button>
              </form>
          </div>
        </Modal>
    </div>
  );
}