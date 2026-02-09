"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  { name: "Alger", lat: 36.7538, lng: 3.0588, region: "Centre" },
  { name: "Oran", lat: 35.6969, lng: -0.6331, region: "Ouest" },
  { name: "Constantine", lat: 36.365, lng: 6.6147, region: "Est" },
  { name: "Blida", lat: 36.4722, lng: 2.8278, region: "Centre" },
  { name: "Sétif", lat: 36.1898, lng: 5.4108, region: "Est" },
  { name: "Annaba", lat: 36.8974, lng: 7.7672, region: "Est" },
  { name: "Batna", lat: 35.5566, lng: 6.1743, region: "Est" },
  { name: "Tlemcen", lat: 34.8828, lng: -1.3167, region: "Ouest" },
  { name: "Béjaïa", lat: 36.7508, lng: 5.0564, region: "Est" },
  { name: "Djelfa", lat: 34.6704, lng: 3.2503, region: "Centre" },
  { name: "Tiaret", lat: 35.3711, lng: 1.3171, region: "Ouest" },
  { name: "Ouargla", lat: 31.9527, lng: 5.3249, region: "Sud" },
  { name: "Ghardaïa", lat: 32.4912, lng: 3.6735, region: "Sud" },
  { name: "Béchar", lat: 31.6167, lng: -2.2167, region: "Sud" },
  { name: "Tizi Ouzou", lat: 36.7117, lng: 4.0453, region: "Centre" },
  { name: "Médéa", lat: 36.2675, lng: 2.75, region: "Centre" },
];

export default function AlgeriaMapComponent() {
  return (
    <MapContainer
      center={[34.0, 3.0]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, i) => (
        <Marker key={i} position={[loc.lat, loc.lng]} icon={defaultIcon}>
          <Popup>
            <strong>{loc.name}</strong><br />
            Région: {loc.region}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
