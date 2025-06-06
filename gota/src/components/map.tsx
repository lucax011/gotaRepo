"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const locations = [
  {
    lat: -23.533773,
    lng: -46.62529,
    title: "Alagamento - Av. 23 de Maio",
    color: "red",
    details: "Alagamento na Av. 23 de Maio. Última atualização: 17h15. Fonte: GCM + IA Flood Detector.",
  },
  {
    lat: -23.559616,
    lng: -46.658823,
    title: "Trânsito - Marginal Pinheiros",
    color: "yellow",
    details: "Trânsito comprometido na Marginal Pinheiros. Última atualização: 17h20. Fonte: CET + IA Flood Detector.",
  },
  {
    lat: -23.5489,
    lng: -46.6388,
    title: "Região monitorada - Sé",
    color: "blue",
    details: "Região monitorada sem problemas. Última atualização: 17h10. Fonte: IA Flood Detector.",
  },
];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyC9ER3kGAyx2oxOC3jpw3idniQhlQb1NHA",
      version: "weekly",
      libraries: ["marker"],
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -23.55052, lng: -46.633308 },
        zoom: 12,
        mapId: "DEMO_MAP_ID", // Replace with your actual Map ID
      });

      locations.forEach((loc) => {
        // Cria um elemento customizado para o marker
        const markerContent = document.createElement("div");
        markerContent.style.background = loc.color;
        markerContent.style.width = "24px";
        markerContent.style.height = "24px";
        markerContent.style.borderRadius = "50%";
        markerContent.style.border = "2px solid #fff";
        markerContent.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
        markerContent.title = loc.title;

      
        const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: loc.lat, lng: loc.lng },
          content: markerContent,
          title: loc.title,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="font-family:Inter,sans-serif;max-width:220px">
            <strong>${loc.title}</strong>
            <p style="font-size:0.95rem">${loc.details}</p>
          </div>`,
        });

        markerContent.addEventListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    });
  }, []);

  return <div ref={mapRef} style={containerStyle} id="map" />;
};

export default Map;