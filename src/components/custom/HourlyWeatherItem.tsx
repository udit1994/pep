// Components
import { WeatherImage } from "./WeatherImage";
import { TemperatureText } from "./TemperatureText";

// Utils
import { getFormattedHourAndMin, getImageUrl } from "../../utils";

// Styles
import styles from "../../cssModules/custom/hourlyWeatherItem.module.css";

type HourlyWeatherItemProps = { item: any; index: number };

const HourlyWeatherItem = (
  props: HourlyWeatherItemProps
): React.ReactElement => {
  const { item, index } = props;
  const iconName = item?.weather?.[0].icon;
  const temperature = Math.round(Number(item?.temp));

  const formattedDate = getFormattedHourAndMin(
    new Date(Number(item.dt * 1000))
  );

  return (
    <div className={styles.container}>
      <div className={styles.temperatureText}>
        {index === 0 ? "now" : formattedDate}
      </div>
      <div>
        <WeatherImage src={getImageUrl(iconName)} width={32} height={32} />
      </div>
      <div>
        <TemperatureText
          temperature={temperature}
          className={styles.temperatureText}
        />
      </div>
    </div>
  );
};

export { HourlyWeatherItem };
