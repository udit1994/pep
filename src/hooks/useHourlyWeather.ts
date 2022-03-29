import { useEffect, useState } from "react";

type useHourlyWeatherProps = {
  latitude: number | undefined;
  longitude: number | undefined;
};
const useHourlyWeather = (
  props: useHourlyWeatherProps
): { data: Array<any> } => {
  const [data, setData] = useState<Array<object>>([]);
  const { latitude, longitude } = props;

  useEffect(() => {
    const func = async () => {
      const weatherResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=4&appid=${process.env.REACT_APP_MY_APP_ID}&units=metric`
      );

      const response = (await weatherResponse.json()) as any;
      const hourlyData = [] as Array<object>;

      for (let i = 0; i < 5; i++) {
        hourlyData.push(response.hourly[i]);
      }

      setData(hourlyData);
      console.log(hourlyData);
    };

    func();
  }, [latitude, longitude]);

  return { data };
};

export { useHourlyWeather };
