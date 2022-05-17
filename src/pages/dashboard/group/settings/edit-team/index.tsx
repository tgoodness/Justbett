import { Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import SelectTeam from '../../../../../components/SelectTeam';
import logicHandler from './core/LogicHandler';
import formHandler from './core/FormHandler';
import { IMAGES } from '../../../../../constant';
import '../../../../style/dashboard/group/place-bet-soccer.scss';

type Props = {
  visible: boolean;
  handleCancel: () => void;
};

function EditTeam(props: Props) {
  const teams = [
    {
      peerId: 1,
      teamA: {
        id: 1,
        name: 'CHE',
        icon: IMAGES.CHE,
      },
      teamB: {
        id: 2,
        name: 'MAN',
        icon: IMAGES.MAN,
      },
    },

    {
      peerId: 2,
      teamA: {
        id: 1,
        name: 'ARS',
        icon: IMAGES.ARS,
      },
      teamB: {
        id: 2,
        name: 'BAR',
        icon: IMAGES.BAR,
      },
    },

    {
      peerId: 3,
      teamA: {
        id: 1,
        name: 'LIV',
        icon: IMAGES.LIV,
      },
      teamB: {
        id: 2,
        name: 'BAY',
        icon: IMAGES.BAY,
      },
    },
  ];

  const { visible, handleCancel } = props;
  const { teamA, handleTeamA, teamB, handleTeamB } = logicHandler();
  const { team, handleTeam, selectedTeam } = formHandler(teams);

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      title="Edit Team"
      footer={false}
      centered={true}
      maskClosable={false}
    >
      <div className="group-place-bet-soccer">
        <SelectTeam
          name="teamName"
          label="Select Team"
          value={team}
          onChange={handleTeam}
          items={teams}
        />

        {team && (
          <div className="prediction">
            <label>What&apos;s your prediction? </label>
            <div className="check-wrapper">
              <div className="teamA" id={'1'}>
                <h6>{selectedTeam?.teamA.name} wins</h6>
                <CheckOutlined
                  className={teamA.isChecked ? 'checked' : 'checked unchecked'}
                  onClick={handleTeamA}
                />
              </div>
              <div className="teamB" id={'2'}>
                <h6>{selectedTeam?.teamB.name} wins</h6>
                <CheckOutlined
                  className={teamB.isChecked ? 'checked' : 'checked unchecked'}
                  onClick={handleTeamB}
                />
              </div>
            </div>
          </div>
        )}

        <div className="btn-wrapper">
          <button className="btn btn-block btn-black">Place Bet</button>
        </div>
      </div>
    </Modal>
  );
}

export default EditTeam;
