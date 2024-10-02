// locationUtils.ts

export const API_KEY = 'c8fff21c71d34b58896e17ab6b26ab3c';
export const IP_GEOLOCATION_API = 'https://api.ipgeolocation.io/ipgeo';

/**
 * Fetch the user's country location based on their IP address.
 * @returns {Promise<string>} Country name
 */
export const getUserCountryFromIP = async (): Promise<string> => {
  try {
    const response = await fetch(`${IP_GEOLOCATION_API}?apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data.country_name)
    return data.country_name; // Return country name
  } catch (error) {
    console.error('Error fetching location:', error);
    throw error;
  }
};
