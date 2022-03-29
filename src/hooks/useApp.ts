import { useCallback, useEffect, useState, useRef } from "react";

// Constants
import { APP_THEHE } from "../constants";

// Utils
import { adaptToApp } from "../utils";

// Hooks
import { useDebounce } from "./useDebounce";

type useAppProps = { place?: string };

type useAppReturnType = {
  appState: object | undefined;
  theme: string;
  setTheme: (prev: any) => void;
  coordinates: {
    current: { latitude: number | undefined; longitude: number | undefined };
  };
};

const useApp = (props: useAppProps): useAppReturnType => {
  const { place } = props;
  const [appState, setState] = useState<object | undefined>(undefined);
  const [theme, setTheme] = useState(APP_THEHE.LIGHT);
  const coordinates = useRef({ latitude: undefined, longitude: undefined });

  const debouncedSearchTerm = useDebounce(place, 500);

  const func = useCallback(
    async (_place) => {
      const geoLocationResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${_place}&limit=5&appid=${process.env.REACT_APP_MY_APP_ID}&units=metric`
      );

      const jsonGeoLocationResponse = (await geoLocationResponse.json()) as any;

      const code = jsonGeoLocationResponse.cod;

      if (code === "400") {
        setState(undefined);
        coordinates.current = { latitude: undefined, longitude: undefined };

        console.error(jsonGeoLocationResponse.message);

        return;
      }

      const latitude = jsonGeoLocationResponse?.[0].lat;
      const longitude = jsonGeoLocationResponse?.[0].lon;

      coordinates.current = { latitude, longitude };

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_MY_APP_ID}&units=metric`
      );

      const jsonWeatherResponse = (await weatherResponse.json()) as any;

      const code1 = jsonWeatherResponse.cod;

      if (code1 === "400") {
        setState(undefined);
        coordinates.current = { latitude: undefined, longitude: undefined };

        console.error(jsonWeatherResponse.message);

        return;
      }

      setState(adaptToApp(jsonWeatherResponse));
    },
    [setState]
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      func(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, func]);

  return { appState, theme, setTheme, coordinates };
};

export { useApp };
