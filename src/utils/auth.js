

const clientId = process.env.VUE_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET;
export async function fetchAccessToken(code) {
    try {
      const response = await fetch('/api/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }
  
      const responseData = await response.json();
      return responseData.access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
      throw error;
    }
  }