import React, { useMemo, useContext } from "react";

// constants
import { THEME } from "../../constants";

// Utils
import { mergeObjects } from "../../utils";

// Provider
import { ThemeProvider } from "../../providers/ThemeProvider";

type MainProps = {
  children?: any;
  style?: object;
  className: any;
};

const Main = (props: MainProps): React.ReactElement => {
  const { className, style = {}, children } = props;

  const { theme } = useContext(ThemeProvider);

  const mergedStyles = useMemo(
    () => mergeObjects(THEME[theme], style),
    [style, theme]
  );

  return (
    <main style={mergedStyles} className={className}>
      {children}
    </main>
  );
};

export { Main };
