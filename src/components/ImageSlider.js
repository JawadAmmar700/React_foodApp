//imports go from here
import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSelector } from 'react-redux'
import { selectCategory } from '../features/CategorySlice'

//css
import '../CSS folder/ImageSlider.css'
//to here


const ImageSlider = () => {
    const categories = useSelector(selectCategory)
    const splited_category = categories?.slice(0, 4);



    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        ltr: true,
        arrows: false
    };


    return (
        <div className="slider">
            <Slider {...settings}>

                {
                    splited_category?.map((item, id) => (
                        <div className='inner_slider' key={id}>
                            <img className="img_slider" src={item.strCategoryThumb} alt="" />
                            <div className="info_image">
                                <h3 id="text">{item.strCategoryDescription.split('.')[0]}</h3>
                                <button className="btn">See Detials</button>
                            </div>
                        </div>
                    ))
                }

            </Slider>

        </div>
    )

}
export default ImageSlider
