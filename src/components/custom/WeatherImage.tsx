type WeatherImageProps = {
  alt?: string;
  height: number;
  src: string;
  width: number;
};

const WeatherImage = (props: WeatherImageProps): React.ReactElement | null => {
  const { height, width, src, alt = "Weather" } = props;

  return <img alt={alt} src={src} width={width} height={height} />;
};

export { WeatherImage };
