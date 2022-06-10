import { Modal } from 'antd';
import Input from '../../../../components/Input';
import Button from '../../../../components/buttons/Button';
import SelectBank from '../../../../components/SelectBank';
import './style.scss';

type Props = { visible: boolean; handleCancel: () => void };
function UpdateBank(props: Props) {
  const { visible, handleCancel } = props;

  const banks = [
    { bankName: 'FCMB', bankCode: 124 },
    { bankName: 'WEMA', bankCode: 125 },
    { bankName: 'Polaris', bankCode: 126 },
  ];

  return (
    <>
      <Modal title="Bank Details" footer={false} visible={visible} onCancel={handleCancel}>
        <div className="update-bank">
          <div className="existing-details">
            <h5>TOBILOBA AKINYEMI O.</h5>
            <div>
              <h6>3030034509</h6>
              <h6>POLARIS BANK</h6>
            </div>
          </div>

          <SelectBank
            label="Select Bank"
            name=""
            value=""
            items={banks}
            error={false}
            helperText=""
          />
          <Input id="accountNumber" name="accountNumber" label="Account Number" value="" />
          <Input id="accountNumber" name="accountNumber" label="Account Name" value="" />
          <Input id="accountNumber" name="accountNumber" label="Enter Your Pin" value="" />
          <Button label="Save Changes" className="btn btn-block btn-black mt-3" />
        </div>
      </Modal>
    </>
  );
}

export default UpdateBank;
