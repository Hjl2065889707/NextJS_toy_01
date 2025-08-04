"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./page.module.css";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <p>已登录，欢迎 {session.user.name}</p>
        <button onClick={() => signOut()}>退出登录</button>
      </div>
    );
  }

  return (
    <div>
      <p>未登录</p>
      <button onClick={() => signIn("github")}>使用 GitHub 登录</button>
    </div>
  );
}
