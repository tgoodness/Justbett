import { useState } from 'react';

function FormHandler() {
  const [country, setCountry] = useState('');
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const [city, setCity] = useState('');
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const [mobile, setMobile] = useState('');
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const [gender, setGender] = useState('male');
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const [dob, setDob] = useState('');
  const handleDob = (date, dateString) => {
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
