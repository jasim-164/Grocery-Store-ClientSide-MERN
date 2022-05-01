import React from 'react';
import { Carousel } from 'react-bootstrap';
import photos1 from '../../images/CarouselPhotos/photos1.jpg'
import photos2 from '../../images/CarouselPhotos/photos2.jpg'
import photos3 from '../../images/CarouselPhotos/photos3.jpg'
const CarouselProduct = () => {
    return (
        <div>
            <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photos1}
      alt="First slide"
      height="700"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photos2}
      alt="Second slide"
      height="700"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photos3}
      alt="Third slide"
      height="700"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        </div>
    );
};

export default CarouselProduct;