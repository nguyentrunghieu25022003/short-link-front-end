import axios from "axios";

export const getUserIP = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/ip`);
    if(response.status === 200) {
      return response.data.ip;
    }
    return null;
  } catch (error) {
    console.error("Error getting IP address:", error.message);
  }
};

export const getUserLocation = async (ip) => {
  try {
    const locationResponse = await axios.get(`https://get.geojs.io/v1/ip/geo/${ip}.json`);
    if(locationResponse.status === 200) {
      return locationResponse.data;
    }
    return null;
  } catch (error) {
    console.log("Error getting location" + error.message);
  }
};

export const getAllShortenedLink = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-url`);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};

export const getAllResult = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/crawl/social-snapshot/all`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};

export const getUserHistories = async (userId) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/${userId}/histories`, {
      withCredentials: true
    });
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};

export const createShortenedLink = async (formData, userId) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/shorten/${userId}`,
      formData,
      {
        withCredentials: true
      }
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};

export const deleteShortenedLink = async (formData) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/shorten/delete`,
      formData
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};

export const handleSignIn = async (formData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/sign-in`, formData, {
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};

export const handleSignUp = async (formData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/sign-up`, formData);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};

export const handleLogOut = async (userId, refreshToken) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/${userId}/log-out`, {
      refreshToken: refreshToken,
    });
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log("Error" + err.message);
  }
};