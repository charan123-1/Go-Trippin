import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "./images/img-1.jpg" },
  { url: "./images/img-2.jpg" },
  { url: "./images/img-3.jpg" },
  { url: "./images/img-4.jpg" },
  { url: "./images/img-5.jpg" },
  { url: "./images/img-6.jpg" },
  { url: "./images/img-7.jpg" },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1600}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}


export default Slider;