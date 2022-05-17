

function FeedbackStats({feedback}) {
  const Average= feedback.reduce((acc,cur)=>{
    return acc + cur.rating
  },0)/feedback.length
  return (
    <>
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>Average rating : {Average}</h3>
    </div>
    </>
  )
}

export default FeedbackStats
