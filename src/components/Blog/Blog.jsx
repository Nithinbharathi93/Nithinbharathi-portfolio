import PropTypes from 'prop-types';
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Slider from 'react-slick';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";



const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowAltCircleRight size="small" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowAltCircleLeft size="small" />
    </div>
  );
};

const Blog = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title, date, paragraphList) => {
    setTempData([1, imgLink, title, date, paragraphList]);
    setModal(true);
  }

  const modalClose = () => setModal(false);
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};

  return (
    <section id='blog'>
      <div className="section blog-section bg-dark">
        <div className="container">
          <SectionHeading title="Our Latest Update" subTitle="Our Blogs" />
          <Slider {...settings}>
            {
              data.map((element, index) => (
                <div key={index} onClick={() => getData(element.ImgLink, element.title, element.date, element.paragraphList)}>
                  <div className="blog-post">
                    <div className="blog-post-img">
                      <a className="px_modal">
                        <img src={element.ImgLink} title="" alt="blog-img" />
                      </a>
                    </div>
                    <div className="blog-post-info">
                      <h6>{element.date}</h6>
                      <h2>
                        <a className="px_modal">{element.title}</a>
                      </h2>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
      {modal && (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          date={tempData[3]}
          paraList={tempData[4]}
          modalClose={modalClose}
        />
      )}
    </section>
  )
}

Blog.propTypes = {
  data: PropTypes.array
}

export default Blog;
