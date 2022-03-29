import { useCallback } from "react";

// Constants
import { ON_CHANGE } from "../../constants";

// Types
import { FormAction } from "../../types";

type InputProps = {
  className?: string;
  id: string;
  label?: React.ReactElement;
  onAction: FormAction;
  placeholder?: string;
  style?: object;
  value: string | undefined;
};

const Input = (props: InputProps): React.ReactElement => {
  const { className, label, style, onAction, id, placeholder, value } = props;

  const handleChange = useCallback(
    (e) => {
      const fieldId = e.target.id;
      const value = e.target.value;

      onAction({ type: ON_CHANGE, payload: { fieldId, value } });
    },
    [onAction]
  );

  return (
    <label>
      {label}
      <input
        className={className}
        id={id}
        onChange={handleChange}
        placeholder={placeholder}
        style={style}
        type="text"
        value={value}
      />
    </label>
  );
};

export { Input };
