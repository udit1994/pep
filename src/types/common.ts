export type Payload = { fieldId: string; value: any };

export type FormAction = (action: { type: string; payload: Payload }) => void;
