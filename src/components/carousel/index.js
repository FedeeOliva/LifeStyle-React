import React, {useState} from 'react';
import {CarouselContainer, 
		Arrow,
		ImageSlide
} from './style';

const images = ['./images/slide1.jpg', './images/slide2.jpg' , './images/slide3.jpg']

const Carousel = (props) => {

	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent(current === images.length - 1 ? 0 : current + 1);
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? images.length - 1 : current - 1);
	}

  return (
    <CarouselContainer>
    	<Arrow
    		onClick={prevSlide}
    		>
    		&#60;
    	</Arrow>
    	<Arrow 
    		position='right'
    		onClick={nextSlide}
    		>
    		&#62;
    	</Arrow>
    	{images.map((image, index) => 
    		<ImageSlide 
    			style={{'display': current !== index && 'none'}}
    			key={index}
    			src={image} 
    			alt=""/>
    		)}
    	
    </CarouselContainer>
  )
}

export default Carousel;