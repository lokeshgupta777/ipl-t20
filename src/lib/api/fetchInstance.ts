import { Params } from "next/dist/server/request/params";

// For fetching Data on server to use nextjs server cache
const fetchInstance = (
  url: string,
  queryParams: Params | null = {},
  options: RequestInit | null = {}
) => {
  const baseUrl = process.env.SPORTSMONK_BASE_URL || "";
  const apiPrefix = process.env.SPORTSMONK_API_PREFIX || "";
  const finalUrl = baseUrl + apiPrefix + url;

  const token = process.env.SPORTSMONK_API_TOKEN;

  const fetchQueryParams = new URLSearchParams({
    api_token: token || "",
    ...queryParams,
  });

  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    next: { revalidate: options?.next?.revalidate || 0 },
  };

  return fetch(`${finalUrl}?${fetchQueryParams?.toString()}`, fetchOptions);
};

export default fetchInstance;
