/* eslint-disable import/prefer-default-export */
import jwt_decode from "jwt-decode";

export function decodeTokenAndExtractRole() {
  const token = localStorage.getItem("token");

  let adminRole = null;
  let userRole = null;
  let tokenIsValid = false;
  let userId = null;

  if (token) {
    const decodedToken = jwt_decode(token);

    adminRole = decodedToken.role === "77788888999966666666111";
    userRole = decodedToken.role === "441655156655116515451";
    tokenIsValid = true;
    userId = decodedToken.userId;
  } else {
    console.error("Invalid token specified");
  }

  return { adminRole, userRole, tokenIsValid, userId };
}
