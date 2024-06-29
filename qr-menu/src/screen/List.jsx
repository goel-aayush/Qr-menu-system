import React, { useEffect, useState } from 'react';
import { url, currency } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(${url}/api/food/list);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(${url}/api/food/remove, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex flex-col'>
      <p className='text-xl mb-4'>All Foods List</p>
      <div className='w-full'>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm bg-gray-100 hidden md:grid">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] md:grid-cols-[1fr_3fr_1fr] items-center gap-2.5 md:gap-3.5 p-3 border border-gray-300 text-sm'>
            <img src={${url}/images/${item.image}} alt="" className='w-12' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p className='cursor-pointer text-red-500' onClick={() => removeFood(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;