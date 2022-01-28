import React from 'react';
import hotel from '../img/default_hotel_img.jpeg'
import { faPhoneAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlaceDetails = ({details}) => {


  return (
  <div className='rounded-lg shadow-xl p-2 m-2 my-4  bg-white/30 '>
    <div className='w-full h-40 xl:h-80 relative mt-2' >
      {details.rating&&<span className='absolute top-4 right-0 bg-white/90 py-1 px-2 rounded-tl-lg shadow-lg rounded-bl-lg'><FontAwesomeIcon icon={faStar} className='fa-xs items-center my-[2px] text-amber-400  mr-2'/>{details.rating}</span>}
      <span className='absolute top-4 left-0 bg-white/90 py-1 px-2 rounded-tr-lg rounded-br-lg'><FontAwesomeIcon icon={details.is_closed?faDoorClosed:faDoorOpen} className='fa-xs items-center my-[2px] text-black  mr-2'/>{details.is_closed?'Closed':'Open'}</span>
    {details.photo?<img src={details?.photo?.images?.medium?.url} alt="" className='w-full h-full'/>:<img src={hotel} alt=""  className='w-full h-full'/>}
    </div>
    <div className='pl-2'>
      <h1 className='text-xl md:text-2xl py-2 pb-1'>{details.name}</h1>
      {details.price&&<div className="flex items-center justify-between">
        <h1 className="text-md md:text-lg py-1">Price</h1>
        <h1 className='text-sm  py-1'>{details?.price_level?.replace('$$','₹₹').replace('$$$','₹₹₹').replace('$$$$','₹₹₹₹').replace('$','₹').replace('$','₹')}</h1>
      </div>}
      {details.ranking&&<div className="flex items-baseline justify-between">
        <h1 className="text-md md:text-lg ">Ranking</h1>
        <h1 className='text-sm pl-2 md:text-md'>{details.ranking}</h1>
      </div>}
      <details className='transition-all'>
        <summary className={`transition-all marker:text-sm marker:text-gray-400 cursor-pointer text-md md:text-lg`}>Awards...</summary>
        {details?.awards?.length==0?<p className='pl-4'>No Awards</p>:(details.awards?.map((award,i)=><p key={i} className='transition-all pl-4'>{award.display_name}</p>))}
      </details>
      {details?.cuisine?.length>0&&<div>
        <h2 className='text-md md:text-lg pt-1'>Cuisines</h2>
        <div className='flex flex-wrap'>
        {details.cuisine.map((type,i)=><p key={i} className='bg-gradient-to-r from-[#A5FECB] via-[#20BDFF]/40 to-[#5433FF]/40 text-xs w-max m-1 rounded-xl px-2 py-1'>{type.name}</p>)}
        </div>
      </div>}
      {(details.address||details?.address_obj?.street1)&&<div className='flex items-baseline justify-between pt-2'>
              <FontAwesomeIcon icon={faLocationArrow} className='fa-xs mr-1 text-gray-500' />
              <h1 className='text-sm'>{details.address||details?.address_obj?.street1}</h1>
              </div>}
      {details.phone&&<div className='flex items-baseline justify-between pt-2'>
              <FontAwesomeIcon icon={faPhoneAlt} className='fa-xs mr-1 text-gray-500' />
              <h1 className='text-sm'>{details.phone}</h1>
              </div>}
      <div className="flex items-center gap-x-4 py-2">
        {details.website&&<a href={details?.website} target={'_blank'}><h1 className='px-2 py-1 border-2 border-black hover:bg-gradient-to-r from-[#A5FECB]/30 via-[#20BDFF]/30 to-[#5433FF]/30 transition-all'>Website</h1></a>}
        {details.write_review&&<a href={details?.write_review} target={'_blank'}><h1  className='px-2 py-1 border-2 border-black  hover:bg-gradient-to-r from-[#A5FECB]/30 via-[#20BDFF]/30 to-[#5433FF]/30 transition-all'>Review</h1></a>}
      </div>
    </div>
  </div>);
};

export default PlaceDetails;
