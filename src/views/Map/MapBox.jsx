import React, { useRef, useEffect, useState } from 'react';
import { csv } from 'd3';

import { getModifiedMapData } from '../../js';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZW51ZCIsImEiOiJjazlsZG83ZDQwM2g0M2dxdTJ5OTQ4OHh1In0.j_bRFfw78u98EwF_pTaNWw';

export default function App() {

    const mapContainer = useRef(null);
    const [mapData, setMapData] = useState({});
    const lng = 80.6715;
    const lat = 7.9;
    const zoom = 6.7;
    const map_type ='static_map';
    var modifiedData = {};

    var bounds = [
        [78.277325, 5.471346], 
        [83.106849, 10.004859] 
    ];

    useEffect(() => {
        csv('./data/district/patients-data.csv').then(data => {
            setMapData(data);
        });
    }, []);

    modifiedData = getModifiedMapData(mapData,map_type);

    // console.log(modifiedData);

    var map_data = {
        type: 'geojson',
        data: {
            'type': 'FeatureCollection',
        }
    };

    map_data.data.features = modifiedData;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/ashenud/ck9n0r7ws2ih31ipd3q8dtjln',
            center: [lng, lat],
            zoom: zoom,
            maxBounds: bounds 
        });

        map.on('load', () => {
            map.addSource('patients', map_data);

            map.addLayer({
                id: 'district-outer',
                type: 'circle',
                source: 'patients',
                paint: {
                    'circle-color': [
                        'match',
                        ['get', 'type'],
                        'dist',
                        'rgba(252, 197, 197,0.8)',
                        'qc',
                        'rgba(255, 236, 197,0.8)',
                        'uns',
                        'rgba(197, 255, 249,0.8)',
                        'rgba(179, 214, 227,0.8)'
                    ],
                    'circle-radius': 22
                }
            });

            map.addLayer({
                id: 'district',
                type: 'circle',
                source: 'patients',
                paint: {
                    'circle-color': [
                        'match',
                        ['get', 'type'],
                        'dist',
                        '#ff4040',
                        'qc',
                        '#ff6969',
                        'uns',
                        '#ff6969',
                        '#33b5e5'
                    ],
                    'circle-radius': 20
                }
            });

            map.addLayer({
                id: 'district-count',
                type: 'symbol',
                source: 'patients',
                layout: {
                    'text-field': ['get', 'Cases'],
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });

            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            map.on('mouseenter', 'district', function (e) {
                map.getCanvas().style.cursor = 'pointer';

                var coordinates = e.features[0].geometry.coordinates.slice();
                var District;

                District = '<p class="map-font-en">' + e.features[0].properties.DistrictEn + '</p>';

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                // Populate the popup and set its coordinates
                // based on the feature found.
                popup
                    .setLngLat(coordinates)
                    .setHTML(District)
                    .addTo(map);
            });

            map.on('mouseleave', 'places', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

            // playback(0, map_data, map);

        });

    });

    return (        
        <div id="map" ref={mapContainer} className="one map-en" />
    );

}