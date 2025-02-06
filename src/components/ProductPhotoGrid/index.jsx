import "./styles.scss";

const ProductPhotoGrid = ({ images }) => {
  return (
    <div className="product-photogrid">
      <div className="product-photogrid-mainphoto">
        <img className="mainphoto-img" src={images[0]} alt="Main Photo" />
      </div>

      <div className="product-photogrid-rightphotos">
        {images.slice(1).map((images, index) => (
          <img
            className="rightphotos-img"
            key={index}
            src={images}
            alt={`Small Photo ${index + 1} `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPhotoGrid;
