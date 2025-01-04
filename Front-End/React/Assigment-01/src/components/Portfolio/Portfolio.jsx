import Title from "../Title/Title";
import portStyle from "./Portfolio.module.css";
import poert1 from "../../assets/poert1.png";

import port2 from "../../assets/port2.png";

import port3 from "../../assets/port3.png";
import { useState } from "react";
export default function Portfolio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setCurrentImage(null);
    setModalVisible(false);
  };

  return (
    <>
      <section id="about" className="about-section min-vh-100 py-5 d-flex">
        <div className="container">
          <Title text="Portfolio" />
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div
                className={`${portStyle.inner} position-relative`}
                onClick={() => handleImageClick(poert1)}
              >
                <img className="img-fluid" src={poert1} alt="" />
                <div
                  className={`${portStyle.overlay} position-absolute d-flex justify-content-center align-items-center start-0 end-0 top-0 bottom-0`}
                >
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className={`${portStyle.inner} position-relative`}
                onClick={() => handleImageClick(port2)}
              >
                <img className="img-fluid" src={port2} alt="" />
                <div
                  className={`${portStyle.overlay} position-absolute d-flex justify-content-center align-items-center start-0 end-0 top-0 bottom-0`}
                >
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className={`${portStyle.inner} position-relative`}
                onClick={() => handleImageClick(port3)}
              >
                <img className="img-fluid" src={port3} alt="" />
                <div
                  className={`${portStyle.overlay} position-absolute d-flex justify-content-center align-items-center start-0 end-0 top-0 bottom-0`}
                >
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className={`${portStyle.inner} position-relative`}
                onClick={() => handleImageClick(poert1)}
              >
                <img className="img-fluid" src={poert1} alt="" />
                <div
                  className={`${portStyle.overlay} position-absolute d-flex justify-content-center align-items-center start-0 end-0 top-0 bottom-0`}
                >
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className={`${portStyle.inner} position-relative`}
                onClick={() => handleImageClick(port2)}
              >
                <img className="img-fluid" src={port2} alt="" />
                <div
                  className={`${portStyle.overlay} position-absolute d-flex justify-content-center align-items-center start-0 end-0 top-0 bottom-0`}
                >
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className={`${portStyle.inner} position-relative`}
                onClick={() => handleImageClick(port3)}
              >
                <img className="img-fluid" src={port3} alt="" />
                <div
                  className={`${portStyle.overlay} position-absolute d-flex justify-content-center align-items-center start-0 end-0 top-0 bottom-0`}
                >
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modalVisible && (
        <div
          className={`${portStyle.modal} position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center bg-primary bg-opacity-25`}
          onClick={handleModalClose}
        >
          <div className="image w-50" onClick={(e) => e.stopPropagation()}>
            <img className="img-fluid" src={currentImage} alt="Modal Content" />
          </div>
        </div>
      )}
    </>
  );
}
