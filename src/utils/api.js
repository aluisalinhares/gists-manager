import { useAuthStore } from "@/store";
import { useToast } from "vue-toastification";
import { devEndpoints, prodEndpoints } from "./endpoints";
const environment = process.env.NODE_ENV;

async function fetchWithLoadingState(url, options = {}) {
  const toast = useToast();
  const authStore = useAuthStore();
  try {
    const accessToken = authStore.accessToken;
    authStore.setLoading(true);
    const requestOptions = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `token ${accessToken}`,
      },
    };
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    authStore.setLoading(false);
    
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    authStore.setLoading(false);
    toast.error(`Operation failed: ${error.message}`, {
      position: "top-right",
      timeout: 3000,
    });
    throw error;
  }
}

export async function fetchUser() {
  const url = environment === 'production' ? prodEndpoints.getUser : devEndpoints.getUser;
  return await fetchWithLoadingState(url, {});
}

export async function fetchGists() {
  const timestamp = new Date().getTime();
  let url = environment === 'production' ? prodEndpoints.getGists : devEndpoints.getGists;
  url = `${url}?timestamp=${timestamp}`;
  return await fetchWithLoadingState(url, {});
}

export async function fetchGistDetail(id) {
  const timestamp = new Date().getTime();
  let url = environment === 'production' ? prodEndpoints.getGists : devEndpoints.getGists;
  url = `${url}/${id}?timestamp=${timestamp}`;
  return await fetchWithLoadingState(url, {});
}

export async function editGist(id, updatedFiles){
  const toast = useToast();
  let url = environment === 'production' ? prodEndpoints.editGists : devEndpoints.getGists;
  url = `${url}/${id}`;
  const options = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/vnd.github+json',
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
  let url = environment === 'production' ? prodEndpoints.getGists : devEndpoints.getGists;
  url = `${url}/${id}`;
  const options = {
    method: 'DELETE'
  };
  const data = await fetchWithLoadingState(url, options);
  toast.success("Delete was successful", {
    position: "top-right",
    timeout: 3000,
  });
  return data;
};