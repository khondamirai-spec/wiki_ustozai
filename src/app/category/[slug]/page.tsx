import Link from "next/link";
import styles from "./category.module.css";
import { getCategoryData } from "@/lib/data";
/* eslint-disable @next/next/no-img-element */

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const data = getCategoryData(slug);

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    ←
                </Link>
                <h1 className={styles.title}>{data.title}</h1>
            </header>

            <div className={styles.list}>
                {data.items.map((item) => (
                    <Link href={`/category/${slug}/${item.id}`} key={item.id} className={styles.listItem}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.name} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.company}>{item.company}</div>
                        </div>
                        <div className={styles.chevron}>
                            →
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
