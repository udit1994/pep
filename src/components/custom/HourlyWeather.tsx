// Components
import { HourlyWeatherItem } from "./HourlyWeatherItem";

// Hooks
import { useHourlyWeather } from "../../hooks/useHourlyWeather";

// Styles
import styles from "../../cssModules/custom/hourlyWeather.module.css";

type FutureWeatherProps = {
  coordinates: { latitude: number | undefined; longitude: number | undefined };
};

const HourlyWeather = (
  props: FutureWeatherProps
): React.ReactElement | null => {
  const { coordinates } = props;

  const { data = [] } = useHourlyWeather(coordinates);

  return (
    <section className={styles.container}>
      {data.map((item, index) => (
        <HourlyWeatherItem item={item} index={index} key={index} />
      ))}
    </section>
  );
};

export { HourlyWeather };
