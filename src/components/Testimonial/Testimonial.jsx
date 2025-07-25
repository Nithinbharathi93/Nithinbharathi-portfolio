
import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";

const Testimonial = ({ data }) => {
  const { testimonialInfo, brandInfo } = data;
  return (
    <section id="testimonial-section" className="section testimonials-section bg-g">
      <div className="container">
        <SectionHeading title="What they says" subTitle="Testimonial" />
        <div className="testimonials">
          <Carousel data={testimonialInfo} />
        </div>
      </div>
    </section >
  )
}
Testimonial.propTypes = {
  data: PropTypes.object
}

export default Testimonial
