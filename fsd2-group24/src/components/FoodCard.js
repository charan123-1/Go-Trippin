import "./FoodCard.css";
import formatCurrency from "format-currency";
import {useState} from 'react';


import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const FoodCard = ({ Food }) => {

    const [value, setValue] = useState(1);
    return (

    <div className="cont">
        <div className='FoodCard__wrapper box-row'>
            <div className="box-cell box1">
                <img className='FoodCard__img' src={Food.image} alt='' />

            </div>
           <div className='FoodCard__price box-cell box2'>
                  <h2 className="Food_name">{Food.name}</h2>
                  <h4 className="Food_desc">{Food.description}</h4>
                  <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >

                  <Rating
                    className="rating-stars"
                    name="readOnly"
                    value={Food.rating}

                  />
                  </Box>
          </div>


        </div>
    </div>
    );
};
export default FoodCard;
