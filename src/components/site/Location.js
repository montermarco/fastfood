import React, { Component, Fragment } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import suc from '../data/suc.json'

class MapaSuc extends Component {

  state = {
    viewport: {
      width: "100%",
      height: 500,
      latitude: 19.421949,
      longitude: -99.134391,
      zoom: 11,
    },
    selectedSuc: null,
    setSelectedSuc: null,
    locations: {}
  }

    componentWillMount(){
    this.setState({
        locations: suc
    })    
    }
 
    pickLocation = (loc) => {
        this.setState({
            selectedSuc: loc
        });
    }

    updateViewport = (viewport) => this.setState({ viewport })
    onViewportChange = viewport => this.setState({ viewport })

    render() {
    
    return (
      <Fragment>
            <ReactMapGL 
                    {...this.state.viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/montermarco/cjw17nu1k02xj1clfwbgu907q"
                    onViewportChange={viewport => {
                        this.setState({
                            viewport
                        });
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
                                    this.pickLocation(loc)                                    
                                    this.setState({
                                        setSelectedSuc: loc,
                                        selectedSuc: loc
                                    })                            
                                }}>
                                    <img src="/imgs/logoffsuc.png" alt="logo"/>
                            </button>
                        </Marker>
                ))}
                
                {this.state.selectedSuc ? (
                        <Popup 
                            latitude={this.state.selectedSuc.geometry.coordinates[0]} 
                            longitude={this.state.selectedSuc.geometry.coordinates[1]}
                            onClose={()=>{
                                this.setState({
                                    selectedSuc: null
                                })
                            }}>
                            <div>
                                <h2>{this.state.selectedSuc.properties.name}</h2>
                                
                            </div>
                        </Popup>
                ) : null}    

            </ReactMapGL>
      
      </Fragment>
    )
  }
}
export default MapaSuc;