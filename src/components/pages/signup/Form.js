import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import image from "./../../../images/img-8.svg";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        <div className="sign-up">
            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src={image} alt='web-shoping' />
                </div>
                {!isSubmitted ? (
                <FormSignup submitForm={submitForm} />
                ) : (
                <FormSuccess />
                )}
            </div>
        </div>
    </>
  );
};

export default Form;