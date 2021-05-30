import React from 'react'

export const Results = ({ data }) => {

    let { name, country } = data.location;

    let temprature = data.current.temp_c

    let weatherIcon = data.current.condition.icon;

    let aqi = data.current.air_quality.pm10.toFixed(2);


    function getEmoji(aqi) {
        return aqi <= 50 ? "😁" :
            aqi <= 100 ? "😊" :
                aqi <= 150 ? "😐" :
                    aqi <= 200 ? "😷" :
                        aqi <= 250 ? "🤢" : "💀";
    }


    return (

        <div className="results-container" >
            <div className ="card">
            <h2>{name}, {country}</h2>
            <h2>Temprature: {temprature}°C <img src={weatherIcon} alt="icon" /></h2>
            <h3>Air Quality Index: {aqi} {getEmoji(aqi)}</h3>
            </div>

        </div>
    )
}
