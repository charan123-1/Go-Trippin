import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://www.premiumwp.com/wp-content/uploads/2015/12/christmas-newyear.png" },
  { url: "https://freedesignfile.com/upload/2020/11/Special-offer-Christmas-sale-flyer-vector.jpg" },
  { url: "https://cdn.pixabay.com/photo/2018/01/12/13/01/discount-3078216_960_720.jpg" }
];

const Slider = () => {
  return (
    <div>
      {/* Importing simple image slider and using the above images */}
      <SimpleImageSlider
        width={1520}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}


export default Slider;