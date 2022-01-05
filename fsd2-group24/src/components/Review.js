import React, { useState } from 'react'
import "./Review.css"
import { BiTired, BiMeh,BiSmile } from 'react-icons/bi';
import { FiFrown } from 'react-icons/fi';
import { FaRegGrinHearts } from 'react-icons/fa';


function Review() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("")
  const [comment, setComment] = useState(false);
  const [suggestions, setSuggestions] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [rate, setRate] = useState("1");
  const [remarks, setRemarks] = useState("");
  const newExperience = () => {
    const ExperienceData = new FormData()
    ExperienceData.append('comment', comment);
    ExperienceData.append('suggestions', suggestions);
    ExperienceData.append('questions', questions);
    ExperienceData.append('rate', rate);
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

        <div class="rating-css custom">
         <label for="satisfaction">Overall satisfaction</label>
        <div class="star-icon">
          <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired"><BiTired/></label>
          <input type="radio" name="rating1" id="rating2" value={rate} onChange={() => setRate("2")} />
          <label for="rating2" class="far fa-frown"><FiFrown/></label>
          <input type="radio" name="rating1" id="rating3" value={rate} onChange={() => setRate("3")} />
          <label for="rating3" class="far fa-meh"><BiMeh/></label>
          <input type="radio" name="rating1" id="rating4" value={rate} onChange={() => setRate("4")} />
          <label for="rating4" class="far fa-smile"><BiSmile/></label>
          <input type="radio" name="rating1" id="rating5" value={rate} onChange={() => setRate("5")} />
          <label for="rating5" class="far fa-grin-beam"><FaRegGrinHearts/></label>
        </div>
      </div>
            <label for="lname">Last Name</label>

      <div class="chart-scale">
        <input type="radio" />
          <label for="rating1" class="BiTired">1</label>
        <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">2</label>
        <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">3</label>
        <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">4</label>
         <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">5</label>
         <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">6</label>
          <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">7</label>
          <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">8</label>
          <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">9</label>
          <input type="radio" name="rating1"  value={rate} onChange={() => setRate("1")} />
          <label for="rating1" class="BiTired">10</label>
        </div>

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