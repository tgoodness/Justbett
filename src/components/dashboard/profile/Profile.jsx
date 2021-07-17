import React, { useState } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Image } from 'antd';

import { DatePicker } from 'antd';
import moment from 'moment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import Pageview from '../../../lib/layout/dashboard/Pageview';
import Input from '../../../lib/control/InputFilled';
import Select from '../../../lib/control/Select';
import '../../../lib/style/dashboard/profile.scss';
import formHandler from './core/FormHandler';
import NGN from '../../../lib/assets/dashboard/ngn.png';


function Profile () {
    const [
        image,
        handleImage,
        gender,
        handleGender,
        dob,
        handleDob
    ] = formHandler();

    const [ visible, setVisible ] = useState({ visible: false, type: '' });
    const handleShowEdit = (type) => {
        setVisible({ visible: !visible.visible, type });
    };


    const defaultDOB = '05/05/2000';
    console.log(dob, visible);
    return <Pageview title="Profile" data-aos="flip-left">
        <div className="profile">
            <div className="image-wrapper">
                <div>
                    <Image src={ image.preview } alt="User Picture"  size={ 100 } />
                </div>
                <label>
                    <h5>Upload Photo</h5>
                    <input type="file" className="d-none" onChange={ handleImage } />
                </label>
                <h6>JB830213 <CopyOutlined /></h6>
            </div>

            { !visible.visible ?
                <>

                    <div className="data-wrapper">
                        <div className="data">
                            <h6>Full Name</h6>
                            <h5>Tobiloba Akinyemi</h5>
                        </div>

                        <div className="edit-btn">
                            <span onClick={ () => handleShowEdit('NAME') }>Edit</span>
                        </div>
                    </div>

                    <div className="data-wrapper">
                        <div className="data">
                            <h6>Country</h6>
                            <h5><img src={ NGN } alt="Nigeria Logo" width="20px" /> <span className="ml-1">Nigeria</span></h5>
                        </div>

                        <div className="edit-btn">
                            <span className="default">Edit</span>
                        </div>
                    </div>


                    <div className="data-wrapper">
                        <div className="data">
                            <h6>State/City</h6>
                            <h5>Osun</h5>
                        </div>

                        <div className="edit-btn">
                            <span onClick={ () => handleShowEdit('STATE') }>Edit</span>
                        </div>
                    </div>

                    <div className="data-wrapper">
                        <div className="data">
                            <h6>Phone Number</h6>
                            <h5>08068694950</h5>
                        </div>

                        <div className="edit-btn">
                            <span onClick={ () => handleShowEdit('PHONE_NUMBER') }>Edit</span>
                        </div>
                    </div>

                    <div className="data-wrapper">
                        <div className="data">
                            <h6>Gender</h6>
                            <h5>Male</h5>
                        </div>

                        <div className="edit-btn">
                            <span onClick={ () => handleShowEdit('GENDER') }>Edit</span>
                        </div>
                    </div>

                    <div className="data-wrapper">
                        <div className="data">
                            <h6>DOB</h6>
                            <h5>05/05/2000</h5>
                        </div>

                        <div className="edit-btn">
                            <span onClick={ () => handleShowEdit('DOB') }>Edit</span>
                        </div>
                    </div>
                </> :
                <div className="form-wrapper">
                    { visible.type === 'NAME' &&
                        <> <Input label="First Name" />
                            <Input label="Last Name" />
                        </>
                    }

                    { visible.type === 'STATE' &&
                        <Select label="State/City" items={ [ 'Osun', 'Lagos', 'Delta' ] } />
                    }
                    { visible.type === 'PHONE_NUMBER' &&
                        <Input label="Phone Number" type="number" />
                    }

                    { visible.type === 'GENDER' &&
                        <>
                            <h6>What gender are you?</h6>
                            <div className="gender-wrapper">
                                <div>
                                    <RadioGroup name="gender" value={ gender } onChange={ handleGender }>
                                        <FormControlLabel
                                            control={ <Radio /> }
                                            value="male"
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            control={ <Radio /> }
                                            value="female"
                                            label="Female"
                                        />
                                    </RadioGroup>
                                </div>
                            </div>
                        </>
                    }
                    { visible.type === 'DOB' &&
                        <>
                            <h6>Date of Birth</h6>
                            <DatePicker
                                format="MM/DD/YYYY"
                                placeholder="Date of Birth"
                                { ...(defaultDOB !== null
                                    && { defaultValue: moment(defaultDOB, 'MM/DD/YYYY') }) }
                                onChange={ handleDob }
                            />
                        </>
                    }
                    <div className="mt-4">
                        <button className="btn btn-black  btn-block ">Save</button>
                    </div>
                    <h6 className="cancel-btn" onClick={ handleShowEdit }>Close</h6>
                </div>
            }
        </div>
    </Pageview>;

}

export default Profile;
