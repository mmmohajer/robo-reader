import React, { useState, useContext } from 'react'

import './Output.css'

import StateContext from '../../StateContext'

const Output = () => {
	const { summary, wordCloud, isLoading } = useContext(StateContext)
	const [tab, setTab] = useState("summary")

	const summaryBtn = (e) => {
		setTab("summary")
		let swtichBtns = document.querySelectorAll(".output-tab")
		swtichBtns.forEach(el => {
			el.classList.remove("active")
		})
		e.target.classList.add("active")
	}

	const cloudBtn = (e) => {
		setTab("wordCloud")
		let swtichBtns = document.querySelectorAll(".output-tab")
		swtichBtns.forEach(el => {
			el.classList.remove("active")
		})
		e.target.classList.add("active")
	}

	return (
		<div className = "output">
			<div onClick = { summaryBtn } className = "output-tab active">Summary</div>
			<div onClick = { cloudBtn } className = "output-tab output-tab-last">Word Cloud</div>

			{(isLoading) && (
	            <div className = "loading">Loading...</div>
	        )}

			{(summary && tab == "summary" && !isLoading) && (
	            <div className = "summary-content">{summary}</div>
	        )}

	        {(summary && tab == "wordCloud" && !isLoading) && (
	            <div className = "cloudField"><img className = "cloudImg" src={`data:image/jpeg;base64,${wordCloud}`} /></div>
	        )}

	        {((!summary || !wordCloud) && !isLoading) && (
	            <div className = "output-result">The output will be shown here; you can
				swith the tab to see word cloud/summary of the text. 
				</div>
	        )}

		</div>
	)
}

export default Output