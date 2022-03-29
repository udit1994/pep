import React from "react";

type TextProps = {
  children?: React.ReactElement | string;
  className?: any;
  style?: object;
  text?: React.ReactElement;
};

const Text = (props: TextProps): React.ReactElement => {
  const { text, style, children, className } = props;

  return (
    <p style={style} className={className}>
      {text ?? children}
    </p>
  );
};

export { Text };
