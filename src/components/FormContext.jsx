import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = (props) => {
  const [formData, setFormData] = useState({});
  
  const updateFormData = (Data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...Data,
    }));
  };

  const resetFormData = () => {
    setFormData({});
  };

  const contextValue = {
    formData,
    updateFormData,
    resetFormData,
  };

  return <FormContext.Provider value={contextValue} {...props} />;
};

export { FormProvider, FormContext };
