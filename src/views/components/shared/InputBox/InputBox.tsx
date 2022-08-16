import React from "react";
import "./styles.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import plusIcon from "../../../../assets/plus-icon.svg";

export enum InputType {
  DATE = "DATE",
}

interface IUserInputProps {
  type?: InputType;
  value: string | Date | undefined;
  multiple?: boolean;
  onTextChange?: (text: string) => void;
  onDateChange?: (date: Date) => void;
  onAddClick?: () => void;
}

export const UserInput: React.FC<IUserInputProps> = ({
  type,
  value,
  multiple,
  onTextChange,
  onDateChange,
  onAddClick,
}) => {
  const onDatePickerChange = (date: Date) => {
    onDateChange && onDateChange(date);
  };

  const onInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange && onTextChange(e.target.value);
  };

  return (
    <div className="input-box">
      <div className="input-box__input-container">
        {type === InputType.DATE ? (
          <DatePicker selected={value as Date} onChange={onDatePickerChange} />
        ) : (
          <>
            <input value={value as string} onChange={onInputTextChange} />
            {multiple && (
              <button
                className="input-box__input-container__add-button"
                onClick={onAddClick}
              >
                <img width={20} height={20} src={plusIcon} alt="Plus-Button" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
