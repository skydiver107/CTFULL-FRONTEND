import axios from "axios";
import config from "../config";

// Switch API url depending on environment
// export const API_URL = "https://api.citefulldev.com";
export const API_URL = "http://localhost:5000";

// Create axios client
export const API = axios.create({
  baseURL: API_URL,
  headers: axios.defaults.headers.common,
});

/**
 * API Methods
 */

// Exchange auth tokens from idToken to JWT
export const exchangeAuthTokens = async (idToken: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API.post("/auth/exchange-token", {
        token: idToken,
      });
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

// Retrieve user data using a auth token
export const getAuthUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API.get("/user");
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

// Test authentication using a auth token
export const testAuth = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API.get("/auth/isAuthenticated");
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getControlBlocks = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API.get("/carousel");
      // console.log("getcontrolblocks response is", response.data);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const postControlBlocks = async (controlBlocks: object) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API.post("/carousel", controlBlocks);
      // console.log("post controlblocks data is", response.data);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
