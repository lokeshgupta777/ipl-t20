import fetchInstance from "@/lib/api/fetchInstance";
import { transformStandingsData } from "./utils";
import { CACHE_TIME } from "@/shared/constants";

export async function GET() {
  try {
    const response = await fetchInstance(
      `/standings/season/${process.env.SPORTSMONK_IPL2025_ID}`,
      null,
      {
        next: { revalidate: CACHE_TIME.getStandings / 1000 },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const transformedData = transformStandingsData(data?.data);
    return new Response(JSON.stringify(transformedData), {
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
