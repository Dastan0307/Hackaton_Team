import './GallerySlider.scss';
import '../../pages/home/Home.scss';
import logo from '../../images/logo/Logo.png';
import avatar from '../../images/background/user1.png';
import timeIcon from '../../images/icons/Vector.png';
import Slider from 'react-slick';
import boy1 from '../../images/background/boy1.png';
import boy2 from '../../images/background/boy2.png';
import girl1 from '../../images/background/girl1.png';

const GallerySlider = () => {
    const settings = {
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
            }
            }
        ]
      };
    return (
        <section className="gallery-section">
            <div className='gallery-section__content'>
                <img className='logo' src={logo}/>
                <div className='header-text flex flex-jc-c'>
                    <h1>Галерея</h1>
                </div>
                <div className='user-info flex'>
                    <img className='user-info_avatar' src={avatar}/>
                    <div className='flex flex-fd-c'>
                        <p className='user-info__name'>Асанова Гулайым Тентиевна</p>
                        <p className='user-info__date'><img src={timeIcon}/> 12.09.2023г.</p>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className='slide'>
                        <img className='slider-image' src={girl1}/>
                        <p className='slider-text'>Бүгүн Акылайдын туулган күну</p>
                    </div>
                    <div className='slide'>
                        <img className='slider-image' src={boy1}/>
                        <p className='slider-text'>Бүгүн Актандын туулган күну</p>
                    </div>
                    <div className='slide'>
                        <img className='slider-image' src={boy2}/>
                        <p className='slider-text'>Бүгүн Исламдын туулган күну</p>
                    </div>
                    <div className='slide'>
                        <img className='slider-image' src={boy1}/>
                        <p className='slider-text'>Бүгүн Актандын туулган күну</p>
                    </div>
                    
                </Slider>
            </div>
        </section>
    );
};

export default GallerySlider;