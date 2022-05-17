import React, { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/Feedbacklist'


import FeedbackData from './Data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'

function App() {
  const[feedback,setFeedback]=useState(FeedbackData)
  const Deletefeedback=(id)=>{
    setFeedback(feedback.filter((item)=>item.id!==id)) 
  }
  const addFeedback=(newFeedback)=>{
    setFeedback([newFeedback,...feedback])
  }
  return (
    <div>
      <Header/>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={Deletefeedback}/>
    </div>
  
  )
}

export default App
