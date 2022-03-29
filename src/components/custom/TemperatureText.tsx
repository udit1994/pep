type TemperatureProps = {
  temperature: number;
  style?: object;
  className?: any;
};

const TemperatureText = (props: TemperatureProps): React.ReactElement => {
  const { temperature, style, className } = props;

  return (
    <p style={style} className={className}>
      {temperature ? <>{temperature}&deg;</> : null}
    </p>
  );
};

export { TemperatureText };
