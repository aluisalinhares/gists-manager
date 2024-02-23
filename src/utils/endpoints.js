export const devEndpoints = {
  accessToken: "/api/access_token",
  getUser: "/api/user",
  getGists: "/api/gists",
};

export const prodEndpoints = {
  accessToken: "https://github.com/login/oauth/access_token",
  getUser: "https://api.github.com/user",
  getGists: "https://api.github.com/gists",
};
