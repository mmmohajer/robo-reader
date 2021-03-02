import React, { useState, useContext } from 'react'
import Axios from 'axios'

import './Form.css'

import DispatchContext from '../../DispatchContext'

const Form = () => {
	const appDispatch = useContext(DispatchContext)
	const [url, setUrl] = useState()

	const submitHandler = async (e) => {
		e.preventDefault()
		appDispatch({ type: "loadingOn" })

	    try {
	      const response = await Axios.get(`/roboreader?weburl=${url}`)
	      appDispatch({ type: "outputReady", data: response.data })
	      appDispatch({ type: "loadingOff" })
	    } catch(err) {
	      console.log(err)
	    } 
	}

	return (
		<>
			<form onSubmit = { submitHandler }>
				<input className = "form-text" onChange = {e => setUrl(e.target.value)} type="text" />
				<button className = "form-button">Submit</button>
			</form>
		</>
	)
}

export default Form