import React from 'react'
import { Button } from '@material-tailwind/react';
import clothes from '../../assets/images/clothes.jpg';
import { filteredProducts } from '../../features/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function NavigateButtons() {

    const buttons = ["T-shirts" , "Hoodies" , "Jeans" ,"Dresses" , "Suits" , "Shoes" , "Jackets" , "bags"];

    const dispatch = useDispatch();

  return (
    <div>
      <div className='flex items-center justify-center py-8'>
        {buttons.map((button, index) => {
            return <div key={index} className='mr-4'>
              <Link to={"/filteredProducts/" + button}>
               <Button color='gray' size='lg' variant='outlined' ripple={true} className='hover:bg-green-300 duration-300 ease-in-out'
               onClick={() => dispatch(filteredProducts(button))} >
                {button}
                </Button> 
              </Link>
            </div>
        })}
      </div>
      <div className='bg-green-300 p-2 w-[55%] mx-auto rounded-md'>
        <h3 className='text-orange-900 text-center text-lg front-inter font-bold tracking-normal leading-none'>SALES UP TO 50%</h3>
      </div>
      <div className='flex justify-center items-center py-4'>
        <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' src={clothes} alt='clothes'></img>
      </div>
    </div>
  )
}

export default NavigateButtons;
