// api.js

import config from '../../../config'

export const fetchData = async () => {
    const apiUrl = config.BACKEND_URL + '/book/'; // replace with your actual API endpoint
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        
        // You can add more options here, such as credentials, mode, etc.
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
export const getNotifyList = async (uid) => {
  const apiUrl = `http://localhost:3030/notification/getNotifyList/${uid}`; // replace with your actual API endpoint

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getNotify = async (notification_id) => {
  const apiUrl = `http://localhost:3030/notification/getNotify/${notification_id}`; // replace with your actual API endpoint

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};