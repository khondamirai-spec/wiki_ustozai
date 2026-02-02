import Link from "next/link";
import { getCategoryData } from "@/lib/data";
import styles from "./person.module.css";
import { notFound } from "next/navigation";

/* eslint-disable @next/next/no-img-element */

export default async function PersonPage({
    params,
}: {
    params: Promise<{ slug: string; id: string }>
}) {
    const { slug, id } = await params;
    const data = getCategoryData(slug);
    const person = data.items.find((p) => p.id === parseInt(id));

    if (!person) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <Link href={`/category/${slug}`} className={styles.backButton}>
                    ←
                </Link>
                <div className={styles.personInfo}>
                    <h1 className={styles.name}>{person.name}</h1>
                    <p className={styles.company}>{person.company}</p>
                </div>
            </header>

            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img
                        src={person.fullImage || person.image}
                        alt={person.name}
                        className={styles.image}
                    />
                </div>

                {person.quote && (
                    <div className={styles.quoteCard}>
                        <div className={styles.quoteHeader}>
                            <span className={styles.quoteNumber}>1</span>
                        </div>
                        <div className={styles.quoteText}>
                            {person.quote}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
