import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

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
				.catch((error) => {
					if (error instanceof CanceledError) return;
					setError(error.message);
					setIsLoading(false);
				});

			return () => controller.abort();
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
};

export default useData;
