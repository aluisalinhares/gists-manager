// src/utils/api.js

const BASE_URL = 'https://api.github.com';
const accessToken = localStorage.getItem('accessToken');

export async function fetchGists() {
  try {
    const response = await fetch(`${BASE_URL}/gists`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Gists');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Gists:', error);
    throw error;
  }
}

export async function fetchGistDetail(id){
  try {
    const response = await fetch(`${BASE_URL}/gists/${id}`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Gists');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Gists:', error);
    throw error;
  }
}