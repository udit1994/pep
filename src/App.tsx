import React, { useEffect, useMemo } from "react";

// Components
import { Main } from "./components/standard";
import {
  DateTime,
  FormSection,
  HourlyWeather,
  WeatherImage,
} from "./components/custom";

// hooks
import { useApp, useForm } from "./hooks";

// Provider
import { ThemeProvider } from "./providers/ThemeProvider";

// Constants
import { APP_THEHE } from "./constants";

// Utils

import { getImageUrl } from "./utils";

// Styles
import styles from "./app.module.css";

const ID = "ID";

const App = (): React.ReactElement => {
  const { values, handleAction } = useForm({
    initialValues: { [ID]: "bangalore" },
  });

  const place = values?.[ID];

  const { appState, setTheme, theme, coordinates } = useApp({
    place,
  });

  const _appState: any = appState;

  const providerValue = useMemo(() => ({ theme, setTheme }), [setTheme, theme]);

  const timeStamp = _appState?.timeStamp;

  useEffect(() => {
    if (timeStamp) {
      const date = new Date(timeStamp);

      const time = date.getHours();

      if (time > 6 && time < 18) {
        setTheme(APP_THEHE.LIGHT);
      } else {
        setTheme(APP_THEHE.DARK);
      }
    }
  }, [setTheme, timeStamp]);

  return (
    <ThemeProvider.Provider value={providerValue}>
      <Main className={styles.main}>
        <FormSection
          description={_appState?.description as unknown as React.ReactElement}
          handleAction={handleAction}
          place={place}
          temperature={_appState?.temperature}
          id={ID}
        />
        <div>
          {_appState?.icon ? (
            <WeatherImage
              src={getImageUrl(_appState?.icon)}
              width={179}
              height={179}
            />
          ) : undefined}
        </div>
        {_appState?.timeStamp ? (
          <div>{<DateTime timeStamp={_appState?.timeStamp} />}</div>
        ) : null}
        {coordinates.current.latitude && coordinates.current.longitude ? (
          <HourlyWeather coordinates={coordinates.current} />
        ) : null}
      </Main>
    </ThemeProvider.Provider>
  );
};

export { App };
