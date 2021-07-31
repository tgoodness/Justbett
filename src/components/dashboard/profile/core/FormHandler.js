import { useState } from 'react';
import emptyImage from '../../../../lib/assets/dashboard/empty-photo.png';
function FormHandler() {
  //Uplaod file
  const [image, setImage] = useState({
    preview: emptyImage,
    raw: '',
  });

  const handleImage = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
        ...image,
        raw: file,
        preview: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [dob, setDob] = useState('');
  const handleDob = (date, dateString) => {
    setDob(dateString);
  };

  return [image, handleImage, dob, handleDob];
}

export default FormHandler;
