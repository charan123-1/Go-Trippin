import React, { useState } from 'react'
import "./Review.css"
import { FaRegGrinHearts,FaRegTired,FaRegFrownOpen,FaRegMeh,FaRegSmile } from 'react-icons/fa';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Review() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("")
  const [comment, setComment] = useState(false);
  const [suggestions, setSuggestions] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [rate, setRate] = useState(1);
  const [value, setValue] = useState(2);
  const [rate1, setRate1] = useState("6");
  const [remarks, setRemarks] = useState("");
  const newExperience = () => {
    const ExperienceData = new FormData()
    ExperienceData.append('comment', comment);
    ExperienceData.append('suggestions', suggestions);
    ExperienceData.append('questions', questions);
    ExperienceData.append('rate', rate);
    ExperienceData.append('rate1', rate1);
    ExperienceData.append('remarks', remarks);
    fetch("http://127.0.0.1:8000/Frontend/experiences/", {
      method: 'POST',
      body: ExperienceData
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
  function SuBmiT() {
    alert("We have received your request");
  }
  const newReview = () => {
    const ReviewData = new FormData()
    ReviewData.append('firstname', firstname);
    ReviewData.append('lastname', lastname);
    ReviewData.append('message', message);
    fetch("http://127.0.0.1:8000/Frontend/Review/", {
      method: 'POST',
      body: ReviewData
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  return (
    <div class="container">
      <div >
        <h2 id="ch2">Drop a Review</h2>
        <p id="cp">Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div class="row">
        <div class="column">
          <form className="Form">

        <div class="rating-css-1">
         <label for="satisfaction">Overall satisfaction</label>
        <div class="star-icon">
          <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" ><FaRegTired size ={40}/></label>
          <input type="radio" name="rating1" id="rating2" value={rate} onChange={() => setRate("2")} />
          <label for="rating2" ><FaRegFrownOpen size ={40}/></label>
          <input type="radio" name="rating1" id="rating3" value={rate} onChange={() => setRate("3")} />
          <label for="rating3" ><FaRegMeh size ={40}/></label>
          <input type="radio" name="rating1" id="rating4" value={rate} onChange={() => setRate("4")} />
          <label for="rating4" ><FaRegSmile size ={40}/></label>
          <input type="radio" name="rating1" id="rating5" value={rate} onChange={() => setRate("5")} />
          <label for="rating5" ><FaRegGrinHearts size ={40}/></label>
        </div>
      </div>

      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rate the tour</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </Box>

            <label for="subject">Review</label>
            <textarea id="csubject" name="subject" placeholder="Write something.." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <input type="submit" id="csubmit" onClick={() => newReview()} />
          </form>
        </div>
      </div>
    </div>



  );


}

export default Review;