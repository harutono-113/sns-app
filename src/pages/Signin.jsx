import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthCard } from "../components/auth/AuthCard";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTextField } from "../components/auth/AuthTextField";
import { SessionContext } from "../SessionProvider";
import { authRepository } from "../repositories/authRepository";

const signinHero = {
  title: "忙しい日々に、静かな余白をつくるSNS。",
  description:
    "Komorebi は、暮らし・創作・学びの小さな記録を、写真と短い言葉で残したい人のためのコミュニティです。",
  tags: ["日常ログ", "写真と短文", "ゆるい共有"],
};

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(SessionContext);

  const signin = async () => {
    const user = await authRepository.signin(email, password);
    setCurrentUser(user);
  };

  if (currentUser != null) return <Navigate replace to="/" />;

  return (
    <AuthLayout hero={signinHero}>
      <AuthCard
        title="おかえりなさい"
        description="今日の気づきや、誰かの小さな記録を見にいきましょう。"
      >
        <div className="space-y-6">
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
            disabled={email === "" || password === ""}
            onClick={signin}
          >
            ログイン
          </button>
          <div className="mt-4 text-center text-sm">
            登録は
            <Link
              className="font-bold text-emerald-800 underline decoration-emerald-800/30 underline-offset-4"
              to={"/signup"}
            >
              こちら
            </Link>
            から
          </div>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}

export default Signin;
