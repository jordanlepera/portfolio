/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import anime from 'animejs';

const Thumbnail = (props) => {
  const {
    title,
    desc,
    img,
    backgroundColor,
    color,
    boxShadowColor,
    flippedProps,
  } = props;
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);

  const animateImageIn = (el) => {
    anime({
      targets: el,
      opacity: 0,
      duration: 300,
      delay: 0,
      easing: 'easeOutCirc',
    });
  }

  const animateImageOut = (el) => {
    anime({
      targets: el,
      opacity: 1,
      duration: 300,
      delay: 0,
      easing: 'easeOutCirc',
    })
  }

  const animateTextIn = (el) => {
    anime({
      targets: el,
      opacity: 1,
      translateY: [30, 0],
      duration: 300,
      delay: 0,
      easing: 'easeOutCirc',
    });
  };

  const animateTextOut = (el) => {
    anime({
      targets: el,
      opacity: 0,
      translateY: 30,
      duration: 300,
      delay: 0,
      easing: 'easeOutCirc',
    });
  };

  const animateZoom = (el) => {
    anime({
      targets: el,
      scale: 1.01,
      translateY: -10,
      boxShadow: [`0px 0px 0px 0px ${boxShadowColor}`, `0px 10px 20px 0px ${boxShadowColor}`],
      duration: 500,
      delay: 0,
      easing: 'easeOutQuint',
    });
  };

  const animateDezoom = (el) => {
    anime({
      targets: el,
      scale: 1,
      translateY: 0,
      boxShadow: [`0px 10px 20px 0px ${boxShadowColor}`, `0px 0px 0px 0px ${boxShadowColor}`],
      duration: 500,
      delay: 0,
      easing: 'easeOutQuint',
    });
  };

  const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: ${backgroundColor}; */
    background: linear-gradient(45deg, #3F96FF, #8739E5);
    color: ${color};
    flex-direction: column;
    border-radius: 10px;
    user-select: none;
    /* box-shadow: 0px 0px 0px 0px ${boxShadowColor}; */
    width: 100%;
    height: 275px;
    overflow: hidden;
    object-fit: cover;
    /* transition-property: box-shadow, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out; */
    &:hover {
      /* box-shadow: 0px 10px 20px 0px ${boxShadowColor};
      transform: scale(1.01) translateY(-10px); */
      cursor: pointer;
    }
  `;

  const Title = styled.div`
    font-size: xx-large;
    font-weight: 600;
    opacity: 0;
    transform: translateY(30px);
    white-space: pre-line;
    text-align: center;
  `;

  const Desc = styled.div`
    font-size: x-large;
    font-weight: 200;
    opacity: 0;
    transform: translateY(30px);
    white-space: pre-line;
    text-align: center;
  `;

  const Image = styled.img`
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  `;

  return (
    <Container
      ref={containerRef}
      className="thumbnail-container"
      {...flippedProps}
      onMouseEnter={() => {
        animateImageIn(imgRef.current);
        animateTextIn([titleRef.current, descRef.current]);
        animateZoom(containerRef.current);
      }}
      onMouseLeave={() => {
        animateImageOut(imgRef.current);
        animateTextOut([titleRef.current, descRef.current]);
        animateDezoom(containerRef.current);
      }}
    >
      <Image ref={imgRef} src={img} alt="thumbnail" className="image" />
      <Title ref={titleRef} className="title">{title}</Title>
      <Desc ref={descRef} className="desc">{desc}</Desc>
    </Container>
  );
};

Thumbnail.defaultProps = {
  title: '',
  desc: '',
  backgroundColor: '#3D3D3D',
  color: 'white',
  boxShadowColor: 'rgb(189, 189, 189)',
  flippedProps: undefined,
};

Thumbnail.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  boxShadowColor: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  flippedProps: PropTypes.object,
};

export default Thumbnail;
