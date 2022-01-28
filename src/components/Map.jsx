import GoogleMapReact from "google-map-react";
import { useState } from "react";
import hotel from '../img/default_hotel_img.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";

const Map = ({setCoordinates, setBounds, coordinates,places,isMapLoading}) => {

  const [hover,setHover]=useState(false)  
  const [hoverKey,setHoverKey]=useState(undefined)  

    
  return (
  <section className=" md:col-span-8 w-full h-[50vh] md:h-full p-4 bg-gradient-to-r from-[#A5FECB]/80 via-[#20BDFF]/60 to-[#5433FF]/60 md:bg-gradient-to-r md:to-[#A5FECB] md:via-[#20BDFF]/40 md:from-[#5433FF]/60 "  >
      {!isMapLoading?<GoogleMapReact 
        bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates} 
        defaultZoom={14}
        options={{disableDefaultUI:true, zoomControl:true}}
        onChange={e=>{
          setCoordinates({lat:e.center.lat, lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
        margin={[50,50,50,50]}
        >
          {(places?.map((place,i)=>(place.name&&(
            <div className='p-0 md:p-2 shadow-lg hover:scale-110 hover:z-20 transition-all w-fit relative bg-white curosor-pointer ' key={i} lat={Number(place.latitude)} id={i} lng={Number(place.longitude)} onMouseOver={(e)=>{
              setHover(true)
              setHoverKey(e.target?.id)
            }} 
              onMouseOut={()=>setHover(false)}>
                <FontAwesomeIcon icon={faMapPin} className="md:hidden text-md"/>
                <div className="hidden md:block">
                  <h1 className="text-md pb-1 font-md" id={i}>{place.name}</h1>
                  {place.rating&&<span className={`absolute text-white font-black bg-sky-400 p-1 -top-2 -right-2 transiton-all rounded-full ${hover&&hoverKey==i?'':'hidden'}`}>{place.rating}</span>}
                  <div className="h-20 w-24 md:h-24 md:w-28 lg:h-28 lg:w-32">
                    <img src={place.photo? place?.photo?.images?.small?.url :hotel} alt="" className="h-full w-full" id={i}/>
                  </div>
                </div>
            </div>)
          )))}

      </GoogleMapReact>:<Spinner />}

  </section>)
};

export default Map;
