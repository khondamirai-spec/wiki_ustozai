export interface Person {
    id: number;
    name: string;
    company: string;
    image: string;
    quote?: string;
    fullImage?: string;
}

export const getCategoryData = (slug: string) => {
    const categoryNames: Record<string, string> = {
        "biznes": "Biznes",
        "talim": "Ta'lim",
        "sogliqni-saqlash": "Sog'liqni saqlash",
        "yoshlar": "Yoshlar",
        "sanat": "Sanat",
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

    let items: Person[] = [
        { id: 1, name: "Alexander Wright", company: "Vertex Dynamics", image: images[0] },
        { id: 2, name: "Sarah Chen", company: "Quantum Leap", image: images[1] },
        { id: 3, name: "Marcus Johnson", company: "Nebula Systems", image: images[2] },
        { id: 4, name: "David Kim", company: "Future Foundries", image: images[3] },
        { id: 5, name: "Emily Davis", company: "Starlight Corp", image: images[4] },
    ];

    if (slug === "biznes") {
        items[0] = {
            id: 1,
            name: "Zafar Xoshimov",
            company: "Korzinka.uz",
            image: "/BIZNES/Zafar_Xoshimov.jpg",
            quote: "Katta pul emas, to‘g‘ri hisob yutadi!\n\nBiznesni orzu bilan emas, imkoniyat bilan boshlash kerak. O‘zing ko‘tara oladigan riskni tanla. Pul yetmaydigan joyga sakrash — jasorat emas, xato. Kichikdan boshlagan biznes barqaror o‘sadi. Avval omon qolish, keyin kengayish. Shoshilish — eng qimmat xato.",
            fullImage: "/Zafar_Xoshimov/image.png"
        };
    }

    return {
        title: categoryNames[slug] || slug,
        items
    };
};
