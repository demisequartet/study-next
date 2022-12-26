import { Inter } from "@next/font/google";
import { Headline } from "src/components/Headline";
import styles from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline title={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
