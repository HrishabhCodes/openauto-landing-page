import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./Form.css";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";

const Form = () => {
  const [name, setName] = useState();
  const [isNameError, setIsNameError] = useState();
  const [message, setMessage] = useState();
  const [isMessageError, setIsMessageError] = useState();
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState();

  useEffect(() => {
    if (phone !== "" && phone !== undefined) {
      if (isPossiblePhoneNumber(phone) && isValidPhoneNumber(phone) === true) {
        setIsPhoneError("");
      } else {
        setIsPhoneError("Invalid");
      }
    } else if (phone === undefined) {
      setIsPhoneError("Invalid");
    }
  }, [phone]);

  useEffect(() => {
    if (name !== undefined) {
      validateName();
    }
  }, [name]);

  useEffect(() => {
    if (message !== undefined) {
      if (message === "") {
        setIsMessageError("Required");
      } else {
        setIsMessageError("");
      }
    }
  }, [message]);

  const validateName = () => {
    if (name === "") {
      setIsNameError("Required");
    } else if (name.length === 1) {
      setIsNameError("Too Short");
    } else {
      setIsNameError("");
    }
  };

  const handleSubmit = () => {
    if (isMessageError === "" && isNameError === "" && isPhoneError === "") {
      console.log("Submitted!");
    } else {
      console.log("Error!");
    }
  };

  return (
    <div className="form-section">
      <div className="form-container">
        <div className="form-text">
          <h1>
            We're All <br /> <span>Ears!</span>
          </h1>
          <p>
            If you have trouble managing your order, or want to talk to one of
            our expert technicians, we are here for you!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <FormControl className="form-group" isInvalid={isNameError}>
            <FormLabel
              color={isNameError ? "red" : "#414548"}
              className="label"
            >
              Full Name
            </FormLabel>
            <Input
              className="input name"
              placeholder="Your Full Name"
              style={
                isNameError
                  ? { borderColor: "red" }
                  : { borderColor: "#989da0" }
              }
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormErrorMessage className="error">{isNameError}</FormErrorMessage>
          </FormControl>

          <FormControl className="form-group" isInvalid={isPhoneError}>
            <FormLabel
              color={isPhoneError ? "red" : "#414548"}
              className="label"
            >
              Phone
            </FormLabel>
            <PhoneInput
              onChange={setPhone}
              // onBlur={() => {
              //   if (phone === "") {
              //     setIsPhoneError("Required");
              //   } else {
              //     setIsPhoneError("");
              //   }
              // }}
              style={
                isPhoneError
                  ? { borderColor: "red" }
                  : { borderColor: "#989da0" }
              }
              type="text"
              international
              countryCallingCodeEditable={false}
              countrySelectProps={{ unicodeFlags: true }}
              className="input field phone"
              defaultCountry="CA"
              value={phone}
            />
            <FormErrorMessage className="error">
              {isPhoneError}
            </FormErrorMessage>
          </FormControl>

          <FormControl className="form-group" isInvalid={isMessageError}>
            <FormLabel
              color={isMessageError ? "red" : "#414548"}
              className="label"
            >
              Message
            </FormLabel>
            <Textarea
              className="textarea message"
              placeholder="Max 2000 characters"
              // onBlur={() => {
              //   if (message === "") {
              //     setIsMessageError("Required");
              //   } else {
              //     setIsMessageError("");
              //   }
              // }}
              style={
                isMessageError
                  ? { borderColor: "red" }
                  : { borderColor: "#989da0" }
              }
              maxLength={2000}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <FormErrorMessage className="error">
              {isMessageError}
            </FormErrorMessage>
          </FormControl>

          <button className="btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
