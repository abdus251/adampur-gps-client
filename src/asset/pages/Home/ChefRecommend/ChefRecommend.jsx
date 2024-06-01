import cardImg from '../../../../assets/home/slide5.jpg';
import cardImg2 from '../../../../assets/home/slide2.jpg';
import cardImg3 from '../../../../assets/home/slide4.jpg';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const ChefRecommend = () => {
    return (
        <div className="text-center mt-4">
        <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        
        <div className="box-content h-32 w-12/12 bg-black my-8">
            <h2 className=" pt-12 text-white text-2xl text-center">Call Us: +88 0192345678910</h2>
        </div>
        {/* chef card-1 */}
        <div className="">
            <SectionTitle subHeading={"should try"}
            heading={"chef recommends"}
            ></SectionTitle>
            </div>
        <div className="grid grid-cols-3 w-full">
            

        <div className="">
        <div className="card w-96 bg-gray-200 ">
<figure className="">
<img className="w-full" src={cardImg} alt="" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Caeser Salad</h2>
<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
<div className="card-actions">
<button className="btn btn-outline bg-gray-300 border-0 border-b-4 mt-4 text-yellow-600">Add to cart</button>
</div>
</div>
</div>
        </div>
         {/* chef card-2 */}
         <div className="">
        <div className="card w-96 bg-gray-200 ">
<figure className="">
<img className="w-full" src={cardImg2} alt="" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Caeser Salad</h2>
<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
<div className="card-actions">
<button className="btn btn-outline bg-gray-300 border-0 border-b-4 mt-4 text-yellow-600">Add to cart</button>
</div>
</div>
</div>
        </div>
         {/* chef card-3 */}
         <div className="">
        <div className="card w-96 bg-gray-200 ">
<figure className="">
<img className="w-full" src={cardImg3} alt="" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Caeser Salad</h2>
<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
<div className="card-actions">
<button className="btn btn-outline bg-gray-300 border-0 border-b-4 mt-4 text-yellow-600">Add to cart</button>
</div>
</div>
</div>
        </div>
        </div>
        </div>
    );
};

export default ChefRecommend;