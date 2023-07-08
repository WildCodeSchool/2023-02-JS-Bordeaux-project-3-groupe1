/* eslint-disable import/prefer-default-export */
import jwt_decode from "jwt-decode";

export function decodeTokenAndExtractRole() {
  const token = localStorage.getItem("token");

  const decodedToken = jwt_decode(token);

  const adminRole = decodedToken.role === "77788888999966666666111";
  const userRole = decodedToken.role === "441655156655116515451";

  const userId = decodedToken.userId;

  return { adminRole, userRole, userId };
}
