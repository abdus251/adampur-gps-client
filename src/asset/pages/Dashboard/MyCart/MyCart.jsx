import { Helmet } from "react-helmet-async";
import useCart from "../../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                if (data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      ) 
                }
                })
            }
          })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Adampur GPS | My Cart</title>
            </Helmet>
            <div className="uppercase font-semi-bold h-10 items-center flex justify-evenly">
                <h2 className="text-3xl"> Total Items: {cart.length}</h2>
                <h2 className="text-3xl"> Total Price: ${total}</h2>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>  
                                <td>{item.name}
                                </td>
                                <td className="text-end"> $ {item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)}                                          className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyCart;