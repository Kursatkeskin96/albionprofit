import React from 'react'
import Image from 'next/image'
import { TbCoins } from "react-icons/tb";
import Link from 'next/link';

const capitalizeFirstLetter = (string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

export default function MiniItemCard({item}) {
    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const formattedSellPrice = formatNumberWithCommas(item.price)
  return (
    <div className='w-32 mt-5 shadow-lg rounded-md'>
{
  item.quantity 
    ? (
        <div className='h-8'>
            <h2 className='text-sm mt-2 text-center font-bold'>{item.quantity}x {capitalizeFirstLetter(item.resource)}</h2>
        </div>
      )
    : (
        <div className='h-8'>
        <h2 className='text-sm mt-2 text-center font-bold'>{item.title}</h2>
    </div>
      )
}   
{item.quality ? (
        <Image className='mx-auto mt-2' src={item.img} alt="sword" height={50} width={50} />
) : (
    <Image className='mx-auto mt-2' src={item.resourceImg} alt="sword" height={50} width={50} />
)}
        <div className='flex mt-4 justify-center items-start gap-2 text-sm'>
            <div  className='text-gray-400'>{formattedSellPrice}</div><div className='mt-1 text-green-700 font-bold'><TbCoins /></div>
        </div>
        {item.quality ? (
        <div className='flex mt-2 justify-center items-start gap-2 text-sm'>
        <div  className='text-black text-xs'>{item.quality}</div>
    </div>
) : (
    <div className='flex mt-2 justify-center items-start gap-2 text-sm'>
    <div  className='text-black text-xs'>{item.quantity}x</div>
</div>
)}

        <div className='flex justify-center items-center'>
        <Link className='bg-red-600 mb-4 w-24 text-white mx-auto text-center rounded-md mt-4' href={`https://discord.com/users/${item.discordId}`}>Remove</Link>
        </div>
    </div>
  )
}
