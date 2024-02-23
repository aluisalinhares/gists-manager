const clientId = process.env.VUE_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET;
const environment = process.env.NODE_ENV;
export async function fetchAccessToken(code) {
  try {
    const url =
      environment === "production"
        ? "https://gists-backend.netlify.app/.netlify/functions/api/accesstoken"
        : "/api/access_token";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const responseData = await response.json();
    return responseData.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}
