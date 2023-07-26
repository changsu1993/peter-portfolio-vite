import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer center={[37.618269, 126.914335]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[37.618269, 126.914335]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className='map-content'>
        <h3 className='switch__color'>Changsu</h3>
        <span>A.k.A Peter</span>
        <br />
        <span>Location : 서울특별시 은평구</span>
        <br />
        <span>Email: csdp0106@gmail.com</span>
      </div>
    </MapContainer>
  );
};

export default Map;
