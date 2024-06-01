import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/home/building.jpg';
import img2 from '../../../../assets/home/h2.jpg';
import img3 from '../../../../assets/home/h3.jpg';
import img4 from '../../../../assets/home/h4.jpg';
import img5 from '../../../../assets/home/h5.jpg';
import img6 from '../../../../assets/home/md.jpg';


const Banner = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;