const debounce = (func: () => void, wait: number, immediate: boolean) => {
  let timeout: NodeJS.Timeout | null;

  return function executedFunction(this: any) {
    var context = this;
    var args = arguments as unknown as [];

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout as NodeJS.Timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

const mergeObjects = (object1?: object, object2?: object): object => ({
  ...(object1 ?? {}),
  ...(object2 ?? {}),
});

const adaptToApp = (weatherData: any) => {
  if (!weatherData) {
    return {};
  }

  return {
    description: weatherData.weather?.[0].main,
    temperature: Math.round(Number(weatherData.main?.temp)),
    timeStamp: weatherData.dt * 1000,
    icon: weatherData.weather?.[0].icon,
  };
};

const getFormattedHourAndMin = (date?: Date) => {
  if (!date) {
    return "";
  }

  const hours = date.getHours().toString();
  const adaptedHours = hours.length === 1 ? `0${hours}` : hours;

  const minutes = date.getMinutes().toString();
  const adaptedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;

  return `${adaptedHours}.${adaptedMinutes}`;
};

const getImageUrl = (fileName: string): string =>
  `http://openweathermap.org/img/wn/${fileName}@2x.png`;

export {
  debounce,
  mergeObjects,
  adaptToApp,
  getFormattedHourAndMin,
  getImageUrl,
};
