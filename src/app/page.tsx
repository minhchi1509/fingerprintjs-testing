"use client";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const { getData, error } = useVisitorData({
    ignoreCache: true,
    extendedResult: true,
  });

  const verifyFingerprint = async () => {
    const { requestId } = await getData();
    const response = await fetch("/api/verify-fingerprint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestId,
      }),
    });
    const result = await response.json();
    setResult(result);
  };

  useEffect(() => {
    if (!error) {
      verifyFingerprint();
    }
  }, [error]);

  return (
    <div>
      {!result && <p>Verifying....</p>}
      {result && (
        <div>
          <h1>Địa chỉ IP: {result.ipAddress}</h1>
          <h1>Nhà cung cấp mạng: {result.ipAsn}</h1>
          <h1>Sử dụng VPN: {result.vpn ? "Có" : "Không"}</h1>
          <h1>Sử dụng proxy: {result.proxy ? "Có" : "Không"}</h1>
          <h1>
            Sử dụng trình duyệt ở chế độ ẩn danh:{" "}
            {result.incognito ? "Có" : "Không"}
          </h1>
        </div>
      )}
    </div>
  );
}
