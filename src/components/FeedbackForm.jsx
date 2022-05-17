import Card from './share/Card'
import Button from './share/Button'

function FeedbackForm({handleAdd}) {
    const[text, setText]=useState('')
    const[rating, ratingText]=useState('')
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=()=>{
        const newFeedback={
            text,
            rating
        }
        handleAdd(newFeedback)
    }
    

  return (
      <> 
      <Card>     
    <form onsubmit={handleSubmit}>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className='input-group'>
            <input type='text' value={text}
            placeholder='Write a review' onchange={handleChange} />
            <Button type='submit'>Send</Button>

        </div>
    </form>
      </Card>   
      </>
  )
}

export default FeedbackForm
