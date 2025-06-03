import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const Experience = ({ data }) => {
  const { text, education, experience, pastRoles, resumeCv } = data;

  const sections = [
    { title: "Education", items: education },
    { title: "Experience", items: experience },
    { title: "Past Roles", items: pastRoles },
  ];

  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="exp-section-heading">
              <SectionHeading title="My Journey" subTitle="Overview on " />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{text}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={resumeCv} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              spaceBetween={30}
              className="mySwiper"
              loop={true}
            >
              {sections.map((section, index) => (
                <SwiperSlide className="car-exp " key={index}>
                  <h4 className="mb-4">{section.title}</h4>
                  <ul className="resume-box">
                    {section.items.map((item, idx) => (
                      <li key={idx} data-aos="fade-up" data-aos-duration="800">
                        <div className="r-meta">
                          <span>{item.start} to {item.end} <span className="score-value">{section.title === "Education" && item.score && ` - ${item.score}`}</span></span>
                          <label>-{item.subtitle}</label>
                        </div>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    education: PropTypes.array,
    experience: PropTypes.array,
    pastRoles: PropTypes.array,
    resumeCv: PropTypes.string,
  }),
};

export default Experience;
