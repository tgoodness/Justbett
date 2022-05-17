import { useState } from 'react';
import { IMAGES } from '../../../../constant';

type IFile = { preview: string; raw: File | null };
function FormHandler() {
  const [image, setImage] = useState<IFile>({
    preview: IMAGES.emptyPhoto,
    raw: null,
  });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const reader = new FileReader();
    const readyResult = <string>reader.result;
    const file: File = (<FileList>(<HTMLInputElement>e.target).files)[0];

    reader.onloadend = () => {
      setImage({
        ...image,
        raw: file,
        preview: readyResult,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [dob, setDob] = useState('');
  const handleDob = (date: any, dateString: string) => {
    setDob(dateString);
  };

  return { image, handleImage, dob, handleDob };
}

export default FormHandler;
