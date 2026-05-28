import { useContext, useState } from "react";
import { AuthCard } from "../components/auth/AuthCard";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTextField } from "../components/auth/AuthTextField";
import { SessionContext } from "../SessionProvider";
import { Navigate } from "react-router-dom";
import { authRepository } from "../repositories/authRepository";

const signupHero = {
  title: "写真と言葉で、暮らしの輪郭を残そう。",
  description:
    "20-30代の暮らし好き・創作好き・学び続ける人へ。派手な拡散より、自分らしい記録と穏やかなつながりを大切にします。",
  tags: ["暮らし", "創作", "学び"],
};

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(SessionContext);

  const signup = async () => {
    const user = await authRepository.signup(name, email, password);
    setCurrentUser(user);
  };

  if (currentUser != null) return <Navigate replace to="/" />;
  return (
    <AuthLayout hero={signupHero}>
      <AuthCard
        title="はじめましょう"
        description="あなたの小さな記録を残すためのアカウントを作成します。"
      >
        <div className="space-y-6">
          <AuthTextField
            id="username"
            label="ユーザー名"
            onChange={setName}
            placeholder="ユーザー名"
            type="text"
          />
          <AuthTextField
            id="email"
            label="メールアドレス"
            onChange={setEmail}
            placeholder="メールアドレス"
            type="email"
          />
          <AuthTextField
            id="password"
            label="パスワード"
            onChange={setPassword}
            placeholder="パスワード"
            type="password"
          />
          <button
            className="flex w-full justify-center rounded-full bg-emerald-900 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={name === "" || email === "" || password === ""}
            onClick={signup}
          >
            登録
          </button>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}

export default Signup;
