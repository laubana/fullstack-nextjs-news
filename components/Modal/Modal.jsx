"use client";

import { useRouter } from "next/navigation";

import styles from "./Modal.module.css";

export default ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.backdrop} onClick={router.back}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
