import { useState } from 'react';
import emptyImage from '../../../../lib/assets/dashboard/empty-photo.png';
function FormHandler () {
    //Uplaod file
    const [ image, setImage ] = useState({
        preview: emptyImage,
        raw: '',
    });

    const handleImage = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[ 0 ];

        reader.onloadend = () => {
            setImage({
                ...image,
                raw: file,
                preview: reader.result,
            });
        };

        if (file)
        {
            reader.readAsDataURL(file);
        }

    };




    const [ gender, setGender ] = useState('male');
    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const [ dob, setDob ] = useState('');
    const handleDob = (date, dateString) => {
        setDob(dateString);
    };



    return [
        image,
        handleImage,
        gender,
        handleGender,
        dob,
        handleDob
    ];
}

export default FormHandler;
