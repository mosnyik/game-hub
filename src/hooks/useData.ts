import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchResponse } from "../types/axios-types";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // get the games from the api
  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
