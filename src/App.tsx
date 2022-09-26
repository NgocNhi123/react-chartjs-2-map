import "./styles.css";
import * as ChartGeo from "chartjs-chart-geo";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Title,
  Legend
} from "chart.js";
import Map from "./geo-map";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartGeo.ChoroplethController,
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
);

export default function App() {
  return (
    <div className="App">
      <Map chosenKey="world" />
      <div className="space" />
      <Map chosenKey="europe" />
      <div className="space" />
      <Map chosenKey="china" />
    </div>
  );
}
