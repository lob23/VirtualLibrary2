export const fetchBookById = async (id) => {
    const apiUrl = `http://localhost:3030/book/getBDetail/${id}`; // Dynamic URL with the book ID
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching book data:', error);
      throw error;
    }
  };

export const fetchAuthorById = async (id) => {
  const apiUrl = `http://localhost:3030/users/getUser/${id}`; 

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
};