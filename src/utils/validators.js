export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[0-9]/, text: 'At least 1 number' },
  { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
  { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  { regex: /[!-\/:-@[-`{-~]/, text: 'At least 1 special character' },
];

const sharedRules = {
  email: (value) => {
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Invalid email format";
    return "";
  },
  password: (value) => {
    if (!value) return "Password is required";
    if(value.length < 8) return "Password must be at least 8 characters"
    return "";
  },
};

const loginRules = {
  ...sharedRules,
};

const registerRules = {
  ...sharedRules,
  name: (value) => {
    if (!value) return "Full name is required";
    return "";
  },
  terms: (value) => {
    if (!value) return "Please agree with our terms";
    return "";
  },
};

const validateSchema = {
  login: {
    validateField: (name, value) => loginRules[name]?.(value) ?? "",
  },
  register: {
    validateField: (name, value) => registerRules[name]?.(value) ?? "",
  },
};

export const validateForm = (name, value, schemaName) => {
  if (!validateSchema[schemaName]) return "";
  return validateSchema[schemaName].validateField(name, value);
};
