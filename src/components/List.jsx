import React from 'react';
import PlaceDetails from './PlaceDetails';
import Spinner from './Spinner';

const List = ({place,isLoading,type,setType,rating,setRating}) => {

  return (
  <section className=" md:col-span-4 py-4 px-2 select-none bg-gradient-to-r from-[#A5FECB]/80 via-[#20BDFF]/60 to-[#5433FF]/60">
    <div className=''>
      <h1 className='text-xl md:text-2xl lg:text-3xl text-center py-2'>Restaurants, Hotels, Attractions Around You</h1>
      <div className="flex items-center justify-around mt-2 pb-4 ">
        <div>
          <h6 className='text-gray-500 text-xs'>Type</h6>
          <select value={type} onChange={e=>setType(e.target.value)} className='border-b-2 pb-1 pr-2 text-lg bg-transparent lg:text-xl outline-0'>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>
        <div>
          <h6 className='text-gray-500 text-xs'>Rating</h6>
          <select value={rating} onChange={e=>setRating(e.target.value)}  className='border-b-2 pb-1 pr-2 text-lg  outline-0 bg-transparent lg:text-xl outline-0'>
            <option value={0}>All</option>
            <option value={2.9}>Above 3</option>
            <option value={3.9}>Above 4</option>
            <option value={4.4}>Above 4.5</option>
          </select>
        </div>
        </div>
      {!isLoading? (<div className="h-[65vh] overflow-auto mt-2">
      {place?.map((p,i)=>(p.name&& <PlaceDetails key={i} details={p} />))}
      </div>):<Spinner />}
      

    </div>
    
  </section>);
};

export default List;
