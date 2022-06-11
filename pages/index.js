import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const linkStyles = {
  fontSize: "30px",
  color: "blue",
};

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3rem" }}>
      <Link style={linkStyles} href="/admin">
        Admin
      </Link>
      <Link style={linkStyles} href="/login">
        Login
      </Link>
      <Link style={linkStyles} href="/auth">
        Two-Factor Authentication
      </Link>
    </div>
  );
}
