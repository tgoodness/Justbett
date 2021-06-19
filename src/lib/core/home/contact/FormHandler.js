import { useState } from "react";
import util from "../../../service/utils";

function FormHandler() {
  // EMAIL START HERE
  const [email, setEmail] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handleEmail = (e) => {
    const value = e.target.value;
    if (util.isEmail(value)) {
      setEmail({ ...email, error: false, value: value });
    } else {
      if (email.value === "") {
        setEmail({
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setEmail({
          value: value,
          helperText: "Email is invalid",
          error: true,
        });
      }
    }
  };

  // SUBJECT START HERE
  const [subject, setSubject] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handleSubject = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setSubject({
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      setSubject({
        value: value,
        helperText: "This field is required",
        error: true,
      });
    }
  };

  // BODY START HERE
  const [body, setBody] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handleBody = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setBody({
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      setBody({
        value: value,
        helperText: "This field is required",
        error: true,
      });
    }
  };

  return [email, handleEmail, subject, handleSubject, body, handleBody];
}

export default FormHandler;
