import "./FoodCard.css";


import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



const FoodCard = ({ Food }) => {


    return (
      //Taking the parameters and addding it to the image src and h2 tag respectively along with the css
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
              {/* Ratings */}
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
