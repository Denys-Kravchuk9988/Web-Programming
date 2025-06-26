"use client";

import { useState } from "react";

type TUserInfo = {
  id: string;
  displayName: string;
  email: string;
};

export const UserDialog: React.FC<{
  access_token: string;
  id_token: string;
  userInfo: TUserInfo;
}> = ({ access_token, id_token, userInfo }) => {
  const [isUserInformation, setIsUserInformation] = useState<
    TUserInfo | undefined
  >(undefined);

  const getUserInfo = async () => {
    setIsUserInformation(userInfo);
  };

  const logout = async () => {
    const redirectUri = "https://localhost:3000";

    const url = `http://localhost:8000/api/logout?id_token_hint=${id_token}`;

    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    window.location.href = redirectUri;
  };

  return (
    <div>
      {isUserInformation && (
        <div>
          <h1>User Information</h1>
          <p>ID: {isUserInformation.id}</p>
          <p>Email: {isUserInformation.email}</p>
          <p>Display Name: {isUserInformation.displayName}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
      {!isUserInformation && (
        <button onClick={getUserInfo}>Get User Info</button>
      )}
    </div>
  );
};
