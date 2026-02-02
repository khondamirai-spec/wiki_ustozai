import Link from "next/link";
import styles from "./category.module.css";
/* eslint-disable @next/next/no-img-element */

// Dummy data generator based on slug
const getCategoryData = (slug: string) => {
    const categoryNames: Record<string, string> = {
        "biznes": "Biznes",
        "talim": "Ta'lim",
        "sogliqni-saqlash": "Sog'liqni saqlash",
        "yoshlar": "Yoshlar",
        "sanat": "San'at",
        "it": "IT"
    };

    // Common images for demo
    const images = [
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
    ];

    const items = [
        { id: 1, name: "Alexander Wright", company: "Vertex Dynamics", image: images[0] },
        { id: 2, name: "Sarah Chen", company: "Quantum Leap", image: images[1] },
        { id: 3, name: "Marcus Johnson", company: "Nebula Systems", image: images[2] },
        { id: 4, name: "David Kim", company: "Future Foundries", image: images[3] },
        { id: 5, name: "Emily Davis", company: "Starlight Corp", image: images[4] },
    ];

    if (slug === "biznes") {
        items[0] = {
            id: 1,
            name: "Zafar Hoshimov",
            company: "Korzinka.uz",
            image: "/BIZNES/Zafar_Xoshimov.jpg"
        };
    }

    return {
        title: categoryNames[slug] || slug,
        items
    };
};

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
                    <Link href="#" key={item.id} className={styles.listItem}>
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
