import fetchInstance from "@/lib/api/fetchInstance";
import { transformFixturesData } from "./utils";
import { CACHE_TIME } from "@/shared/constants";

export async function GET() {
  try {
    const response = await fetchInstance(
      `/seasons/${process.env.SPORTSMONK_IPL2025_ID}`,
      {
        include: "fixtures",
      },
      {
        next: { revalidate: CACHE_TIME.getFixtures / 1000 },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const transformedData = transformFixturesData(data?.data?.fixtures);
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
