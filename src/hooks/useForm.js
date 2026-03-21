import { useEffect, useRef, useState } from "react";
import { validateForm } from "../utils/validators";

export default function useForm(initialValues, options) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const { debounces, schemaName } = options;

  const timeRefs = useRef({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setValues((prev) => ({ ...prev, [name]: checked }));
      const error = validateForm(name, checked, schemaName);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return;
    } else if (name === "password") {
      setValues((prev) => ({
        ...prev,
        [name]: {
          ...prev.password,
          value,
        },
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (debounces[name]) {
      //clear timeout cũ
      if (timeRefs.current[name]) {
        clearTimeout(timeRefs.current[name]);
      }
      timeRefs.current[name] = setTimeout(() => {
        const error = validateForm(name, value, schemaName);

        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }, debounces[name]);
    } else {
      const error = validateForm(name, value, schemaName);

      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const validateAll = () => {
    const newErrors = {};

    //extract value

    const getDrawValue = (val) => {
      return val !== null && typeof val === "object" && "value" in val
        ? val.value
        : val;
    };

    Object.keys(values).forEach((key) => {     
      newErrors[key] = validateForm(key, getDrawValue(values[key]), schemaName);
    });

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const toggleShowField = (fieldName) => {
    setValues((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        show: !prev[fieldName].show,
      },
    }));
  };

  useEffect(() => {
    return () => {
      Object.keys(timeRefs.current).forEach(clearTimeout);
    };
  }, []);

  return {
    values,
    errors,
    handleChange,
    validateAll,
    toggleShowField,
  };
}
