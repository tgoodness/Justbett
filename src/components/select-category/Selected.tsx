import { Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { ICategory } from '../../interfaces/game';

type Props = {
  name: string;
  id: string;
  label?: string;
  items: ICategory[] | [];
  categoryId: string | undefined;
};

const Category = (props: Props) => {
  const { name, id, label, items, categoryId } = props;
  const data = items.find((c) => c.id === categoryId);

  return (
    <FormControl className="text-field">
      <InputLabel htmlFor="category">{label}</InputLabel>
      <Input
        type="text"
        id={id}
        name={name}
        value={data?.name}
        startAdornment={<img src={data?.icon} alt="Category Icon" width="15" className="mr-1" />}
        autoComplete="off"
      />
    </FormControl>
  );
};

export default Category;
