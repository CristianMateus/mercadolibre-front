export interface TextboxProps {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  placeHolder?: string;
}
