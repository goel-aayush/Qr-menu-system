import React, { useState } from 'react';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return null;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(${ url } / api / food / add, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                description: "",
                price: "",
                category: data.category
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='w-7/10 ml-[max(5vw,25px)] mt-12 text-gray-600 text-lg'>
            <form className='flex flex-col gap-5' onSubmit={onSubmitHandler}>
                <div className='flex flex-col items-center gap-2'>
                    <p>Upload image</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
                    <label htmlFor="image" className='cursor-pointer'>
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='w-30' />
                    </label>
                </div>
                <div className='flex flex-col w-[max(40%,280px)] gap-2'>
                    <p>Product name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required className='p-2.5 border border-gray-300 rounded' />
                </div>
                <div className='flex flex-col w-[max(40%,280px)] gap-2'>
                    <p>Product description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required className='p-2.5 border border-gray-300 rounded' />
                </div>
                <div className='flex gap-7'>
                    <div className='flex flex-col gap-2'>
                        <p>Product category</p>
                        <select name='category' onChange={onChangeHandler} value={data.category} className='max-w-[120px] p-2.5 border border-gray-300 rounded'>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Product Price</p>
                        <input type="number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' className='max-w-[120px] p-2.5 border border-gray-300 rounded' />
                    </div>
                </div>
                <button type='submit' className='max-w-[120px] p-2.5 bg-black text-white cursor-pointer rounded'>ADD</button>
            </form>
        </div>
    )
}

export default Add;