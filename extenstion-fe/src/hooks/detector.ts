import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export const useAIContentDetector = (content: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const LOGIN_URL = "https://id.copyleaks.com/v3/account/login/api";

  // type LoginResponse = {
  //   token?: string;
  //   error?: string;
  // };

  // const attemptToGetToken = async (): Promise<LoginResponse> => {
  //   // check if the token exists before getting a new one
  //   const token = localStorage.getItem("token");
  //   const expires = localStorage.getItem("iat");
  //   if (token && expires && new Date(expires) > new Date()) {
  //     // check if token has expired or not
  //     return { token };
  //   } else {
  //     try {
  //       const response = await fetch(LOGIN_URL, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify({
  //           key: import.meta.env.VITE_COPYLEAKS_API_KEY as string,
  //           email: import.meta.env.VITE_COPYLEAKS_EMAIL as string,
  //         }),
  //       });
  //       const result = await response.json();
  //       if (result.error) {
  //         throw new Error(result.error);
  //       }
  //       localStorage.setItem("token", result.access_token);
  //       localStorage.setItem("iat", result[".expires"]);
  //       return { token: result.access_token };
  //     } catch (e: any) {
  //       console.log("Error getting token");
  //       console.error(e);
  //       return { error: e.message };
  //     }
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // TODO: To be removed later
        // const { token, error } = await attemptToGetToken();
        // if (error) throw new Error(error);
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-OAI-API-KEY": import.meta.env.VITE_OAI_API_KEY as string,
            // Authorization: "Bearer " + token, //specific to copyleaks api, will remove one day
          },
          body: JSON.stringify({
            content,
            aiModelVersion: "3.0",
          }),
        });
        const result = await response.json();
        console.log("Result", result);
        if (result.error) {
          throw new Error(result.error);
        } else setData(result);
      } catch (error: any) {
        setError(error.message as string);
      } finally {
        setIsLoading(false);
      }
    };
    if (content.length) fetchData();
  }, [content]);

  return { data, isLoading, error };
};
