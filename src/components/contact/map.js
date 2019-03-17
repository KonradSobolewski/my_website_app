import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography/Typography";
import * as mapActions from "../../redux/actions/googleMap/mapActions";
import connect from "react-redux/es/connect/connect";
import * as Config from "../../config/config"

class GoogleMapsContainer extends React.Component {

    onMarkerClick = (props, marker, e) => {
        this.props.setSelectedPlace(props);
        this.props.setActiveMarker(marker);
        this.props.setShowingInfoWindow(true);
    };

    onMapClick = (props) => {
        if (this.props.showingInfoWindow) {
            this.props.setActiveMarker(null);
            this.props.setShowingInfoWindow(false);
        }
    };

    render() {
        const style = {
            width: '100%',
            height: '50vh'
        };
        return (
            <Map
                style={style}
                google={this.props.google}
                onClick={this.onMapClick}
                zoom={13}
                initialCenter={{lat: 52.237049, lng: 21.017532}}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    title={'My University'}
                    position={{lat: 52.218996, lng: 21.011797}}
                    name={'Warsaw University of Technology'}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Actual work Place'}
                    position={{lat: 52.252171, lng: 21.038533}}
                    name={'Company: Sellions'}
                />
                <InfoWindow
                    marker={this.props.activeMarker}
                    visible={this.props.showingInfoWindow}
                >
                    <Paper>
                        <Typography
                            variant='headline'
                            component='h4'
                        >
                            {this.props.selectedPlace.title}
                        </Typography>
                        <Typography
                            component='p'
                        >
                            {this.props.selectedPlace.name}
                        </Typography>
                    </Paper>
                </InfoWindow>
            </Map>
        );
    }
}

const mapStateToProps = state => ({
    showingInfoWindow: state.map.showingInfoWindow,
    activeMarker: state.map.activeMarker,
    selectedPlace: state.map.selectedPlace,
});

const mapDispatchToProps = dispatch => ({
    setSelectedPlace: value => dispatch(mapActions.setSelectedPlace(value)),
    setActiveMarker: value => dispatch(mapActions.setActionMarker(value)),
    setShowingInfoWindow: value => dispatch(mapActions.setInfoWindow(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
    apiKey: (Config.GOOGLE_API_KEY)
})(GoogleMapsContainer))