import Feedbackitem from "./Feedbackitem"

function Feedbacklist({feedback,handleDelete}) {
  
  return (
    <div>
      {feedback.map((item,index)=>(
        <Feedbackitem item={item} handleDelete={handleDelete} key={index}/>
        ))}
    </div>
  )
}


export default Feedbacklist
