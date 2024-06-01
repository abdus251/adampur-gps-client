import { Helmet } from "react-helmet-async";
import PopularMenu from "../../../../components/SectionTitle/PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecommend from "../ChefRecommend/ChefRecommend";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Adampur GPS | Home</title>
            </Helmet>
<Banner></Banner>
<Category></Category>
<BistroBoss></BistroBoss>
<PopularMenu></PopularMenu>
<ChefRecommend></ChefRecommend>
<Featured></Featured>
<Testimonials></Testimonials>

        </div>
    );
};

export default Home;