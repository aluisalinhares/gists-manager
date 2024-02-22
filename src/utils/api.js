const BASE_URL = "https://api.github.com";
const accessToken = localStorage.getItem("accessToken");
import { useAuthStore } from "@/store";
import { useToast } from "vue-toastification";

async function fetchWithLoadingState(url, options = {}) {
  const toast = useToast();
  try {
    useAuthStore().setLoading(true);
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    useAuthStore().setLoading(false);
    
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    useAuthStore().setLoading(false);
    toast.error(`Operation failed: ${error.message}`, {
      position: "top-right",
      timeout: 3000,
    });
    throw error;
  }
}

export async function fetchUser(accessToken) {
  const url = `/api/user`;
  const options = {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  };
  return await fetchWithLoadingState(url, options);
}

export async function fetchGists(accessToken) {
  const timestamp = new Date().getTime();
  const url = `/api/gists?timestamp=${timestamp}`;
  const options = {
    headers: {
      Authorization: `token ${accessToken}`
    },
  };
  return await fetchWithLoadingState(url, options);
}

export async function fetchGistDetail(id) {
  const timestamp = new Date().getTime();
  const url = `/api/gists/${id}?timestamp=${timestamp}`;
  const options = {
    headers: {
      Authorization: `token ${accessToken}`
    }
  };
  return await fetchWithLoadingState(url, options);
}

export async function editGist(id, updatedFiles){
  const toast = useToast();
  const url = `/api/gists/${id}`;
  const options = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/vnd.github+json',
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      files: updatedFiles
    })
  };
  const data = await fetchWithLoadingState(url, options);
  toast.success("Edit was successful", {
    position: "top-right",
    timeout: 3000,
  });
  return data;
};

export async function deleteGist(id){
  const toast = useToast();
  const url = `/api/gists/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `token ${accessToken}`,
    }
  };
  
  const data = await fetchWithLoadingState(url, options);
  
  toast.success("Delete was successful", {
    position: "top-right",
    timeout: 3000,
  });
  return data;
};