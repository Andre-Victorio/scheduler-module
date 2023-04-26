import * as React from "react";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {DateField} from "@mui/x-date-pickers";
export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Select Date"
          value={value}
          onChange={(newValue, context) => {
            if (context.validationError == null) {
              setValue(newValue);
            }
          }}
          disablePast
          slotProps={{field: {required: true}}}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
