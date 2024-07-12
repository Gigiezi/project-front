'use client';

import Image from "next/image";
import styles from "./page.module.css";
import HitsCover from "./components/HitsCover/hitsCover";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <HitsCover information="15 Songs, 1 hour 15 min" artist="Kendrick Lamar" updated="Updated Yesterday" url="/images/htsimg.png" />
    </main>
  );
}
