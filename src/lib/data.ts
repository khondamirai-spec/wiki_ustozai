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
        "sport": "Sport",
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
            image: "/Zafar_Xoshimov/photo_2026-04-24_15-37-25.jpg",
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

        items[1] = {
            id: 2,
            name: "Murod Nazarov",
            company: "Murad Buildings",
            image: "/Murod Nazarov/photo_2026-04-21_15-57-39.jpg",
            steps: [
                {
                    id: 1,
                    title: "Innovatsiya va qurilish: Murod Nazarovning strategik yo‘li",
                    text: "Murod Nazarov O‘zbekistonning texnologiya va qurilish sohasidagi yetakchi tadbirkorlaridan biri hisoblanadi. Uning biznesdagi sayohati innovatsion g‘oyalari va xalqaro yondashuvlari bilan ajralib turadi.\n\nTug‘ilgan sana: 1981-yil 9-noyabr\nTa’lim: Toshkent davlat texnika universiteti va AQShda biznes magistraturasi.",
                    image: "/Murod Nazarov/photo_2026-04-21_15-57-39.jpg"
                },
                {
                    id: 2,
                    title: "Dastlabki Faoliyat: IT va qurilish sintezi",
                    text: "Murod Nazarovning faoliyati 2000-yillarda boshlangan. U bir nechta IT va qurilish loyihalarida qatnashib, tajriba to‘pladi. 2007-yilda u \"Murad Buildings\" kompaniyasiga asos soldi. Asosiy g‘oyasi: Innovatsion qurilish va texnologiya yechimlarini joriy qilish edi.",
                    image: "/Murod Nazarov/photo_2026-04-21_15-57-56.jpg"
                },
                {
                    id: 3,
                    title: "Katta Muvaffaqiyatlar: Toshkent City va xalqaro miqyos",
                    text: "2015: Yirik qurilish loyihalarining boshqaruvi boshlandi.\n2018: Kompaniya xalqaro investorlar tomonidan tan olindi va global miqyosga chiqdi.\n2021: Toshkent City loyihasini muvaffaqiyatli amalga oshirdi, bu sanoatni yangi bosqichga olib chiqdi.",
                    image: "/Murod Nazarov/photo_2026-04-21_15-58-04.jpg"
                },
                {
                    id: 4,
                    title: "Liderlik va Vizyon: Sifat va jamoa integratsiyasi",
                    text: "Murod Nazarov zamonaviy boshqaruv va sifatli qurilish strategiyalariga katta ahamiyat beradi. Uning boshqaruvi ostida \"Murad Buildings\" samarali va tez o‘sishni ko‘rsatdi. U har doim jamoasini yangi yechimlarni izlashga undaydi.",
                    image: "/Murod Nazarov/photo_2026-04-21_15-58-18.jpg"
                },
                {
                    id: 5,
                    title: "Qanday qilib bu darajaga erishdi? — Mantiqiy tahlil",
                    text: "1. Ilmiy va Kasbiy Ta’lim: Bilim va xalqaro tajriba.\n2. Dastlabki O‘rganish: IT va qurilishdagi amaliy maktab.\n3. Innovatsiya: Yangi texnologiyalarni qo‘llash.\n4. Bozorni o‘rganish: Raqobat va ehtiyojlarni chuqur tahlil qilish.\n5. Jamoaviy Boshqaruv: Yetakchilik mahorati.",
                    image: "/Murod Nazarov/photo_2026-04-21_15-58-40.jpg"
                }
            ]
        };

        items[2] = {
            id: 3,
            name: "Jahongir Ortiqxo'jayev",
            company: "Tadbirkor, Akfa va Artel asoschisi",
            image: "/Jahongir Ortixo‘jayev/photo_2026-04-25_11-46-08.jpg",
            steps: [
                {
                    id: 1,
                    title: "1.Qanday qilib yirik biznes imperiya va zamonaviy infratuzilma barpo etish mumkin? (Jahongir Ortixo‘jayev tajribasi)",
                    text: "Jahongir Ortixo‘jayev — O‘zbekistonning eng taniqli tadbirkorlaridan biri, Akfa va Artel brendlari asoschisi, shuningdek, Toshkent shahrining sobiq hokimi. Uning faoliyati masshtabli loyihalar, ishlab chiqarishni mahalliylashtirish va \"agressiv\" o‘sish strategiyasi bilan ajralib turadi.\n\nJahongir Ortixo‘jayev 1975-yil 2-yanvarda Toshkentda tug‘ilgan. Toshkent davlat iqtisodiyot universitetini tamomlagan. Uning muvaffaqiyati savdo emas, aynan ishlab chiqarishdan boshlangan.\n\nBo‘shliqni to‘ldirish: 2000-yillar boshida O‘zbekiston bozorida alyuminiy profillarga bo‘lgan talabni sezib, Akfa kompaniyasiga asos solgan.\n\nBrend yaratish: Shunchaki mahsulot sotish emas, balki xalq tan oladigan brend shakllantirishga e’tibor qaratgan.",
                    image: "/Jahongir Ortixo‘jayev/photo_2026-04-25_11-46-08.jpg"
                },
                {
                    id: 2,
                    title: "2.Diversifikatsiya va \"Artel\" fenomeni",
                    text: "Maqsad faqat deraza emas, balki har bir xonadonga kirib borish edi.\n\nMahalliylashtirish: Maishiy texnika bozorini xorijiy brendlar egallab turgan bir paytda, mahalliy ishlab chiqarishni yo‘lga qo‘ydi.\n\nHamkorlik: Samsung kabi gigantlar bilan hamkorlik qilib, texnologik tajriba o‘rgandi va uni o‘z brendiga tatbiq etdi.                                                           Klaster tizimi: Ortixo‘jayev biznesda \"zanjir\" uslubidan foydalanadi. Masalan, qurilish bozoriga kirganda, u nafaqat rom, balki qurilish qorishmalari, panellar, radiatorlar va hatto liftlar ishlab chiqarishni ham yo‘lga qo‘ydi (Discovery, Royal kabi brendlar).\n\nMedia va Marketing: Brendlarini targ‘ib qilish uchun u mamlakatdagi eng yirik reklama agentliklaridan biri — JMP (Jahongir Marketing Project) ga asos soldi. Bu unga bozorda axborot ustunligini berdi.",
                    image: "/Jahongir Ortixo‘jayev/photo_2026-04-25_11-46-16.jpg"
                },
                {
                    id: 3,
                    title: "3. Davlat boshqaruvi va \"Toshkent City\" epoxasi",
                    text: "2018-yilda Ortixo‘jayev kutilmaganda Toshkent shahri hokimi etib tayinlandi. Bu davr shahar qiyofasining keskin o‘zgarishi bilan esda qoldi.\nDavlat-xususiy sheriklik: U hokim bo‘lgan davrda Toshkentda parklarni boshqaruvga berish va ularni modernizatsiya qilish trendini boshlab berdi (G‘afur G‘ulom, Milliy bog‘ loyihalari).\nTadbirkorlik mentaliteti boshqaruvda: Hokimiyatga biznes tezkorligini olib kirdi. Qarorlar qabul qilish va loyihalarni amalga oshirish sur’ati keskin oshdi.\n\nUrbanizatsiya: Toshkent City kutilganidan tezroq qurildi. Bu loyiha uning \"qiyin vazifalarni uddalash\" qobiliyatini ko‘rsatdi.                                    \n\nDigital Toshkent: Shahar boshqaruviga raqamli texnologiyalarni (Halk Nazorati, Situatsion markaz) olib kirdi. Uning maqsadi shaharni \"kompaniya\" kabi samarali boshqarish edi.",
                    image: "/Jahongir Ortixo‘jayev/photo_2026-04-25_11-46-27.jpg"
                },
                {
                    id: 4,
                    title: "4.Inqirozlar va chidamlilik (Crisis Management)",
                    text: "Har qanday yirik shaxs kabi, u ham tanqidlar va siyosiy inqirozlarga duch keldi. 2023-yilgi energetik inqirozdan so‘ng hokimlikdan ketishi uning faoliyatidagi eng og‘ir burilish nuqtasi bo‘ldi.\n\nXulosa chiqarish: Lavozimdan ketgach, u yana to‘liq biznesga qaytdi va e’tiborini yangi loyihalarga (Magic City, oziq-ovqat sanoati va h.k.) qaratdi.\n\nMoslashuvchanlik: Siyosatdan biznesga qaytishda pauza qilmadi, aksincha, yangi masshtablarni egallashda davom etdi.",
                    image: "/Jahongir Ortixo‘jayev/photo_2026-04-25_11-46-35.jpg"
                },
                {
                    id: 5,
                    title: "5.\"Muvaffaqiyat formulasi\" — Jahongir Ortixo‘jayevdan maslahatlar",
                    text: "Uning turli intervyulari va chiqishlaridan kelib chiqadigan asosiy tamoyillar:\n\nVaqtni qadrlash: \"Men uchun eng qimmat narsa — vaqt.\" U har bir soniyadan maksimal foyda olishga intiladi.\n\nKatta o‘ylash: Agar loyiha boshlasangiz, u shahar yoki mamlakat miqyosida aks sado berishi kerak.\n\nJamoaga ishonch: U o‘z atrofida sadoqatli va professional jamoani jipslashtira olgan.",
                    image: "/Jahongir Ortixo‘jayev/photo_2026-04-25_11-46-42.jpg"
                }
            ]
        };
    }

    if (slug === "sanat") {
        items = [
            {
                id: 1,
                name: "Yulduz Usmonova",
                company: "O'zbekiston xalq artisti",
                image: "/Yulduz Usmonova/photo_2026-04-17_18-24-11.jpg",
                steps: [
                    {
                        id: 1,
                        title: "Iste’dodning shakllanishi: \"Marg‘ilonlik qizcha\"",
                        text: "Yulduz Usmonova 1963-yil 12-dekabrda Marg‘ilon shahrida, oddiy ishchi oilasida dunyoga kelgan. Uning san’atga bo‘lgan yo‘li qiyinchiliklar va o‘zligini isbotlashdan boshlangan.\n\nIlk qadamlar: Toshkent davlat konservatoriyasida ashula va raqs yo‘nalishida tahsil olgan (Gavhar Rahimova maktabini o‘tagan).\n\nMantiq: Katta sahnaga chiqish uchun nafaqat ovoz, balki xalqona an’analarni akademik bilim bilan birlashtirish zarur.",
                        image: "/Yulduz Usmonova/photo_2026-04-17_18-24-11.jpg"
                    },
                    {
                        id: 2,
                        title: "Sahnadagi inqilob: \"Boshqacha\" uslubning yaratilishi",
                        text: "90-yillar boshida Yulduz Usmonova o‘zbek estradasiga mutlaqo yangi \"energiya\" olib kirdi. U milliy doira kuylarini zamonaviy estrada ritmlari bilan uyg‘unlashtirib, an’anaviy \"statik\" ijrodan jonli va dinamik ijroga o‘tdi.\n\nDard va haqiqat: Uning qo‘shiqlarida ijtimoiy muammolar, ayollar taqdiri va vatanparvarlik mavzulari birinchi planga chiqdi.\n\nXulosa: San’atkor faqat ko‘ngilochar emas, balki xalqning dardi va quvonchini kuylaydigan ovoz bo‘lishi kerak.",
                        image: "/Yulduz Usmonova/photo_2026-04-17_18-24-23.jpg"
                    },
                    {
                        id: 3,
                        title: "Xalqaro miqyosdagi e’tirof va muhojirlik sinovlari",
                        text: "Yulduz Usmonova ijodi O‘zbekiston chegaralaridan chiqib, Turkiya, Yevropa va AQSHda ham e’tirof etilgan. Uning turli yillarda xorijda yashab ijod qilishi uning dunyoqarashini yanada kengaytirdi.\n\nTurkiya bosqichi: Turkiya shou-biznesida ham o‘z o‘rnini topib, bir qancha hit albomlar yaratdi.\n\nXalqaro mukofotlar: \"O‘rta Osiyo san’at malikasi\" sifatida e’tirof etilishi va ko‘plab xalqaro festivallar g‘olibi bo‘lishi.",
                        image: "/Yulduz Usmonova/photo_2026-04-17_18-24-34.jpg"
                    },
                    {
                        id: 4,
                        title: "\"Primadonna\"ning qaytishi: Muxlislar sevgisi",
                        text: "Yulduz Usmonovaning san’atga qaytishi va yana qisqa vaqt ichida yetakchilikni qo‘lga olishi uning \"fenomen\" ekanligini isbotladi. Uning konsertlari hamon eng ko‘p odam yig‘adigan va eng shov-shuvli tadbirlar bo‘lib qolmoqda.\n\nEksperimentdan qo‘rqmaslik: U hamon yosh ijodkorlar bilan duetlar aytadi, zamonaviy trendlarga moslashadi.\n\nMehnatsevarlik: Har yili yangi albom va yangi dastur taqdim etish — bu uning asosiy qoidasi.",
                        image: "/Yulduz Usmonova/photo_2026-04-17_18-24-41.jpg"
                    },
                    {
                        id: 5,
                        title: "Yulduz Usmonova muvaffaqiyatining mantiqiy siri (Xulosa)",
                        text: "Nega u yillar o‘tsa ham doim e’tiborda? Quyidagi mantiqiy zanjir bunga javob bo‘ladi:\n\nSamimiylik: U nima o‘ylasa, shuni kuylaydi. Muxlislar uning rostgo‘yligini qadrlaydi.\n\nXalqchillik: Uning qo‘shiqlari \"bozor\"dan tortib \"oliy majlis\"gacha birdek tushunarli va yaqin.\n\nTinim bilmas ijod: U dam olishni emas, yangi qo‘shiq yaratishni afzal ko‘radi.\n\nXarizma: Sahna madaniyati va auditoriyani o‘ziga bo‘ysundirish qobiliyati (Live energy).\n\nMilliy ruh: Qaysi tilda yoki janrda kuylamasin, uning ijrosida o‘zbekona ruh doim sezilib turadi.",
                        image: "/Yulduz Usmonova/photo_2026-04-17_18-24-48.jpg"
                    }
                ]
            },
            {
                id: 2,
                name: "Sevara Nazarxon",
                company: "O'zbekiston xalq artisti",
                image: "/Sevara Nazarkhan/photo_2026-04-18_14-48-18.jpg",
                steps: [
                    {
                        id: 1,
                        title: "Sevara Nazarxon: Qanday qilib milliy musiqani jahon darajasiga olib chiqish mumkin?",
                        text: "Sevara Nazarxon — nafaqat O‘zbekiston, balki jahon musiqa maydonida o‘ziga xos ovoz va uslubga ega san’atkor. U milliy maqom va folklorni zamonaviy yo‘nalishlar bilan uyg‘unlashtirib, o‘zbek musiqasining yangi qirralarini ochgan ijodkordir",
                        image: "/Sevara Nazarkhan/photo_2026-04-18_14-48-18.jpg"
                    },
                    {
                        id: 2,
                        title: "Iste’dodning ildizlari va akademik poydevor",
                        text: "Sevara Nazarxon 1976-yilda Andijon viloyatida san’atkorlar oilasida dunyoga kelgan. Uning musiqiy ta’limi va oilaviy muhiti kelajakdagi muvaffaqiyatining asosi bo‘ldi.\n\nTa’lim: O‘zbekiston davlat konservatoriyasida an’anaviy qo‘shiqchilik (maqom) yo‘nalishida tahsil olgan.\n\nMantiq: Professional muvaffaqiyat uchun tug‘ma iste’dodning o‘zi yetarli emas, akademik bilim va o‘z ustida tinimsiz ishlash zarur.",
                        image: "/Sevara Nazarkhan/photo_2026-04-18_14-48-27.jpg"
                    },
                    {
                        id: 3,
                        title: "\"Sideris\" guruhidan jahon sahnasigacha",
                        text: "Sevara faoliyatini yoshlar orasida mashhur bo‘lgan \"Sideris\" guruhida boshlagan bo‘lsa-da, tez orada yakkaxon ijodga o‘tdi. Uning burilish nuqtasi mashhur prodyuser Piter Gabriel (Peter Gabriel) bilan uchrashishi bo‘ldi.\n\nReal World Records: 2000-yillar boshida u Piter Gabriel bilan shartnoma imzoladi va jahon bo‘ylab gastrol safarlarini boshladi.\n\nXulosa: Mahalliy doiradan chiqish uchun milliy o‘zlikni yo‘qotmagan holda universal musiqiy tilni topish kerak.",
                        image: "/Sevara Nazarkhan/photo_2026-04-18_14-48-37.jpg"
                    },
                    {
                        id: 4,
                        title: "\"Yol bo‘lsin\" va xalqaro e’tirof",
                        text: "2003-yilda chiqarilgan \"Yol bo‘lsin\" albomi Sevaraga jahon miqyosida shon-shuhrat keltirdi. BBC Radio 3 tomonidan \"Best Asian Artist\" (Osiyoning eng yaxshi artisti) mukofotiga loyiq ko‘rilgani uning yuksak darajasini tasdiqladi.\n\nEksperiment: Albomda o‘zbek xalq kuylari elektron musiqa elementlari bilan mahoratli tarzda birlashtirilgan.\n\nNatija: O‘zbek tili va milliy cholg‘ulari jahonning nufuzli musiqa festivallarida jarangladi.",
                        image: "/Sevara Nazarkhan/photo_2026-04-18_14-48-47.jpg"
                    },
                    {
                        id: 5,
                        title: "Sevara Nazarxon fenomenining 5 ta ustuni (Xulosa)",
                        text: "Quyidagi mantiqiy zanjir Sevaraning qanday qilib ushbu darajaga erishganini tushuntiradi:\n\nIldizlarga sodiqlik: U har qanday zamonaviy yo‘nalishda ham o‘zbekona \"nafas\"ni saqlab qoladi.\n\nJasorat: Klassik maqomni zamonaviy aranjirovkalar bilan boyitishdan qo‘rqmadi.\n\nIntellektual yondashuv: Uning qo‘shiqlarida har doim chuqur falsafiy va badiiy ma’noga ega.\n\nXalqaro hamkorlik: Jahon miqyosidagi musiqachilar bilan ishlash tajribasi uning dunyoqarashini kengaytirdi.\n\nSamimiylik: Sahnada u dabdabaga emas, balki tinglovchi bilan ruhiy muloqotga e’tibor qaratadi.",
                        image: "/Sevara Nazarkhan/photo_2026-04-18_14-48-53.jpg"
                    }
                ]
            },
            {
                id: 3,
                name: "Jahongir Foziljonov",
                company: "O'zbekistonda xizmat ko'rsatgan artist",
                image: "/Jahongir Foziljonov/photo_2026-04-20_18-19-27.jpg",
                steps: [
                    {
                        id: 1,
                        title: "Jahongir Foziljonov: Qanday qilib shou-biznesda \"brend\" yaratish mumkin?",
                        text: "Jahongir Foziljonov — O‘zbekiston shou-biznesida o‘ziga xos yo‘nalish yaratgan, \"Bojalar\" guruhi orqali millionlab muxlislarni birlashtirgan ijodkor. Uning faoliyati nafaqat qo‘shiqchilik, balki aktyorlik va prodyuserlikni ham qamrab oladi.",
                        image: "/Jahongir Foziljonov/photo_2026-04-20_18-19-27.jpg"
                    },
                    {
                        id: 2,
                        title: "Iste’dodning shakllanishi: San’atga ilk qadamlar",
                        text: "Jahongir Foziljonov 1970-yillarning oxirida Toshkent shahrida tug‘ilgan. Uning san’atga bo‘lgan qiziqishi yoshligidanoq namoyon bo‘lgan bo‘lsa-da, u o‘zining professional yo‘lini qat’iy maqsadlar asosida qurgan.\n\nTa’lim: San’at va madaniyat institutida o‘qish davrida u shou-biznesning ichki mexanizmlarini o‘rgandi.\n\nMantiq: San’atkor faqat ijrochi emas, balki tomoshabin ruhiyatini his qiluvchi psixolog ham bo‘lishi kerak.",
                        image: "/Jahongir Foziljonov/photo_2026-04-20_18-42-31.jpg"
                    },
                    {
                        id: 3,
                        title: "\"Bojalar\" fenomenining tug‘ilishi",
                        text: "2000-yillar boshida Jahongir Foziljonov va marhum Mo‘min Oripov tomonidan asos solingan \"Bojalar\" guruhi o‘zbek estradasida inqilob qildi. Ular an’anaviy qo‘shiqlardan voz kechib, hayotiy, biroz hajviy va xalqchil uslubni tanlashdi.\n\nSoddalik va hazil: Odamlar kundalik hayotda gapiradigan tilda qo‘shiq aytish — muvaffaqiyat kaliti bo‘ldi.\n\nDo‘stlik asosi: Guruhning kuchi ikki ijodkorning bir-birini mukammal tushunishida edi.",
                        image: "/Jahongir Foziljonov/photo_2026-04-20_18-19-36.jpg"
                    },
                    {
                        id: 4,
                        title: "Sinov va matonat: Faoliyatning yangi bosqichi",
                        text: "Mo‘min Oripovning fojiali vafotidan so‘ng, Jahongir Foziljonov og‘ir ruhiy holatni boshidan kechirdi. Biroq, u muxlislari va do‘stining xotirasi uchun ijoddan to‘xtamaslikka qaror qildi.\n\nYakkaxon ijod: U \"Bojalar\" nomini saqlab qolgan holda, brendni yanada kengaytirdi.\n\nXulosa: Haqiqiy professional qiyinchilikda to‘xtab qolmaydi, balki og‘riqni ijodiy energiyaga aylantiradi.",
                        image: "/Jahongir Foziljonov/photo_2026-04-20_18-19-52.jpg"
                    },
                    {
                        id: 5,
                        title: "Aktyorlik va Kino: Ekranlardagi muvaffaqiyat",
                        text: "Jahongir Foziljonov nafaqat qo‘shiqlari, balki \"Boyvachcha\", \"Nortoy\", \"Xavfli burilish\" kabi filmlardagi rollari bilan ham tanildi. Uning qahramonlari har doim xushchaqchaq va har qanday vaziyatdan chiqib ketadigan shaxslardir.\n\nKomediyaning kuchi: U o‘zining aktyorlik mahorati orqali o‘zbek kinosida \"yengil va quvnoq\" janrni mustahkamladi.\n\nBrend kengayishi: Kino — qo‘shiqchi uchun yangi auditoriyani zabt etish vositasi bo‘ldi.",
                        image: "/Jahongir Foziljonov/photo_2026-04-20_18-20-05.jpg"
                    },
                    {
                        id: 6,
                        title: "\"Qanday qilib shu darajaga erishdi?\" — Mantiqiy zanjir",
                        text: "Jahongir Foziljonov muvaffaqiyatini quyidagi omillar bilan izohlash mumkin:\n\nXalqchillik: U elitardan ko‘ra ko‘proq \"mahalladosh\" obrazini tanladi.\n\nMultimediadorlik: Bir vaqtning o‘zida qo‘shiq aytish, filmda o‘ynash va prodyuserlik qilish orqali bozorda o‘z o‘rnini saqlab qoldi.\n\nModernizatsiya: U hamisha trendlarni kuzatadi va kliplarida yangi texnologiyalardan foydalanadi.",
                        image: "/Jahongir Foziljonov/photo_2026-04-20_18-20-12.jpg"
                    }
                ]
            },
            {
                id: 4,
                name: "Alisher Uzoqov",
                company: "O'zbek kino va teatr aktyori",
                image: "/Alisher Uzoqov/photo_2026-04-20_19-08-35.jpg",
                steps: [
                    {
                        id: 1,
                        title: "Alisher Uzoqov: Qanday qilib O’zbek kinosining eng talabgir aktyoriga aylandi?",
                        text: "Alisher Uzoqov O’zbekiston kino sanoatida bir necha avlod tomoshabinlari orasida mashhurligini saqlab kelayotgan aktyorlardan biridir. Uning muvaffaqiyati tasodif emas — bu obraz tanlash, auditoriyani tushunish va bozor psixologiyasini his qilish natijasidir.\n\nTug‘ilgan sana: 1984-yil 25-avgust\nTa’lim: O‘zbekiston davlat san’at va madaniyat institutida aktyorlik yo‘nalishida tahsil olgan.",
                        image: "/Alisher Uzoqov/photo_2026-04-20_19-08-35.jpg"
                    },
                    {
                        id: 2,
                        title: "Birinchi rollar: “epizod”dan “asosiy qahramon”gacha",
                        text: "2000-yillar boshida Alisher Uzoqov ikkinchi darajali rollar va yosh qahramon obrazlari orqali tajriba to‘pladi. U tez mashhur bo‘lishni emas, barqaror o‘sishni tanladi.\n\nQatnashgan mashhur filmlari: ”Tundan tongacha”, “Sevgi farishtasi”, “Mening akam bo’ydoq”, “Telba”, ”Janob hechkim”, “Islomxo’ja“ va boshqalar.",
                        image: "/Alisher Uzoqov/photo_2026-04-20_19-08-49.jpg"
                    },
                    {
                        id: 3,
                        title: "Brendga aylanish: aktyor emas, obraz ramzi",
                        text: "U shunchaki aktyor bo‘lib qolmadi — u muayyan obrazning ramziga aylandi. Uning ekrandagi qiyofasi: Halol, Sadoqatli, Kuchli xarakterli va Oilaparvar.\n\nFormulasi: Obraz barqarorligi → Tomoshabin ishonchi → Kassa muvaffaqiyati → Prodyuser ishonchi.",
                        image: "/Alisher Uzoqov/photo_2026-04-20_19-09-00.jpg"
                    },
                    {
                        id: 4,
                        title: "Kino sanoatidagi strategik o‘rin",
                        text: "Alisher Uzoqovning ustunliklari: Kamera oldida tabiiylik, dramatik sahnalarda emotsional nazorat va tijoriy muvaffaqiyat keltiradigan rollarni tanlay olish.\n\nU prodyuserlar uchun \"kafolatli aktyor\" maqomiga chiqdi: Auditoriya jalb qiluvchi yuz va riskni kamaytiruvchi tanlov.",
                        image: "/Alisher Uzoqov/photo_2026-04-20_19-09-12.jpg"
                    },
                    {
                        id: 5,
                        title: "Rollar evolyutsiyasi: yosh qahramondan yetuk obrazlargacha",
                        text: "Vaqt o‘tishi bilan uning rollari ham o‘zgardi. 20–30 yoshlarda romantik yigit bo'lsa, 35 yoshdan keyin mas’uliyatli, hayotiy qarorlar og‘irligini ko‘taruvchi va ichki konfliktga ega xarakterlarni gavdalantira boshladi.",
                        image: "/Alisher Uzoqov/photo_2026-04-20_19-09-22.jpg"
                    },
                    {
                        id: 6,
                        title: "“Qanday qilib shu darajaga erishdi?” — mantiqiy zanjir",
                        text: "1. Professional ta’lim → Sahna intizomi\n2. Kichik rollar → Tajriba maktabi\n3. Obraz tipini aniqlash → Auditoriya identifikatsiyasi\n4. Tijoriy formatni tushunish → Kassa barqarorligi\n5. Imidj nazorati → Brend mustahkamligi\n6. Moslashuvchanlik → Uzoq muddatli talab\n\nXulosa: Intizom + Strategiya + Auditoriya psixologiyasi.",
                        image: "/Alisher Uzoqov/photo_2026-04-20_19-09-31.jpg"
                    }
                ]
            },
            {
                id: 5,
                name: "Ozodbek Nazarbekov",
                company: "O'zbekiston madaniyat vaziri",
                image: "/Ozodbek Nazarqulov/photo_2026-04-21_14-17-24.jpg",
                steps: [
                    {
                        id: 1,
                        title: "1. Qanday qilib eng muvaffaqiyatli madaniy brendni qurish mumkin?",
                        text: "Ozodbek Nazarbekov — O‘zbekistondagi zamonaviy san’at va madaniyat boshqaruvini yangi bosqichga olib chiqqan shaxslardan biri. U nafaqat xonanda, balki musiqiy jarayonlarni tizimlashtira olgan ijodkor va strategik rahbar sifatida tanilgan.\n\nTug‘ilgan vaqti: 1974-yil 14-mart, Andijon viloyati.\nTa’limi: O‘zbekiston davlat san’at va madaniyat institutini tamomlagan.",
                        image: "/Ozodbek Nazarqulov/photo_2026-04-21_14-17-24.jpg"
                    },
                    {
                        id: 2,
                        title: "2. Birinchi ishlar: San'atga kirish \"ustoz maktabi\"dan boshlandi",
                        text: "1994–2002-yillar: Ustoz san'atkor Muhriddin Xoliqov rahbarligida ijodiy faoliyatini boshlagan. Bu davr u uchun \"bozor ehtiyoji\" va \"sifat\" muvozanatini o'rganish davri bo'ldi.\n\nMenejment darsi: Ustozining vafotidan so'ng, u butun bir ijodiy jamoani mustaqil boshqarish mas'uliyatini zimmasiga oldi.",
                        image: "/Ozodbek Nazarqulov/photo_2026-04-21_14-17-33.jpg"
                    },
                    {
                        id: 3,
                        title: "3. \"Ozod Shous\" va konsert formatidagi inqilob",
                        text: "Tizimli yondashuv: Uning har bir konserti yaxlit ssenariy va texnologik yechimlar uyg'unligi edi.\n\nMarafonga aylangan konsertlar: Uning 15-20 kunlab davom etadigan konsert marafonlari o'zbek shou-biznesida \"yuqori quvvatli tizim\" (high-performance system) mavjudligini isbotladi.",
                        image: "/Ozodbek Nazarqulov/photo_2026-04-21_14-17-54.jpg"
                    },
                    {
                        id: 4,
                        title: "4. Diversifikatsiya: Ijoddan davlat boshqaruviga",
                        text: "Ma’muriy boshqaruv: Madaniyat vaziri lavozimidagi faoliyati — bu individual brenddan tizimli davlat boshqaruviga o‘tish bosqichidir.\n\nInstitutsional islohotlar: Milliy maqom markazi va baxshichilik san'atini rivojlantirish kabi loyihalar orqali madaniyatni \"tizim\" darajasiga olib chiqdi.",
                        image: "/Ozodbek Nazarqulov/photo_2026-04-21_14-18-03.jpg"
                    },
                    {
                        id: 5,
                        title: "5. Muvaffaqiyatning mantiqiy zanjiri (Xulosa)",
                        text: "1. Ildiz + Akademik bilim: Ustoz maktabi va oliy ta’lim sintezi.\n2. Format topish: Milliy ohanglarni zamonaviy talablar asosida taqdim etish.\n3. Standartlashtirish: Ijodiy jarayonlarni yuqori sifatli \"mahsulot\" darajasiga ko'tarish.\n4. Institutsional darajaga o‘tish: Shaxsiy muvaffaqiyatni soha tizimini rivojlantirishga yo'naltirish.",
                        image: "/Ozodbek Nazarqulov/photo_2026-04-21_14-18-10.jpg"
                    }
                ]
            }
        ];
    }

    if (slug === "sport") {
        items = [
            {
                id: 1,
                name: "Javohir Sindarov",
                company: "Xalqaro grossmeyster",
                image: "/Javohir Sindarov/photo_2026-04-25_17-43-00.jpg",
                steps: [
                    {
                        id: 1,
                        title: "1. Qanday qilib shaxmatda dunyo cho‘qqisiga chiqish mumkin? (Javohir Sindarov tajribasi)",
                        text: "Javohir Sindarov — o‘zbek shaxmat maktabining yorqin vakili, tarixdagi eng yosh grossmeysterlardan biri va Butunjahon shaxmat olimpiadasi chempioni. Uning yo‘li — erta boshlangan mehnat va temir intizom namunasidir.\n\nErta start va poydevor qo‘yish:\n\nJavohir 2005-yil 8-dekabrda Toshkentda tug‘ilgan. Uning shaxmatga kirib kelishi tasodif emas, balki oilaviy muhit natijasidir.\n\n4 yoshda boshlangan sayohat: U shaxmat donalarini surishni juda erta o‘rgangan. Bu unga \"shaxmat tilida\" ona tilidek gapirish imkonini bergan.\n\nBirinchi murabbiy: Bobosi Komil Sindarov uning ilk ustozi va asosiy motivatori bo‘lgan. Bu bosqichda asosiysi — bolada o‘yinga bo‘lgan chinakam ishtiyoqni uyg‘otishdir.",
                        image: "/Javohir Sindarov/photo_2026-04-25_17-43-00.jpg"
                    },
                    {
                        id: 2,
                        title: "2. Rekordlar sari intilish (Grossmeysterlik sari)",
                        text: "Javohir shaxmat tarixida o‘z ismini oltin harflar bilan yozishni maqsad qilgan edi.\n\nTarixiy natija: 2018-yil oktyabr oyida, 12 yoshu 10 oyligida grossmeysterlik unvonini qo‘lga kiritdi. O‘sha paytda u bu ko‘rsatkich bo‘yicha dunyoda 2-o‘rinda edi.                                                                                                                                                                                                               Karyera cho‘qqilari: U 13 yoshga yetmasdan grossmeyster bo‘lish orqali Sergey Karjakin va Magnus Karlsen kabi afsonalar qayd etgan natijalarga yaqinlashdi. Bu unga xalqaro turnirlarga taklifnomalar eshigini ochdi.\n\nO‘zbekiston chempionligi: Bir necha bor turli yosh toifalarida O‘zbekiston chempioni bo‘lishi uning mamlakatdagi yetakchiligini erta tasdiqladi.\n\nDars: Muvaffaqiyat yosh tanlamaydi. Eng muhimi — maqsadni aniq qo‘yish va unga erishish uchun har kuni 8-10 soatlab mashg‘ulot o‘tkazish.",
                        image: "/Javohir Sindarov/photo_2026-04-25_17-43-16.jpg"
                    },
                    {
                        id: 3,
                        title: "3. Jamoaviy ruh va \"Olimpiada qahramoni\"",
                        text: "Shaxmat individual sport bo‘lsa-da, Javohir jamoada ishlashning ustasi ekanini isbotladi.\n\nChennai-2022: Hindistonda o‘tgan 44-shaxmat olimpiadasida O‘zbekiston terma jamoasi safida oltin medalni qo‘lga kiritdi. U o‘z doskasida eng qiyin vaziyatlarda ham jamoasini qutqarib qola oldi.                                                                                                                                                      Oltin avlod: Javohirni ko‘pincha Nodirbek Abdusattorov bilan birga tilga olishadi. Ular birgalikda O‘zbekiston shaxmatining \"Yangi to‘lqini\"ni yaratishdi. Olimpiadadagi g‘alaba bu ikki yosh iste’dodning o‘zaro uyg‘unligi natijasidir.\n\nPsixologik barqarorlik: Kuchli bosim ostida ham sovuqqonlikni saqlash — uning asosiy quroli.",
                        image: "/Javohir Sindarov/photo_2026-04-25_17-43-24.jpg"
                    },
                    {
                        id: 4,
                        title: "4. Strategik fikrlash va universal uslub",
                        text: "Sindarovning o‘yin uslubi vaqt o‘tishi bilan taktik hujumlardan chuqur pozitsion o‘yinga o‘zgardi.\n\nMoslashuvchanlik: U raqibga qarab o‘z strategiyasini o‘zgartira oladi. Bu zamonaviy \"kompyuter shaxmati\" davrida omon qolishning yagona yo‘li.                                                                                                                                                                                                                                           Zamonaviy shaxmatda \"Stockfish\" kabi kuchli dvigatellar bilan ishlash muhim. Javohir kompyuter tahlillaridan samarali foydalanadi, lekin doim o‘zining kreativ g‘oyalarini ham saqlab qolishga intiladi.\n\nAnaliz: Har bir mag‘lubiyatdan so‘ng u soatlab o‘z xatolarini tahlil qiladi. Uning uchun xato — bu dars.",
                        image: "/Javohir Sindarov/photo_2026-04-25_17-43-32.jpg"
                    },
                    {
                        id: 5,
                        title: "5. Jahon elitasiga kirish (Top-100 va undan yuqori)",
                        text: "Bugungi kunda Javohir dunyoning eng kuchli shaxmatchilari reytingida mustahkam o‘rin egallab kelmoqda.\n\nNufuzli turnirlar: \"Tata Steel Chess\" va Jahon Kubogi kabi yirik musobaqalarda Magnus Karlsen kabi gigantlar bilan munosib kurashmoqda.\nElita sari: Dunyo shaxmatida \"2700 reyting\" chegarasi — bu super-grossmeysterlar klubi hisoblanadi. Javohirning hozirgi asosiy maqsadi — barqaror tarzda ushbu ko‘rsatkichni saqlab qolish va Jahon toji uchun nomzodlar turniriga yo‘llanma olish.\nO‘sish to‘xtamaydi: U 2700 (Super-grossmeyster) reyting barini zabt etishni maqsad qilgan.",
                        image: "/Javohir Sindarov/photo_2026-04-25_17-43-40.jpg"
                    }
                ]
            },
            {
                id: 2,
                name: "Bahodir Jalolov",
                company: "Ikki karra Olimpiada chempioni",
                image: "/Bahodir Jalolov/photo_2026-04-27_15-56-11.jpg",
                steps: [
                    {
                        id: 1,
                        title: "1. Qanday qilib boks olamida mutlaq cho‘qqiga chiqish mumkin? (Bahodir Jalolov tajribasi)",
                        text: "Bahodir Jalolov — o‘zbek boksi afsonasi, og‘ir vazn toifasida ikki karra Olimpiada va jahon chempioni. Uning \"Big B\" laqabi ostidagi g‘alabalari ortida temir intizom va strategik yondashuv yotadi.\n\nBahodir 1994-yil 8-iyulda Surxondaryo viloyatida tug‘ilgan. Uning sportdagi ilk qadamlari boshqa sport turidan boshlangan.\n\nFutboldan boksga: Dastlab futbolchi bo‘lishni orzu qilgan Bahodir, jismoniy tuzilishi (bo‘yi va vazni) tufayli murabbiylar maslahati bilan boksga o‘tadi.\n\nDars: O‘z tabiiy imkoniyatlaringizni tahlil qiling va ulardan maksimal foyda olish mumkin bo‘lgan sohani tanlang.",
                        image: "/Bahodir Jalolov/photo_2026-04-27_15-56-11.jpg"
                    },
                    {
                        id: 2,
                        title: "2. Murabbiylar maktabi va Chirchiq olimpiya zaxiralari kolleji",
                        text: "Professional sportda poydevor — bu to‘g‘ri ta’lim.\n\nTizimli tayyorgarlik: Chirchiqdagi kollejda Bahodir boksning texnik asoslarini o‘rgandi. U yerda o‘z ustida tinimsiz ishlab, og‘ir vazndagi \"og‘ir\" harakatlarni yengil va tezkor qilishga erishdi.   \n                                                                                                                                                                                                                                                                    \n\"Oyoq o‘yini\" (Footwork): Odatda og‘ir vazndagi bokschilar sekin harakat qilishadi. Bahodirning o‘ziga xosligi — uning yengil vazndagi bokschilardek tezkor harakatlanishidir. Bu raqibga zarba berish uchun qulay nuqta qoldirmaydi.\nIntizom: Har kuni ertalabki mashg‘ulotlar va murabbiylarning ko‘rsatmalariga so‘zsiz bo‘ysunish uning xarakterini shakllantirdi.",
                        image: "/Bahodir Jalolov/photo_2026-04-27_15-56-21.jpg"
                    },
                    {
                        id: 3,
                        title: "3. Rio-2016 darsi va mag‘lubiyatdan kuch olish",
                        text: "Har qanday muvaffaqiyat yo‘li mag‘lubiyatlarsiz kechmaydi. 2016-yilgi Rio Olimpiadasida Bahodir sovrinsiz qaytadi.\n\nXatolar ustida ishlash: Rio-2016 dagi mag‘lubiyatdan so‘ng u o‘z intervyularida: \"Men o‘shanda yosh edim va tayyorgarligim yetarli emasligini tushunib yetdim\", deb tan olgan. Bu tan olish unga kibrdan xoli bo‘lib, yangidan o‘sish imkonini berdi.\n\nXulosa chiqarish: Mag‘lubiyatdan tushkunlikka tushmay, kamchiliklar ustida ishladi. Aynan shu yutqaziq uni Tokioga yanada kuchliroq bo‘lib kelishiga sabab bo‘ldi.\nLiderlik sifatlari: Terma jamoa sardori sifatida u boshqa bokschilarga ham motivatsiya berishni o‘rgandi\nPsixologik tayyorgarlik: Ringda faqat mushaklar emas, balki iroda ham g‘alaba qozonishini tushunib yetdi.",
                        image: "/Bahodir Jalolov/photo_2026-04-27_15-56-32.jpg"
                    },
                    {
                        id: 4,
                        title: "4. Havaskor va professional boksni uyg‘unlashtirish",
                        text: "Bahodir Jalolov havaskor boksda Olimpiada chempioni bo‘lish bilan birga, professional boksda ham o‘z yo‘lini ochdi.\n\nUniversalizm: U professional ringdagi kuchli zarba berish texnikasini havaskor boksga olib kirdi. Bu esa uning zarbalarini raqiblar uchun \"halokatli\" qildi.\nKun tartibi: Bahodirning muvaffaqiyat siri — qat’iy rejim. U hatto bayram kunlari ham mashg‘ulotlarni qoldirmaydi. Uyqu, ovqatlanish va dam olish vaqti millisekundlargacha hisoblanga\nNatija: U o‘z vazn toifasida \"Nokautchi\" maqomini oldi.",
                        image: "/Bahodir Jalolov/photo_2026-04-27_15-56-50.jpg"
                    },
                    {
                        id: 5,
                        title: "5. Tarixiy natija — Ikki karra Olimpiada chempionligi",
                        text: "Tokio-2020 va Parij-2024 Olimpiadalari Bahodirni sport olamining mutlaq yetakchisiga aylantirdi.\n\nBarqarorlik: Ikki marta ketma-ket oltin medal olish — bu tasodif emas, balki yuqori darajadagi barqarorlik belgisidir.\n\nVatanparvarlik: Ringga O‘zbekiston bayrog‘ini ko‘tarib chiqish va har gal madhiya yangraganda ko‘ziga yosh জ্ঞolishi unga millionlab muxlislarning mehrini keltirdi.",
                        image: "/Bahodir Jalolov/photo_2026-04-27_15-57-00.jpg"
                    }
                ]
            }
        ];
    }

    return {
        title: categoryNames[slug] || slug,
        items
    };
};
