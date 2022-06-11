import Head from "next/head";
import Image from "next/image";
import ResponsiveDialog from "../components/dialogTest";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ResponsiveDialog />
    </div>
  );
}
