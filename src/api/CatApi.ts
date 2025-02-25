import { CatData } from "../interfaces/ICatData";

const API_URL = process.env.REACT_APP_API_URL;
console.log("Backend API URL: ", API_URL);

export const fetchCatData = async (): Promise<CatData> => {
  const response = await fetch('https://localhost:44344/api/cat');
  //const response = await fetch(API_URL as string);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: CatData = await response.json();
  return data;
};