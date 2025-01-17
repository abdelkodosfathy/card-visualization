// src/services/cardService.js
import axios from "axios";

const API_BASE_URL = "https://www.bakarcompany.somee.com/api";

export const getCardData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/IssueCard/get-card-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};
