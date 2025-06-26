import { cookies } from "next/headers";
import { UserDialog } from "../components/UserDialog";
import { GoMainButton } from "../components/GoMainButton";

type TUserInfo = {
  id: string;
  displayName: string;
  email: string;
};

export default async function Data() {
  const cookieItems = await cookies();

  const access_token = cookieItems.get("access_token")?.value || "";
  const id_token = cookieItems.get("id_token")?.value || "";
  const refresh_token = cookieItems.get("refresh_token")?.value || "";

  const res = await fetch("http://localhost:8000/api/get-account", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await res.json();

  const userInfo = data.data as TUserInfo;

  if (!userInfo || !access_token || !id_token || !refresh_token) {
    return (
      <div>
        Please authenticate to view this page <GoMainButton />
      </div>
    );
  }

  return (
    <UserDialog
      access_token={access_token}
      id_token={id_token}
      userInfo={userInfo}
    />
  );
}
