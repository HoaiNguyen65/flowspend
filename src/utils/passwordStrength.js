import { PASSWORD_REQUIREMENTS } from "./validators";

export const getPasswordStrength = (password) => {     
    const results = PASSWORD_REQUIREMENTS.map(req => ({
        met: req.regex.test(password),
        text: req.text
    }))
    return {
        score: results.filter(req => req.met).length,
        requirement: results,
    }
}