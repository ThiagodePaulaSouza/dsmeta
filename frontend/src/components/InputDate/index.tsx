import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

export function InputDate(props: any) {
  let value = props.date;

  const [date, setDate] = useState(value);

  return (
    <div className="dsmeta-form-control-container">
      <DatePicker
        selected={date}
        onChange={(date: Date) => setDate(date)}
        className="dsmeta-form-control"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}
