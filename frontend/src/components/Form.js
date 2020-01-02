import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	TextField: {
		width:'100%',
		margin: '1rem 0',
	},
}));

function Form(props) {
	// title, content 입력과 인풋창 표시를 위한 state
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState('');

	//Create
	// const post = async (tit , con) => {
	// 	await axios({
	// 		url : 'http://localhost:8000/api/posts/',
	// 		method: 'post',
	// 		data : {
	// 			title : tit,
	// 			content : con,
	// 		}
	// 	})
	// }

	const onSubmit = (evt) => {
		evt.preventDefault();

		if(title.trim().length === 0 || content.trim().length === 0){
            alert('뭔가 내용이 비어있어용');
        }
        else if(title.trim().length >= 30 || content.trim().length >= 200){
			alert('뭔가 내용이 너무 길어요');
        }
		else {
			props.onPostData(title, content, image);
			// console.log(title, image, content)
			// 내용 비우기
			setTitle("");
			setContent("");
			setImage("");
		}
	};
	const handleImageChange = (e) => {
		setImage({
		  image:e.target.files[0]
		})
	};
	const classes = useStyles();

	return (
		<form onSubmit={onSubmit} className={classes.root}>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={12}>
					<Grid container direction="column" justify="center" alignItems="center">
						<TextField id="outlined-name" label="제목" rows="1" defaultValue="Default Value" variant="outlined" className={classes.TextField}
							name="title"
							value={title}
							onChange={e=>setTitle(e.target.value)}
						/>
						<TextField id="outlined-name" label="내용" rows="1" defaultValue="Default Value" variant="outlined" className={classes.TextField}
							name="content"
							value={content}
							onChange={e=>setContent(e.target.value)}
						/>
						<input 
						type = "file" 
						onChange={handleImageChange}
						/>
						<img src={image} />
					</Grid>	
				</Grid>		
				<Grid item xs={12}>
					<Grid container direction="row" justify="flex-end" alignItems="center">
						<Button variant="contained" color="primary" type="submit">
							제출하기
						</Button>	
					</Grid>
				</Grid>	
			</Grid>	
		</form>
	)
}

export default Form;