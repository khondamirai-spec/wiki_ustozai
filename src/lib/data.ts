export interface Step {
    id: number;
    title: string;
    text: string;
    image: string;
}

export interface Person {
    id: number;
    name: string;
    company: string;
    image: string;
    steps?: Step[];
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
            steps: [
                {
                    id: 1,
                    title: "Katta pul emas, to‘g‘ri hisob yutadi!",
                    text: "Biznesni orzu bilan emas, imkoniyat bilan boshlash kerak. O‘zing ko‘tara oladigan riskni tanla. Pul yetmaydigan joyga sakrash — jasorat emas, xato. Kichikdan boshlagan biznes barqaror o‘sadi. Avval omon qolish, keyin kengayish. Shoshilish — eng qimmat xato.",
                    image: "/Zafar_Xoshimov/1.png"
                },
                {
                    id: 2,
                    title: "Birinchi ishlar: biznesga kirish “nimadan boshlandi?”",
                    text: "Ochiq manbalarda Zafar Xoshimovning 90-yillar boshida biznesdagi ilk tajribalari quyidagicha ketma-ketlikda tilga olinadi:\n\n1992–1995: “UzEX” MChJda bosh direktor sifatida faoliyat yuritgan. \n\n1995–1997: “Balton Trading (Asia)”da biznes rivojlantirish bo‘yicha direktor bo‘lgan. \n\nYa’ni u Korzinka’ni “birdaniga” boshlamagan — avval boshqaruv (CEO) tajribasi va savdo/ta’minot zanjiri kabi yo‘nalishlarda amaliy maktabdan o‘tgan.",
                    image: "/Zafar_Xoshimov/2.png"
                },
                {
                    id: 3,
                    title: "Anglesey Food va Korzinka’ning boshlanishi",
                    text: "Ochiq manbalarda Korzinka tarixining boshlanishi 1996 va 1997 yillarga bog‘lanadi:\n\n1996-yil: “Anglesey Food” brendiga asos solingani qayd etiladi. \n\n1997-yil: “Anglesey Food” nomi bilan tarmoqning ilk do‘koni ish boshlagani (keyin bu Korzinka tarixidagi “birinchi do‘kon” sifatida eslanadi). \n\n2019-yildagi intervyuda ham u “tarmoq sifatida 1996-yilda yaratilganimizda…” degan mazmunda gapiradi — ya’ni o‘sha davrni start nuqta sifatida ko‘rsatadi. \n\nBu bosqichda asosiy g‘oya: O‘zbekistonda oziq-ovqat savdosi bozorida minglab “nuqta”lar bo‘lsa-da, supermarket standartlari (tartib, assortiment, narx siyosati, servis, boshqaruv)ni tizimga solish orqali boshqa format yaratish.",
                    image: "/Zafar_Xoshimov/3.png"
                },
                {
                    id: 4,
                    title: "Brendga aylanish: “Korzinka” qanday qurildi?",
                    text: "Ochiq manbalarda tarmoqning rivojlanish zanjiri ancha aniq berilgan:\n\n2005-yil: tarmoq rebrending qilinadi va shu davrdan korzinka.uz brendi ostida faol rivojlana boshlagani yozilgan. \n\n2010-yil: kompaniya yo‘nalishlarni kengaytirib, “Smart” uy do‘konlari formatini alohida bo‘lim sifatida yo‘lga qo‘ygan. \n\n2016-yil: “Korzinka Diskont” kabi formatlar ajratilib, xizmat ko‘rsatish shakllarini diversifikatsiya qilish boshlangan. \n\nBu yerda “sir” juda sodda: bitta do‘kon emas, bitta tizim qurilgan. Tizim bo‘lsa — filiallar ko‘payadi, sifat bir xil turadi, boshqaruv “qo‘lda” emas, standart orqali ishlaydi.",
                    image: "/Zafar_Xoshimov/4.png"
                },
                {
                    id: 5,
                    title: "Katta sakrashlar: investitsiya, xalqaro standartlar, boshqaruv",
                    text: "Korzinka’ning keyingi bosqichlari — bozorda “yirik o‘yinchi”ga aylanish davri:\n\nYTTB/EBRD investitsiyasi (40 mln $): 2019–2020 atrofida Yevropa Tiklanish va Taraqqiyot Banki (EBRD) bilan bog‘liq sarmoya va ulush masalalari yoritilgan. Kun.uz EBRDning minor ulushni $40 mln atrofida olgani va bu Anglesey Food’ni boshqaruvchi tuzilma orqali amalga oshirilganini yozadi. \n\n2021-yilda Spot’da Zafar Xoshimov bu investitsiyani jalb qilish uchun Singapurda “ona kompaniya” tuzishga to‘g‘ri kelganini, sabab — mahalliy huquqiy shakllarda investitsiya jalb qilish murakkabligi ekanini aytadi. \n\nBu bosqich nimani ko‘rsatadi? Korzinka o‘sishi faqat do‘kon soni emas — korporativ boshqaruv, investorlar bilan ishlash, xalqaro moliyaviy standartlar darajasiga chiqish.",
                    image: "/Zafar_Xoshimov/5.png"
                },
                {
                    id: 6,
                    title: "“Qanday qilib shu darajaga erishdi?” — ketma-ket mantiq (xulosa)",
                    text: "Quyidagi bandlar ochiq intervyu va faoliyat bosqichlaridan kelib chiqadigan mantiqiy zanjir (ya’ni faktlarni bog‘lovchi izoh):\n\nMatematika + boshqaruv tajribasi → “hisob-kitobli biznes”\nTa’limi va ilk rahbarlik ishlari uni riskni “his” bilan emas, “model” bilan ko‘rishga o‘rgatgan. \n\n90-yillar retail bozorida “format” topish\nU raqobat yo‘q edi, degan fikrga qo‘shilmaydi: 1996-yilda ham bozorda minglab savdo nuqtalari bo‘lganini aytadi. Demak, o‘sish “bo‘sh jog‘” emas, “yaxshi format” bilan bo‘lgan. \n\nBrendlash va standartlash (2005) → tarmoq sifatida tez o‘sish\nRebrendingdan keyin korzinka.uz brendi ostida tarmoq boshqaruvi kuchaygani manbalarda qayd etiladi. \n\nDiversifikatsiya: bir segmentga yopishib qolmaslik\nSmart (2010) va Diskont (2016) kabi formatlarga bo‘linish — turli auditoriya va turli ehtiyojni qamrab olish strategiyasi. \n\nInvestitsiya va xalqaro tuzilma → “lokal tarmoq”dan “institutsional biznes”ga o‘tish",
                    image: "/Zafar_Xoshimov/6.png"
                }
            ]
        };
    }

    return {
        title: categoryNames[slug] || slug,
        items
    };
};
