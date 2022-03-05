import axios from 'axios';
import { useState } from 'react';

// Components
import Button from '../UI/button/button.component';

import classes from './form.styles.module.css';

const Form = ({ onAddTodo }) => {
	// State
	const [todo, setTodo] = useState('');
	const [showError, setShowError] = useState(false);

	const onSubmitHandler = event => {
		event.preventDefault();

		// Show error if input is empty
		if (!todo) {
			setShowError(true);
			return;
		}

		// TODO: Send data to API
		axios.post('http://localhost:4000/api/v1/todos', { content: todo, userId: 1})
		.then((response) => {
			// Send data to App.js
		const newTodo = {
			//id: Math.floor(Math.random() * 1000),
			content: todo,
		};

		onAddTodo(newTodo);
		})
		.catch(error => {
			console.log(error);
		})
		
		setTodo('');
	};

	const onChangeHandler = event => {
		const newValue = event.target.value;

		if (newValue.length > 0) setShowError(false);
		else setShowError(true);

		setTodo(newValue);
	};

	return (
		<form onSubmit={onSubmitHandler} className={classes.form}>
			<div className={classes.form__container}>
				<label className={classes.form__label} htmlFor="todo">
					Enter your To Do:
				</label>
				<input
					className={`${classes.form__input} ${showError ? classes.error : ''}`}
					placeholder="Enter a desscription"
					type="text"
					value={todo}
					onChange={onChangeHandler}
					name="todo"
					id="todo"
				/>
			</div>
			<Button type="submit" label={'Submit'} />
		</form>
	);
};

export default Form;
