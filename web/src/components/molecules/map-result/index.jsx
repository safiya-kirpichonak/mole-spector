import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./index.css";

const MapResult = ({ data }) => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: data.center, zoom: 9 }}
        className="map-style"
      >
        {data.clinics.map((clinic, index) => (
          <Placemark geometry={clinic} key={index} />
        ))}
      </Map>
    </YMaps>
  );
};

export default MapResult;
