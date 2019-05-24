import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import suc from '../data/suc.json';

export default function Mapa(){
    const [viewport, setViewport] = useState({
        width: "100%",
        height: 500,
        latitude: 19.421949,
        longitude: -99.134391,
        zoom: 11,
    });

    const [selectedSuc, setSelectedSuc] = useState(null) 
    
    const selectSuc = suc =>{        
        console.log(suc)
    }

    return (
        <div>
            <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/montermarco/cjw17nu1k02xj1clfwbgu907q"
            onViewportChange={viewport => {
                setViewport(viewport);
            }}>
           {suc.features.map( (loc, idx) => (
                 <Marker 
                    key={idx} 
                    latitude={loc.geometry.coordinates[0]} 
                    longitude={loc.geometry.coordinates[1]} >
                    
                    <button 
                        className="mapButton"
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedSuc(loc)
                            selectSuc(loc);
                        }}>
                            <img src="/imgs/logoffsuc.png" alt="logo"/>
                    </button>
                </Marker>
           ))}
        
           {selectedSuc ? (
                <Popup 
                    latitude={selectedSuc.geometry.coordinates[0]} 
                    longitude={selectedSuc.geometry.coordinates[1]}
                    onClose={()=>{
                        setSelectedSuc(null)
                    }}>
                    <div>
                        <h2>{selectedSuc.properties.name}</h2>
                        
                    </div>
                </Popup>
           ) : null}    

            </ReactMapGL>


           
        </div>
    )
}