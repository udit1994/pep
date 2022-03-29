import { useCallback, useState } from "react";

// Constants
import { ON_CHANGE } from "../constants";

// Types
import { FormAction } from "../types";

type useFormProps = { initialValues?: object };

type useFormReturnType = { values: any; handleAction: FormAction };

const useForm = (props: useFormProps): useFormReturnType => {
  const { initialValues = {} } = props ?? {};

  const [formState, setFormState] = useState(initialValues);

  const handleAction = useCallback(
    (action) => {
      const { type, payload } = action;

      if (type === ON_CHANGE) {
        const { fieldId, value } = payload;

        setFormState((prev) => ({ ...prev, [fieldId]: value }));
      }
    },
    [setFormState]
  );

  return { values: formState, handleAction };
};

export { useForm };
