import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ICategory } from '../../interfaces/game';

type Props = {
  name: string;
  id?: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  onChange?: (e: any) => void;
  helperText?: string | boolean | undefined;
  items: ICategory[] | [];
};

const useStyles = makeStyles(() => ({
  icon: {
    marginRight: '10px',
  },
}));

const SelectCategory = (props: Props) => {
  const classes = useStyles();
  const { name, id, label, value, error = false, onChange, helperText, items } = props;

  return (
    <FormControl className="text-field">
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        label={label}
        {...(error && { error: true })}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              <img src={item.icon} alt="Category Icon" width="20" className={classes.icon} />
              {item.name}
              <span> ({item.amount})</span>
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectCategory;
