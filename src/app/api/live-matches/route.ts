import fetchInstance from "@/lib/api/fetchInstance";
import { filterLiveData } from "./utils";
import { CACHE_TIME } from "@/shared/constants";

export async function GET() {
  try {
    const response = await fetchInstance(`/livescores`, null, {
      next: { revalidate: CACHE_TIME.getLiveMatches / 1000 },
    });

    const data = await response.json();
    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: response.status,
        statusText: response.statusText,
      });
    }
    const filteredLiveData = filterLiveData(data?.data);
    return new Response(JSON.stringify(filteredLiveData), {
      status: response.status,
      statusText: response.statusText,
    });
  } catch (err: any) {
    const errorObj = {
      status: "error",
      message: {
        message: err?.message ?? "Somethinh wentwrong",
      },
    };
    return new Response(JSON.stringify(errorObj), {
      status: 500,
    });
  }
}
