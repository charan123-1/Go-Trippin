import "./AccommodationCard.css";


import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const AccommodationCard = ({ Accommodation }) => {


    return (

    <div className="cont">
        <div className='AccommodationCard__wrapper box-row'>
            <div className="box-cell box1">
                <img className='AccommodationCard__img' src={Accommodation.image} alt='' />

            </div>
           <div className='AccommodationCard__price box-cell box2'>
                  <h2 className="accommodation_name">{Accommodation.name}</h2>
                  <h4 className="accommodation_desc">{Accommodation.description}</h4>
                  <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >

                  <Rating
                    className="rating-stars"
                    name="readOnly"
                    value={Accommodation.rating}

                  />
                  </Box>
          </div>


        </div>
    </div>
    );
};
export default AccommodationCard;
