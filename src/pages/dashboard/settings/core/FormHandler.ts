import { useState } from 'react';

function FormHandler() {
  const [country, setCountry] = useState('');
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const [city, setCity] = useState('');
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const [mobile, setMobile] = useState('');
  const handleMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  };

  const [gender, setGender] = useState('male');
  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const [dob, setDob] = useState('');
  const handleDob = (date: any, dateString: string) => {
    setDob(dateString);
  };

  return [
    country,
    handleCountry,
    city,
    handleCity,
    mobile,
    handleMobile,
    gender,
    handleGender,
    dob,
    handleDob,
  ];
}

export default FormHandler;
