import "./styles.scss";
import PageTitleImplementation from "../../components/PageTitleImplementation";
import Breadcrumb from "../../components/Breadcrumb";
import ProductPhotoGrid from "../../components/ProductPhotoGrid";
import BookingComponent from "../../components/BookingComponent";
import AmenitiesSection from "../../components/AmenitiesSection";

import MainPhoto from "../../assets/images/DetailsPage/product-photo.png";
import PhotoUp from "../../assets/images/DetailsPage/product-photo-up.png";
import PhotoDown from "../../assets/images/DetailsPage/product-photo-down.png";

const ImageGallery = [MainPhoto, PhotoUp, PhotoDown];

const Details = () => {
  return (
    <section className="details-page">
      <div className="details-page-header">
        <div className="details-page-pagetitleimplementation">
          <PageTitleImplementation
            title="Blue Origin Fams"
            description="Galle, Sri Lanka"
          />
        </div>

        <div className="details-page-breadcrumb">
          <Breadcrumb currentLocation="Hotel Details" homePath="/" />
        </div>
      </div>

      <div className="details-page-image-gallery">
        <ProductPhotoGrid images={ImageGallery} />
      </div>

      <div className="about-and-price">
        <div className="about-and-price-about">
          <h2 className="about-title">About the place</h2>
          <p className="about-text">
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits the use of
            repetition and understated development. Minimal techno is thought to
            have been originally developed in the early 1990s by Detroit-based
            producers Robert Hood and Daniel Bell.
          </p>
          <p className="about-text">
            Such trends saw the demise of the soul-infused techno that typified
            the original Detroit sound. Robert Hood has noted that he and Daniel
            Bell both realized something was missing from techno in the
            post-rave era.
          </p>
        </div>

        <div className="booking-component-price">
          <BookingComponent price="$200" />
        </div>
      </div>

      <div>
        <AmenitiesSection />
      </div>
    </section>
  );
};

export default Details;
