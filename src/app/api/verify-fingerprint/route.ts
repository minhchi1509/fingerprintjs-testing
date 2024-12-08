/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {
  FingerprintJsServerApiClient,
  Region,
} from "@fingerprintjs/fingerprintjs-pro-server-api";

export async function POST(request: Request) {
  const body = await request.json();
  const client = new FingerprintJsServerApiClient({
    apiKey: "AvpESiffF21QMQ7JUZB9",
    region: Region.AP,
  });

  // Get visit history of a specific visitor
  const event = await client.getEvent(body.requestId);
  const vpn = event.products.vpn?.data?.result!;
  const proxy = event.products.proxy?.data?.result!;
  const incognito = event.products.incognito?.data?.result!;
  const ipAddress = event.products.ipInfo?.data?.v4?.address!;
  const ipAsn = event.products.ipInfo?.data?.v4?.asn?.name;
  return Response.json({ vpn, proxy, incognito, ipAddress, ipAsn });
}
