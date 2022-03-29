// components
import { FormAction } from "../../types";
import { Input, Text } from "../standard";
import { TemperatureText } from "./TemperatureText";

// Styles
import styles from "../../cssModules/custom/formSection.module.css";

type FormSectionProps = {
  description?: React.ReactElement;
  handleAction: FormAction;
  id: string;
  place?: string;
  temperature?: number;
};

const handleSubmit = (e: any) => {
  e.preventDefault();
};

const FormSection = (props: FormSectionProps) => {
  const { temperature, description, place, handleAction, id } = props;

  return (
    <div className={styles.container}>
      {temperature ? (
        <div className={styles.temperatureContainer}>
          <TemperatureText
            className={styles.temperatureText}
            temperature={temperature as number}
          />
        </div>
      ) : null}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Text className={styles.descriptionText}>{description}</Text>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <Input
              className={styles.input}
              id={id}
              onAction={handleAction}
              placeholder="Enter City Name"
              value={place}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export { FormSection };
