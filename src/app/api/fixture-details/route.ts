import fetchInstance from "@/lib/api/fetchInstance";
import { transformFixtureDetailsData } from "./utils";
import { NextRequest } from "next/server";
import { CACHE_TIME } from "@/shared/constants";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fixture_id = searchParams.get("fixture_id");
    const include = searchParams.get("include");

    const response = await fetchInstance(
      `/fixtures/${fixture_id}`,
      { include: include! },
      {
        next: { revalidate: CACHE_TIME.getFixtureDetailsRuns / 1000 },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: response.status,
        statusText: response.statusText,
      });
    }
    const transformedData = transformFixtureDetailsData(data?.data);
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
