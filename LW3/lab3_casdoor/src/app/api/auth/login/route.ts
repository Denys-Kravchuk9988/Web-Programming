import { NextResponse } from "next/server";

const CASDOOR_ENDPOINT = "http://localhost:8000";
const CLIENT_ID = "9ff78b2ca549a0f54088";
const REDIRECT_URI = "https://localhost:3000/api/auth/callback";

export async function GET() {
  const url = `${CASDOOR_ENDPOINT}/login/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}`;
  return NextResponse.redirect(url);
}
