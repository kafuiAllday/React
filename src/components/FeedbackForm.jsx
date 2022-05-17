import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import {useState} from "react";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    const newFeedback = {
      text,
      rating,
    };
    handleAdd(newFeedback);
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              type="text"
              value={text}
              placeholder="Write a review"
              onChange={handleChange}
            />
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
