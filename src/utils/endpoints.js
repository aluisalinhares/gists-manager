export const devEndpoints = {
  getUser: "/api/user",
  getGists: "/api/gists",
};

export const prodEndpoints = {
  getUser: "https://api.github.com/user",
  getGists: "https://api.github.com/gists",
  editGists: `https://gists-backend.netlify.app/.netlify/functions/api/gists`
};
