import { NextRequest, NextResponse } from "next/server";

const CASDOOR_ENDPOINT = "http://localhost:8000";
const CLIENT_ID = "9ff78b2ca549a0f54088";
const CLIENT_SECRET = "c4b9e199714921a632dbfd23e4d1c1ddd1915eae";
const REDIRECT_URI = "https://localhost:3000/api/auth/callback";
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const code = searchParams.get("code");
  if (!code)
    return NextResponse.json({ error: "No code provided" }, { status: 400 });

  const tokenRes = await fetch(
    `${CASDOOR_ENDPOINT}/api/login/oauth/access_token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    }
  );
  const { access_token, id_token, refresh_token } = (await tokenRes.json()) as {
    access_token: string;
    id_token: string;
    refresh_token: string;
  };

  const response = NextResponse.redirect(`https://localhost:3000/data`);

  response.cookies.set("access_token", access_token, { httpOnly: true });
  response.cookies.set("id_token", id_token, { httpOnly: true });
  response.cookies.set("refresh_token", refresh_token, { httpOnly: true });

  return response;
}
