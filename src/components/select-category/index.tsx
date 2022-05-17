import SelectCategory from './Select';
import SelectedCategory from './Selected';
import { ICategory } from '../../interfaces/game';

type Props = {
  name: string;
  id: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  onChange?: (e: any) => void;
  helperText?: string | boolean | undefined;
  items: ICategory[] | [];
  categoryId: string | undefined;
};

function index(props: Props) {
  const { name, id, label, value, error = false, onChange, helperText, items, categoryId } = props;
  return (
    <>
      {categoryId ? (
        <SelectedCategory name={name} id={id} label={label} items={items} categoryId={categoryId} />
      ) : (
        <SelectCategory
          id={id}
          value={value}
          onChange={onChange}
          name={name}
          label={label}
          error={error}
          helperText={helperText}
          items={items}
        />
      )}
    </>
  );
}

export default index;
