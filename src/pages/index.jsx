import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  }, []);
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link href="/about" onClick={handleClick}>
        Click
      </Link>
      <Main page="index" />
    </>
  );
}
