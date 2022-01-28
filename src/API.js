import axios from "axios";

// var axios = require("axios").default;



export const getPlaceDetails=async(type,sw,ne)=>{

    const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`

    try{
        const {data:{data}} = await axios.get(URL,{
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng},
                headers: {
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
                  }
          })

        console.log(data)
        return data

    }catch(error){
        console.log(error)
    }


}




