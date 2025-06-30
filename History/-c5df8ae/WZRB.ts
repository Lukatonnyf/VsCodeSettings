import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({locale}))

function async(arg0: { locale: any; }): (params: import("next-intl/server").GetRequestConfigParams) => import("next-intl/server").RequestConfig | Promise<import("next-intl/server").RequestConfig> {
    throw new Error("Function not implemented.");
}
