import './ListSlide.scss';
import PropTyeps from 'prop-types';
import Button from '../Button';
import Slide from '../Slide';
import { useEffect, useState } from 'react';

function ListSlide({ className, slides }) {
    const listslide = 'listslide';
    const generateClassString = () => {
        const classes = { [className]: className, listslide };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    const wrapperStyle = {
        width: `${slides.length * 100}%`,
        transform: `translateX(-${(currentIndex * 100) / slides.length}%)`,
        transition: 'transform 0.5s ease', // Add a smooth transition effect
    };

    return (
        <div className={generateClassString()}>
            <div className="listSlide_slides" style={wrapperStyle}>
                {slides.map((slide, index) => {
                    return (
                        <Slide
                            className={`listSlide_slide ${index === currentIndex ? 'selected' : ''} ${
                                index === (currentIndex === 0 ? slides.length - 1 : currentIndex - 1) ? 'previous' : ''
                            }`}
                            key={index}
                            src={slide.src}
                            content={slide.content}
                            btn={
                                <Button href={slide.href} bg_color>
                                    {slide.content_btn}
                                </Button>
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

ListSlide.propTypes = {
    className: PropTyeps.string,
    slides: PropTyeps.array,
};

export default ListSlide;
