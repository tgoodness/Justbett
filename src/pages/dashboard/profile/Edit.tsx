import { useState } from 'react';
import { Modal } from 'antd';

import Input from '../../../components/Input';
import InputDate from '../../../components/InputDate';
import Select from '../../../components/Select';
import Button from '../../../components/buttons/Button';

type Props = { visible: boolean; handleCancel: () => void };
const ChangePassword = (props: Props) => {
  const { visible, handleCancel } = props;

  const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'));
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <>
      <Modal title="Edit Profile" footer={false} visible={visible} onCancel={handleCancel}>
        <Input name="firstName" id="firstName" value="" label="First Name" />
        <Input name="lastName" id="lastName" value="" label="Last Name" />
        <Input name="phoneNumber" id="phoneNumber" value="" label="Phone Number" />
        <Select name="gender" id="gender" value="" label="Gender" items={['Male', 'Female']} />
        <InputDate label="Date of Birth" value={value} handleChange={handleChange} />
        <Select
          name="city"
          id="city"
          value=""
          label="State/City"
          items={['Osun', 'Lagos', 'Delta']}
        />

        <Button label="Save" className="btn btn-block btn-black mt-3" />
      </Modal>
    </>
  );
};

export default ChangePassword;
