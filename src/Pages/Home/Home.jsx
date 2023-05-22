import Banners from "./Banners";
import Category from "./Category";
import Gallery from "./Gallery";
import SpotLight from "./SpotLight";
import StayConnect from "./StayConnect";


const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Category></Category>
            <Gallery></Gallery>
            <StayConnect></StayConnect>
            <SpotLight></SpotLight>
        </div>
    );
};

export default Home;