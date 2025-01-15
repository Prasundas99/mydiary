export const userLoginApi = async (email = "", password = "") => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Login failed");
      }
  
      return await response.json();
    } catch (err) {
      throw new Error(err?.toString() || "An unexpected error occurred");
    }
  };
  

  export const userRegisterApi = async (email = "", password = "") => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Registration failed");
      }
  
      return await response.json();
    } catch (err) {
      throw new Error(err?.toString() || "An unexpected error occurred");
    }
  };
  