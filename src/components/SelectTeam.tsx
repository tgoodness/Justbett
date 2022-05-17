import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import util from '../helpers/utils';
import { ITeam } from '../interfaces/game';

type Props = {
  name: string;
  id?: string;
  label?: string;
  value: string;
  error?: boolean | undefined;
  onChange?: (e: any) => void;
  helperText?: string | boolean | undefined;
  items: ITeam[];
};

const SelectTeam = (props: Props): JSX.Element => {
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
            <MenuItem key={util.randomNumber() + item.peerId} value={item.peerId}>
              <img src={item.teamA.icon} alt="Team A Logo" width="15" className="mr-2" />
              {item.teamA.name}
              <span className="mr-3 ml-3">-</span>
              <img src={item.teamB.icon} alt="Team B Logo" width="15" className="mr-2" />
              {item.teamB.name}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
export default SelectTeam;
