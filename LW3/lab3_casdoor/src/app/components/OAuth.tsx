"use client";

export const OAuth = () => {
  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <h1>Hello, Next.js!</h1>
      <button
        onClick={handleLogin}
        style={{ marginTop: 20, padding: "10px 20px", fontSize: 16 }}
      >
        Login with Casdoor
      </button>
    </div>
  );
};

export default OAuth;
