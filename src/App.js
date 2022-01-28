import { useEffect,useState} from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";
import Footer from "./components/Footer";
import {getPlaceDetails} from './API'


function App() {

    const [places,setPlaces]=useState([])
    const [filteredPlaces,setFilteredPlaces]=useState([])
    const [coordinates,setCoordinates]=useState({})
    const [bounds,setBounds]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [isMapLoading,setIsMapLoading]=useState(true)
    const [type,setType]=useState('restaurants')
    const [rating,setRating]=useState('')

  useEffect(()=>{
    setIsMapLoading(true)
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude})
      setIsMapLoading(false)

    })
  },[ ])

  useEffect(()=>{
    const filteredPlaces = places?.filter((place)=>place?.rating>rating)
    setFilteredPlaces(filteredPlaces)

  },[rating])


  useEffect(()=>{
    if(bounds.sw && bounds.ne){
      setIsLoading(true)

      getPlaceDetails(type,bounds.sw,bounds.ne)
      .then((resp)=>{setPlaces(resp)
        setFilteredPlaces([])
        setIsLoading(false)})
    }
    
    
  },[type,bounds])
  
  return (
    <div className="font-display">
      <Header setCoordinates={setCoordinates}/>
      <main className="md:grid md:grid-cols-12 w-screen h-full md:h-[90vh]  ">
        <List setIsLoading={setIsLoading}  place={filteredPlaces?.length?filteredPlaces:places} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating} />
        <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filteredPlaces?.length?filteredPlaces:places} isMapLoading={isMapLoading}
        />
      </main>
      <Footer />

    </div>
    );
}

export default App;
