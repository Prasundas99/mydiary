export const getUserNotesApi = async (token = "") => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/users/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Failed to fetch notes");
      }
  
      return await response.json();
    } catch (err) {
      throw new Error(err?.toString() || "An unexpected error occurred");
    }
  };
  

  export const createNoteApi = async (token = "", title = "", body = "") => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/users/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ title, body }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Failed to create note");
      }
  
      return await response.json();
    } catch (err) {
      throw new Error(err?.toString() || "An unexpected error occurred");
    }
  };

  
  export const deleteNoteApi = async (token = "", noteId = "") => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + `/users/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Failed to delete note");
      }
  
      return await response.json();
    } catch (err) {
      throw new Error(err?.toString() || "An unexpected error occurred");
    }
  };
  