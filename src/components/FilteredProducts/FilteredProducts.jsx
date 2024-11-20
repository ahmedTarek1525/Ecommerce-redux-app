import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button, Menu } from '@material-tailwind/react';
import {
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function FilteredProducts() {

    const products = useSelector((state) => state.products.filteredProducts);
    console.log('products' , products)
    const {type} = useParams();
    console.log("params" , type);

  const genderButtons = ["male" , "female"];
  const colorButtons = ["red" , "green", "purple" , "yellow" , "orange" , "blue" , "black" , "brown"];
  const sizeButtons =  ['S' , 'M' , "L" , "XL"];
  return (
    <div>
     <div className='pt-16'>
        <div className='pl-14'>
            <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">{type}</h1>
        </div>
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center">
              {genderButtons.map((item, idex) => {
                return (
                <div key={idex}>
                  <Button color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-blue-gray-300 duration-300 ease-in-out mr-4">
                    {item}
                  </Button>
                </div>
                );
              })}
              <Button color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-blue-gray-300 duration-300 ease-in-out mr-4">
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                <Button color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-blue-gray-300 duration-300 ease-in-out mr-4">
                  Select a color
                </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem style={{color: item}} key={index}>
                        {item}
                      </MenuItem>
                      );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                <Button color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-blue-gray-300 duration-300 ease-in-out mr-4">
                  Select a size
                </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem key={index}>
                        {item}
                      </MenuItem>
                      );
                  })}
                </MenuList>
              </Menu>
          </div>
          <div className="pr-14">
            <Button color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-blue-gray-300 duration-300 ease-in-out mr-4">
              Clear Filter
            </Button>
          </div> 
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
            {products.filter((product) => product.type === type)
            .map((product , index) => {
              return(
                <div key={index}> 
                    <ProductCard 
                      id={product.id} 
                      name={product.name} 
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}>
                    </ProductCard>
                </div>
              );
            })}
        </div>
     </div>
    </div>
  )
}

export default FilteredProducts;