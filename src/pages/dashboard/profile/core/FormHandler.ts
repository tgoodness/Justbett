import { useState } from 'react';
import { IMAGES } from '../../../../constant';

type IFile = { preview: string; raw: File | null };

function FormHandler() {
  const [image, setImage] = useState<IFile>({
    preview: IMAGES.emptyPhoto,
    raw: null,
  });

  const handleImage = (e: any) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0] ;
    reader.onloadend = () => {
      setImage({
         raw: file,
        preview: reader.result as string,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return { image, handleImage};
}

export default FormHandler;
