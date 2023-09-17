import './Home.scss';
import SliderCarousel from '../../components/Slider/SliderCarousel';
import GallerySlider from '../../components/GallerySlider/GallerySlider';

const Home = () => {
  return <div className="home-page flex flex-ai-c flex-fd-c">
            <SliderCarousel/>
            <GallerySlider/>
        </div>;
};

export default Home;
