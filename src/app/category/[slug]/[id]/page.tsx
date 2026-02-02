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

    // Split quote into title and body for the wikihow style
    const quoteLines = person.quote?.split('\n\n') || [];
    const quoteTitle = quoteLines[0];
    const quoteBody = quoteLines.slice(1).join('\n\n');

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

            <div className={styles.wikiContent}>
                {quoteTitle && (
                    <div className={styles.wikiHeader}>
                        <div className={styles.numberBox}>1</div>
                        <h2 className={styles.wikiTitle}>{quoteTitle}</h2>
                    </div>
                )}

                <div className={styles.imageContainer}>
                    <img
                        src={person.fullImage || person.image}
                        alt={person.name}
                        className={styles.image}
                    />
                </div>

                {quoteBody && (
                    <div className={styles.wikiBody}>
                        <p className={styles.wikiText}>
                            {quoteBody}
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
