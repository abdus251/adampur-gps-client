import SectionTitle from "../SectionTitle";
import MenuItem from "../../../asset/pages/Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
  const [menu]= useMenu();
  const popular = menu.filter(item => item.category === 'popular');
   
    return (
        <div>
            <section className="mb-12">
                <SectionTitle
                    subHeading="Popular Items"
                    heading="From Our Menu"
                ></SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        popular.map(item=> <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>
               
            </section>
            
        </div>
    );
};

export default PopularMenu;