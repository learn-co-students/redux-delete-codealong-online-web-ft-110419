import React from 'react'

const Todo = props => {
	console.log(props)
	return (
		<li>
			<span>{props.text}   </span>
			<button onClick={() => props.deletes(props.id)}>Delete This Todo</button>
			<br />
		</li>
	)
}

export default Todo;
