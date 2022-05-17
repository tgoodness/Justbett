import { Modal } from 'antd';
import Input from '../../../../components/InputFilled';
import SelectBank from '../../../../components/SelectBank';
import '../../../../style/dashboard/update-bank.scss';

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

          <SelectBank id="bankCode" name="bankCode" label="Bank Name" value="" items={banks} />
          <Input id="accountNumber" name="accountNumber" label="Account Number" value="" />
          <Input id="accountNumber" name="accountNumber" label="Account Name" value="" />
          <Input id="accountNumber" name="accountNumber" label="Enter Your Pin" value="" />
          <div className="pl-md-4 pr-md-4 mt-4">
            <button className="btn btn-block btn-black">Save Changes</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default UpdateBank;
