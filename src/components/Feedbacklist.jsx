import Feedbackitem from "./Feedbackitem"

function Feedbacklist({feedback,handleDelete}) {
  
  return (
    <div>
      {feedback.map((item)=>(
        <Feedbackitem item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}


export default Feedbacklist
