import "./Box.css";
import moment from "moment";
import "moment/min/locales";


export function Box({time, city, temperature, icon, description, minTemp, maxTemp, min, max, loader}) {
    
    moment.locale(time);

    return (

        <div className="box">

            {loader ? (
                <>
                <h1>{city}</h1>
    
                <h6>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
    
                <strong>{temperature}</strong>
    
                <img src={icon}/>

                <h5>{description}</h5>
    
                <b>{minTemp}</b>
                <b>{maxTemp}</b>

                <span>{min}</span>
                <span>{max}</span>
                </>
            ) : (
                <div className="lds-ripple"><div></div><div></div></div>
            )}
            
        </div>
        
    )
    
}