import { createContext, useContext, useState } from "react";
const FormDataContext = createContext();
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
export const useFormData = () => {
  const { formData, setFormData } = useContext(FormDataContext);
  return { formData, setFormData };
};
