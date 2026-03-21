export const getAuthErrorMessage = (code) => {
    const messages = {
    "auth/invalid-credential": "Email or password is incorrect",
    "auth/user-not-found": "Account does not exist",
    "auth/user-disabled": "Account has been disabled",
    "auth/too-many-requests": "Too many attempts. Please try again later",
    "auth/email-already-in-use": "Email already exists",
    "auth/weak-password": "Password must be at least 6 characters",
    "auth/invalid-email": "Invalid email format",
  };
  return messages[code] ?? "Login failed. Please try again.";
}