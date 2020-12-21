import React, {useState,useEffect} from "react"
import "./css/style.css"

const Tempapp = ()=>{

    const[city,setCity] =  useState(null)
    const[search,setSearch] =  useState(" ")
    
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d3782830ade08750cd2e2e2a11ce6150`
            const response = await fetch(url)
            const resJson = await response.json()
            console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi()
    },[search])

    return(
        <>
            <div className = "box">
                <div className="inputData">
                    <input 
                        type ="search"
                        className="inputField" 
                        value = {search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} /> 
                </div>
                {!city ? (
                    <center><p className="err">No Data Found</p></center>
                ) : (
                    <div >
                    <div className="info">
                        <h2 className="location">
                        <i id="weathercon"className="fas fa-street-view"></i>{search}
                        </h2> 
                        <h1 className="temp">{city.temp}°C</h1>
                   </div>

                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    </div>
                ) }

               
            </div>
        </>
    )
}
export default Tempapp