import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Helper: chunk array into groups of 4
const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const Portfolio = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title, subTitle, paragraphList) => {
    setTempData([1, imgLink, title, subTitle, paragraphList]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const groupedData = chunkArray(data, 4); // Each group will be one slide

  return (
    <section>
      <div id="work" className="section work-section">
        <div className="container">
          <SectionHeading title="RECENT PROJECT" subTitle="My Work" />
          <div className="lightbox-gallery" data-aos="fade-up" data-aos-duration="800">
            <Slider {...settings}>
              {groupedData.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="row">
                    {group.map((element, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="work-box mb-4">
                          <div className="work-img" onClick={() => getData(element.ImgLink, element.title, element.subTitle, element.paragraphList)}>
                            <img src={element.ImgLink} alt="portfolio" />
                          </div>
                          <div className="work-text">
                            <h6>{element.subTitle}</h6>
                            <h4>{element.title}</h4>
                            <div className="btn-bar">
                              <a className="gallery-link" onClick={() => getData(element.ImgLink, element.title, element.subTitle, element.paragraphList)}>
                                <Icon icon="bi:arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          subTitle={tempData[3]}
          paraList={tempData[4]}
          modalClose={modalClose}
        />
      )}
    </section>
  );
};

Portfolio.propTypes = {
  data: PropTypes.array
};

export default Portfolio;
