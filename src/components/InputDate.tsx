import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

type Props = {
  label: string;
  value: Date | null;
  handleChange: (newValue: Date | null) => void;
};

function DatePicker(props: Props) {
  const { label, value, handleChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label={label}
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params: TextFieldProps) => <TextField className="text-field" {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
