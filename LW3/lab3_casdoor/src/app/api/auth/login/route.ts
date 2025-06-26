import { NextResponse } from "next/server";

const CASDOOR_ENDPOINT = process.env.CASDOOR_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = `${process.env.REDIRECT_URL}/api/auth/callback`;

export async function GET() {
  const url = `${CASDOOR_ENDPOINT}/login/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}`;
  return NextResponse.redirect(url);
}
