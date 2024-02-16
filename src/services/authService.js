// authService.js

// Function to fetch access token from GitHub OAuth endpoint
async function fetchAccessToken(clientId, clientSecret, code) {
    try {
      const response = await fetch('/api/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }
  
      const responseData = await response.json();
      return responseData.access_token;
    } catch (error) {
      throw new Error('Error fetching access token: ' + error.message);
    }
  }
  
  // Export the authService functions
  export default {
    fetchAccessToken
  };
  