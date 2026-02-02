import Link from "next/link";
import styles from "./page.module.css";
/* eslint-disable @next/next/no-img-element */

const categories = [
  {
    id: "biznes",
    name: "Biznes",
    image: "/category_biznes.png",
  },
  {
    id: "talim",
    name: "Ta'lim",
    image: "/category_ta'lim.png",
  },
  {
    id: "sogliqni-saqlash",
    name: "Sog'liqni saqlash",
    image: "/category_health.png",
  },
  {
    id: "yoshlar",
    name: "Yoshlar",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "sanat",
    name: "San'at",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "it",
    name: "IT",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
];


export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Kategoriyalar</h1>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id} className={styles.categoryCard}>
            <img
              src={category.image}
              alt={category.name}
              className={styles.cardBackground}
            />
            <div className={styles.overlay} />
            <span className={styles.categoryName}>{category.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
