import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Mapa.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFtbnlrIiwiYSI6ImNrZmxhZjZscjAwb2gycm54aWo2bGJvZnEifQ.BbYutmem-GZtYciYeMln1A';

const Mapa=()=>{
	const mapContainer = useRef(null);
	const [locationInfo] = useState({lng: 31,lat: 48.3,zoom: 5});
	
	useEffect(() => {
		const map = new mapboxgl.Map({container: mapContainer.current, style: 'mapbox://styles/mapbox/outdoors-v11', center: [locationInfo.lng, locationInfo.lat], zoom: locationInfo.zoom});
	}, [])
	
	return (
		<section className={'mapa container'}>
			<h2 className="mapa-title">Индекс качества воздуха в режиме реального времени</h2>
			
			<div className="mapa-map" ref={mapContainer}/>
			
			<p className="mapa-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
		</section>
	);
};

export default Mapa;