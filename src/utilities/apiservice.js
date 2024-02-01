import axios from "axios";

const BASE_URL = `https://cmu-cmuproject.koyeb.app/`;

export const signup = async ({ username, email, password }) => {  
  try {
    const resp = await axios.post(
      `${BASE_URL}auth/signup`,
      {
        username: username,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return   resp;
  } catch (error) {
    console.error("Login Error: ", {
      code: error.response.status,
      data: error.response.data.detail,
    });
  }
};

export const login = async ({ username, password }) => {
    try {
        const resp = await axios
            .post(
                `${BASE_URL}auth/login`,
                {
                    username: username,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )        
        return resp;
    }
    catch (error) {
        console.error("Login Error:", error.message);
    }
}