// Components
import { Text } from "../standard/Text";

// Utils
import { getFormattedHourAndMin } from "../../utils";

import styles from "../../cssModules/custom/dateTime.module.css";

const DAY_MAP = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

type DateTimeProps = { timeStamp: number };

const DateTime = (props: DateTimeProps): React.ReactElement => {
  const { timeStamp } = props;
  const _date = new Date(Number(timeStamp));

  const day = _date.getDay();
  const formattedDate = getFormattedHourAndMin(_date);

  return (
    <div className={styles.container}>
      <Text className={styles.dateStyle}>{DAY_MAP[day]}</Text>
      <Text className={styles.dateStyle}>
        {_date
          .toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          .replace(/ /g, " ")}
      </Text>
      <Text className={styles.timeStyle}>{formattedDate}</Text>
    </div>
  );
};

export { DateTime };
