import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import feautredImg from '../../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 px-36 bg-slate-500 bg-opacity-60 pt-10">
                <div className="">
                    <img src={feautredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut possimus fugit, commodi nisi debitis nulla? Laboriosam est, hic dicta ad eius doloremque reiciendis voluptatibus? Ut dolores ea dolorum? Minus sunt at nesciunt recusandae iusto sint eveniet. Vero tempora id quam numquam recusandae soluta molestiae, est ut officiis, explicabo in deleniti?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};
export default Featured;