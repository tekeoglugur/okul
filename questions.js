// Türk İktisat Tarihi Soru Havuzu
const questionBank = [
    {
        question: "Osmanlı İmparatorluğu'nun ekonomik yapısı hangi sisteme dayanmaktadır?",
        options: [
            "Kapitalist sistem",
            "Sosyalist sistem",
            "Selçuklulara dayanan yerleşik yaşam",
            "Feodal sistem",
            "Karma ekonomi sistemi"
        ],
        correct: 2
    },
    {
        question: "Osmanlı'da 'İkta Sistemi'nin temel özelliği nedir?",
        options: [
            "Toprakların özel mülkiyete tabi olması",
            "Fetih ve savaşların artmasıyla doğan ihtiyaçlar ve dirlik sisteminin genişlemesi",
            "Serbest piyasa ekonomisi",
            "Tarım topraklarının tüm halka eşit dağıtılması",
            "Yabancı yatırımcıların toprak sahibi olması"
        ],
        correct: 1
    },
    {
        question: "Osmanlı'da 'Has-Tımar-Zeamet' sistemi neyi ifade eder?",
        options: [
            "Vergi toplama sistemi",
            "Ticaret sistemi",
            "Dirlik Sistemi (toprak yönetimi)",
            "Eğitim sistemi",
            "Askeri teşkilatlanma"
        ],
        correct: 2
    },
    {
        question: "Osmanlı'da kapitalist üretim mümkün müydü?",
        options: [
            "Evet, tamamen serbest piyasa vardı",
            "Hayır, ancak devletin ekonomik hayatı kontrol altında tutması söz konusuydu",
            "Evet, tam kapitalist sistemdi",
            "Hayır, feodal sistemdi",
            "Karma bir sistemdi"
        ],
        correct: 1
    },
    {
        question: "Osmanlı'da Batı'da yaşanan 'Büyük Buhran' neye neden oldu?",
        options: [
            "Osmanlı'nın zenginleşmesine",
            "Kapitalizmin doğuşuna ve kalp paraların ortaya çıkmasına",
            "Sanayileşmeye",
            "Tarımın gelişmesine",
            "Nüfusun artmasına"
        ],
        correct: 1
    },
    {
        question: "Avrupa'da yaşanan 'Büyük Buhran' hangi ürünü Osmanlı'ya yönlendirdi?",
        options: [
            "Tekstil ürünleri",
            "Altın ve Gümüş",
            "Silah",
            "Tahıl",
            "Baharat"
        ],
        correct: 1
    },
    {
        question: "Avrupa mallarına gösterilen rağbet neyin bozulmasına neden oldu?",
        options: [
            "Siyasi yapı",
            "Tımar sisteminin",
            "Ordu yapısı",
            "Eğitim sistemi",
            "Vergi sistemi"
        ],
        correct: 1
    },
    {
        question: "Ekonomik buhranlar ve isyanlar hangi kuruluşun bozulmasına neden oldu?",
        options: [
            "Adalet sistemi",
            "Mültezimlerin ortaya çıkışı ve Tımar sisteminin bozulması",
            "Eğitim yapısı",
            "Askeri yapı",
            "İdari mekanizma"
        ],
        correct: 1
    },
    {
        question: "Osmanlı'da 'Lonca' sistemi nasıl tanımlanır?",
        options: [
            "Serbest ticaret birliği",
            "Esnaflar arasında tassavvuf akımların etkisi",
            "Vergi toplama örgütü",
            "Askeri birlik",
            "Tarım kooperatifi"
        ],
        correct: 1
    },
    {
        question: "Osmanlı'da 'Öşür-Haraç' neyi ifade eder?",
        options: [
            "Ticaret vergisi",
            "Has-tımar-zeamet (Dirlik Sistemi) içinde vergi sistemi",
            "Gümrük vergisi",
            "Emlak vergisi",
            "Gelir vergisi"
        ],
        correct: 1
    },
    {
        question: "'Sened-i İttifak' neyi temsil eder?",
        options: [
            "Ticaret anlaşması",
            "Köprülülerle başlayan kapitulu iktidarı",
            "Askeri pakt",
            "Eğitim reformu",
            "Toprak reformu"
        ],
        correct: 1
    },
    {
        question: "Osmanlı Devleti'nde reform hareketleri ne zaman başladı?",
        options: [
            "XVI. yüzyıl",
            "XVII. yüzyıl",
            "XVIII. yüzyıl",
            "XIX. yüzyıl",
            "XX. yüzyıl"
        ],
        correct: 2
    },
    {
        question: "1838 İngiliz Ticaret Antlaşması'nın Osmanlı ekonomisine ana etkisi nedir?",
        options: [
            "Yerli sanayinin güçlenmesi",
            "Kapitülasyonların ve imtiyazların süresiz olarak geçerliliğinin tekrar teyit edilmesi",
            "Gümrük gelirlerinin artması",
            "Dış borçların azalması",
            "Tarımsal üretimin artması"
        ],
        correct: 1
    },
    {
        question: "1838 Antlaşması'na göre, Britanyalı tacir veya mümessili Osmanlı ürünlerini satın aldığında ne kadar vergi ödeyecekti?",
        options: [
            "Müslüman Osmanlı tebaasının ödediğinden fazla",
            "Müslüman Osmanlı tebaasının en çok kayrılan sınıfının ödediğine eş vergi",
            "Hiç vergi ödemeyecek",
            "İki katı vergi",
            "Yarı yarıya vergi"
        ],
        correct: 1
    },
    {
        question: "1838 Antlaşması'na göre, Osmanlı ürünleri ihraç edilirken nasıl bir uygulama olacaktı?",
        options: [
            "Yüksek gümrük vergisi",
            "Herhangi bir resim ve vergiden muaf olarak gemiye yükleme",
            "Normal vergi",
            "Sadece İngilizlere özel vergi",
            "Değişken vergi"
        ],
        correct: 1
    },
    {
        question: "Kırım Savaşı hangi yıllar arasında gerçekleşti?",
        options: [
            "1850-1853",
            "1853-1856",
            "1856-1859",
            "1860-1863",
            "1865-1868"
        ],
        correct: 1
    },
    {
        question: "1850'de İngiliz elçisi Stratford Canning, Osmanlı yöneticileri hakkında ne söylemiştir?",
        options: [
            "Çok bilgili ve dirayet sahibi",
            "Ülke menfaatinden çok kişisel menfaatleri önde gelir, gerçek dostlarını tanımazlar",
            "Reformculardır",
            "Milliyetçidirler",
            "Modernistlerdir"
        ],
        correct: 1
    },
    {
        question: "Osmanlı'nın ilk dış borçlanması hangi yılda ve hangi savaş nedeniyle gerçekleşti?",
        options: [
            "1850 - Kırım Savaşı öncesi",
            "1854 - Kırım Savaşı",
            "1860 - Balkan ayaklanmaları",
            "1870 - Rus-Osmanlı Savaşı",
            "1880 - Mali kriz"
        ],
        correct: 1
    },
    {
        question: "1881'de hangi kurum kurularak Osmanlı'nın dış borçları kontrol altına alındı?",
        options: [
            "Osmanlı Bankası",
            "Düyun-u Umumiye (Muharrem Kararnamesi ile)",
            "Maliye Nezareti",
            "Ziraat Bankası",
            "Merkez Bankası"
        ],
        correct: 1
    },
    {
        question: "Avrupa tüccarlarının Osmanlı'daki etkinliğinin artmasıyla hangi gruplar öne çıktı?",
        options: [
            "Türk tüccarlar",
            "Levanterler ve müste'menler (Galata ve Pera)",
            "Arap tüccarlar",
            "İranlı tüccarlar",
            "Hint tüccarları"
        ],
        correct: 1
    },
    {
        question: "Osmanlı İktisadi Düşüncesinde 'Tanzimat' dönemi hangi gelişmeyi temsil eder?",
        options: [
            "Kapalı ekonomi",
            "Batılılaşma ve batının ekonomisine özen",
            "Sosyalist ekonomi",
            "Merkantilizm",
            "Fizyokratizm"
        ],
        correct: 1
    },
    {
        question: "XIX. yüzyılın ikinci yarısından itibaren Osmanlı'da hangi ekonomik yaklaşım görülür?",
        options: [
            "Merkantilizm",
            "Batılılaşmanın iktisadi boyutuyla ilgilenilmesi",
            "Otarşi",
            "Planlı ekonomi",
            "Komünizm"
        ],
        correct: 1
    },
    {
        question: "'Sanayileşme ve Şirketleşme' süreci hangi dönemde başlamıştır?",
        options: [
            "Tanzimat",
            "II. Meşrutiyet (Serbest-i Ticaret)",
            "Cumhuriyet",
            "Osmanlı'nın kuruluşu",
            "I. Meşrutiyet"
        ],
        correct: 1
    },
    {
        question: "Bazı Paşalar ticaret üzerinde durmuş ve hangi tür ticareti savunmuşlardır?",
        options: [
            "Kapalı ekonomi",
            "Serbest ticaret",
            "Devlet kontrolü",
            "Korumacılık",
            "Tekelcilik"
        ],
        correct: 1
    },
    {
        question: "'Şirket-i Hayriye' hangi yıl kurulmuştur?",
        options: [
            "1850",
            "1851",
            "1860",
            "1870",
            "1880"
        ],
        correct: 0
    },
    {
        question: "II. Meşrutiyet ile birlikte iktisadi hayatta kaç dönem incelenebilir?",
        options: [
            "Bir",
            "İki (Liberal dönem 1908-1913 ve Milli İktisat Dönemi 1914-1918)",
            "Üç",
            "Dört",
            "Beş"
        ],
        correct: 1
    },
    {
        question: "Liberal dönemin (1908-1913) en önemli savunucuları kimlerdir?",
        options: [
            "İttihat ve Terakki üyeleri",
            "Cavid Bey ve Sakızlı Ohannes Paşa",
            "Ziya Gökalp ve Yusuf Akçura",
            "Mustafa Kemal ve İsmet İnönü",
            "Enver Paşa ve Talat Paşa"
        ],
        correct: 1
    },
    {
        question: "Sakızlı Ohannes Paşa hangi eseri yazmıştır?",
        options: [
            "İlmi İktisat",
            "Mebadi-i İlmi Servet-i Milel (1881)",
            "Türk İktisadı",
            "Milli İktisat",
            "Sermaye"
        ],
        correct: 1
    },
    {
        question: "Sakızlı Ohannes Paşa hangi okulda ders vermiştir?",
        options: [
            "Darülfünun",
            "Mekteb-i Mülkiye ve Harbiye",
            "İstanbul Üniversitesi",
            "Galatasaray Lisesi",
            "Robert Kolej"
        ],
        correct: 1
    },
    {
        question: "Ohannes Paşa'nın ekonomik görüşü nedir?",
        options: [
            "Devletçilik",
            "Liberal iktisadın savunuculuğu ve serbesti-i ticaret",
            "Sosyalizm",
            "Merkantilizm",
            "Korumacılık"
        ],
        correct: 1
    },
    {
        question: "Ohannes Paşa'ya göre devlet ekonomiye nasıl müdahale etmelidir?",
        options: [
            "Sürekli müdahale etmeli",
            "Hiçbir biçimde ekonomiye karışmamalıdır",
            "Sadece planlama yapmalı",
            "Sadece vergi toplamalı",
            "Karma sistem uygulamalı"
        ],
        correct: 1
    },
    {
        question: "Cavid Bey hangi parti ile ilişkilendirilir?",
        options: [
            "Hürriyet ve İtilaf",
            "İttihat ve Terakki (Maliye Nazırı)",
            "Cumhuriyet Halk Partisi",
            "Demokrat Parti",
            "Liberal Parti"
        ],
        correct: 1
    },
    {
        question: "Cavid Bey'in eseri hangisidir?",
        options: [
            "Milli İktisat",
            "İlmi İktisat (1900)",
            "Sermaye",
            "İktisat İlmi",
            "Türk Ekonomisi"
        ],
        correct: 1
    },
    {
        question: "Cavid Bey hangi ekonomik sistemi savunmuştur?",
        options: [
            "Devletçilik",
            "Liberal (serbest) ekonomi politikası",
            "Sosyalizm",
            "Merkantilizm",
            "Korumacılık"
        ],
        correct: 1
    },
    {
        question: "Cavid Bey, Friedrich List'in hangi görüşüne karşı çıkmıştır?",
        options: [
            "Serbest ticaret",
            "Himayeci ekonomi politikaları ve bir ulusun hem ziraatçi, hem sanayici, hem de tüccar olması",
            "Liberalizm",
            "Kapitalizm",
            "Uluslararası ticaret"
        ],
        correct: 1
    },
    {
        question: "'Milli İktisat' anlayışının baş mimarı kimdir?",
        options: [
            "Adam Smith",
            "Friedrich List",
            "Karl Marx",
            "David Ricardo",
            "John Stuart Mill"
        ],
        correct: 1
    },
    {
        question: "Friedrich List'in Almanlara ne yaptığı söylenmiştir?",
        options: [
            "Serbest ticaret öğretti",
            "İktisadi kalkınmanın yolunu çizmiştir",
            "Sosyalizmi öğretti",
            "Kapitalizmi öğretti",
            "Komünizmi öğretti"
        ],
        correct: 1
    },
    {
        question: "II. Meşrutiyet döneminde milli iktisat anlayışından kimler etkilenmiştir?",
        options: [
            "Cavid Bey ve Ohannes Paşa",
            "Ziya Gökalp, Yusuf Akçura, Tekin Alp",
            "Mustafa Kemal",
            "İsmet İnönü",
            "Celal Bayar"
        ],
        correct: 1
    },
    {
        question: "Milli iktisat anlayışına göre kalkınmanın en önemli yolu nedir?",
        options: [
            "Tarım",
            "Sanayileşme",
            "Ticaret",
            "Turizm",
            "Madencilik"
        ],
        correct: 1
    },
    {
        question: "Milli iktisat anlayışına göre ne yetiştrilmeli?",
        options: [
            "Yabancı sermayedarlar",
            "Yerli ve milli burjuvazi",
            "Büyük toprak sahipleri",
            "Tüccarlar",
            "Bankerler"
        ],
        correct: 1
    },
    {
        question: "II. Meşrutiyet sürecinde hangi ekonomik eylemler yapıldı?",
        options: [
            "Yabancılarla işbirliği",
            "Boykotlar (Yunanlılara ve Ermenilere karşı)",
            "Serbest ticaret",
            "İthalat artışı",
            "Vergi indirimi"
        ],
        correct: 1
    },
    {
        question: "Osmanlı Müslümanlarının iktisadi alanda ne yapması isteniyordu?",
        options: [
            "Yabancılarla çalışmaları",
            "Uyanmaları, ticaret yapmaları ve fabrika, banka kurmaları",
            "Tarıma yönelmeleri",
            "Göç etmeleri",
            "Devlet memuru olmaları"
        ],
        correct: 1
    },
    {
        question: "1908 Devrimi'nden sonra 1909'da hangi kanun çıkarıldı?",
        options: [
            "Ticaret Kanunu",
            "Tatil-i Eşgal Kanunu Muvakkatı (grev yasağı)",
            "Sanayi Kanunu",
            "Gümrük Kanunu",
            "Vergi Kanunu"
        ],
        correct: 1
    },
    {
        question: "'Tatil-i Eşgal Kanunu' neyi yasakladı?",
        options: [
            "Yabancı yatırımları",
            "Kamu hizmet sektöründe grev yapılmasını ve sendika kurulmasını",
            "Özel ticareti",
            "İthalatı",
            "İhracatı"
        ],
        correct: 1
    },
    {
        question: "1908'den sonra İstanbul'da hangi cemiyet kuruldu?",
        options: [
            "İttihat ve Terakki",
            "Müslüman Ticaret Cemiyeti",
            "Osmanlı Bankacılar Derneği",
            "Sanayici ve İşadamları Derneği",
            "Tüccar Birliği"
        ],
        correct: 1
    },
    {
        question: "Balkan Savaşı'nın ekonomiye etkisi ne oldu?",
        options: [
            "Ekonomik çöküş",
            "Toplumdaki iktisadi uyanış duygusu güçlendi",
            "Sanayileşme durdu",
            "Tarım sektörü çöktü",
            "Ticaret bitti"
        ],
        correct: 1
    },
    {
        question: "Birinci Dünya Savaşı'nın çıkması ekonomiyi nasıl etkiledi?",
        options: [
            "Ekonomi güçlendi",
            "İktisadi yapıyı derinden etkiledi, Müslüman Türk burjuvazisi teşvik edildi",
            "Değişiklik olmadı",
            "Sadece tarım etkilendi",
            "Sadece sanayi etkilendi"
        ],
        correct: 1
    },
    {
        question: "Birinci Dünya Savaşı'nda hangi spekülatif davranışlar görüldü?",
        options: [
            "Normal ticaret",
            "Karaborsa, istifçilik (savaş zenginleri türedi)",
            "Hayırseverlik",
            "Dayanışma",
            "Yardımlaşma"
        ],
        correct: 1
    },
    {
        question: "Osmanlı Hükümeti'nin milli iktisat modelini benimsemesindeki en önemli etken nedir?",
        options: [
            "İdeolojik tercih",
            "Birinci Dünya Savaşı koşulları",
            "Halkın isteği",
            "Avrupa baskısı",
            "Din"
        ],
        correct: 1
    },
    {
        question: "Osmanlı Bankası hangi yıl kuruldu?",
        options: [
            "1850",
            "1856",
            "1863",
            "1870",
            "1875"
        ],
        correct: 2
    },
    {
        question: "İlk milli bankalardan 'Türkiye Milli Bankası' hangi yıl kuruldu?",
        options: [
            "1905",
            "1909",
            "1915",
            "1920",
            "1923"
        ],
        correct: 1
    },
    {
        question: "İttihat ve Terakki Cemiyeti'nin 1912 kongresinde sözü edilen kanun hangi yıl yayımlandı?",
        options: [
            "1912",
            "14 Aralık 1913 (Banka Kanunu)",
            "1914",
            "1915",
            "1916"
        ],
        correct: 1
    },
    {
        question: "Osmanlı Ticaret Bankası hangi yıl faaliyete geçti?",
        options: [
            "1909",
            "27 Haziran 1911",
            "1913",
            "1915",
            "1917"
        ],
        correct: 1
    },
    {
        question: "Osmanlı İtibar-ı Milli Bankası hangi tarihte kesin olarak kuruldu?",
        options: [
            "1915",
            "11 Mart 1917",
            "1918",
            "1919",
            "1920"
        ],
        correct: 1
    },
    {
        question: "Osmanlı İtibar-ı Milli Bankası'nın özelliği nedir?",
        options: [
            "Tamamı yabancı sermaye",
            "Pay senetleri yabancı vatandaşlarına kapalı, tüm işlemler Türkçe",
            "Uluslararası banka",
            "Karma sermaye",
            "Sadece İstanbul'da faaliyet"
        ],
        correct: 1
    },
    {
        question: "1908-1918 yılları arasında Anadolu'da milli bankaları kim destekledi?",
        options: [
            "Yabancı sermayedarlar",
            "İttihat ve Terakki Cemiyeti",
            "Padişah",
            "Avrupa bankaları",
            "Ermeni tüccarlar"
        ],
        correct: 1
    },
    {
        question: "Konya'da 1915 yılında hangi banka kuruldu?",
        options: [
            "Ziraat Bankası",
            "Konya Köylü Bankası",
            "İş Bankası",
            "Osmanlı Bankası",
            "Emlak Bankası"
        ],
        correct: 1
    },
    {
        question: "Kayseri Milli İktisat Anonim Şirketi hangi yıl kuruldu?",
        options: [
            "1914",
            "11 Temmuz 1916",
            "1917",
            "1918",
            "1919"
        ],
        correct: 1
    },
    {
        question: "Manisa Bağcılar Bankası hangi amaçla kuruldu?",
        options: [
            "Genel bankacılık",
            "Bağ sahiplerine borç para vermek ve ürünleri pazarlamak",
            "Tarım kredisi",
            "Ticari kredi",
            "Konut kredisi"
        ],
        correct: 1
    },
    {
        question: "1908-1918 yılları milli bankacılık açısından nasıl bir dönemdir?",
        options: [
            "Durgunluk dönemi",
            "Kuruluş ve gelişim dönemi",
            "Çöküş dönemi",
            "Millileşme dönemi",
            "Yabancılaşma dönemi"
        ],
        correct: 1
    },
    {
        question: "Osmanlı burjuvazisinin çoğunlukla kimlerden oluşması neyi engelledi?",
        options: [
            "Ticaret",
            "Ulusal nitelikte bir kapitalizm",
            "Sanayileşme",
            "Tarım",
            "İhracat"
        ],
        correct: 1
    },
    {
        question: "Osmanlı'da 'beynelmilel burjuva yaklaşımını' ilk ortaya atanlar kimlerdir?",
        options: [
            "İttihat ve Terakki",
            "Sakızlı Ohannes Paşa ve Cavit Bey",
            "Ziya Gökalp ve Yusuf Akçura",
            "Mustafa Kemal",
            "İsmet İnönü"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda Osmanlı gümrük resimlerini ilk olarak ne kadar artırdı?",
        options: [
            "%10",
            "%15",
            "%20",
            "%25",
            "%30"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda gümrük resimleri sonunda yüzde kaça çıkarıldı?",
        options: [
            "%20",
            "%30",
            "%40",
            "%50",
            "%60"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda Osmanlı tek taraflı olarak neyi kaldırdı?",
        options: [
            "Vergileri",
            "Kapitülasyonları",
            "Gümrükleri",
            "Tekelcilik",
            "Bankaları"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı için Almanya ve Avusturya'dan alınan avansların oranı neydi?",
        options: [
            "%10",
            "%26",
            "%50",
            "%74",
            "%90"
        ],
        correct: 1
    },
    {
        question: "Milli Mücadele yıllarında savaşın dış kaynaklı finansman oranı neydi?",
        options: [
            "%5",
            "%10",
            "%26",
            "%50",
            "%74"
        ],
        correct: 1
    },
    {
        question: "1914-1918 yılları arasında erkek nüfusun silah altına alınması neyi etkiledi?",
        options: [
            "Sadece askeri gücü",
            "Tarımsal üretimi olumsuz yönde",
            "Sadece sanayiyi",
            "Sadece ticareti",
            "Eğitimi"
        ],
        correct: 1
    },
    {
        question: "1914-1918 arasında buğday üretimi yüzde kaç düştü?",
        options: [
            "%30",
            "%47",
            "%60",
            "%75",
            "%85"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda tütün üretimi yüzde kaç düştü?",
        options: [
            "%30",
            "%51",
            "%60",
            "%70",
            "%80"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda kuru üzüm üretimi yüzde kaç düştü?",
        options: [
            "%30",
            "%54",
            "%60",
            "%70",
            "%80"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda fındık üretimi yüzde kaç düştü?",
        options: [
            "%50",
            "%65",
            "%70",
            "%75",
            "%80"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda yaş koza üretimi yüzde kaç düştü?",
        options: [
            "%50",
            "%69",
            "%75",
            "%80",
            "%85"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda koyun sayısı yüzde kaç azaldı?",
        options: [
            "%30",
            "%45",
            "%50",
            "%60",
            "%70"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı'nda keçi sayısı yüzde kaç azaldı?",
        options: [
            "%20",
            "%33",
            "%40",
            "%50",
            "%60"
        ],
        correct: 1
    },
    {
        question: "I. Dünya Savaşı sürecinde hangi sorun döneme damgasını vurdu?",
        options: [
            "Eğitim sorunu",
            "İstifçilik, karaborsa, haksız kazanç",
            "Sağlık sorunu",
            "Ulaşım sorunu",
            "Barınma sorunu"
        ],
        correct: 1
    },
    {
        question: "Mayıs 1917'de hangi kurul kuruldu?",
        options: [
            "Savaş Kurulu",
            "Mübayaat Heyeti",
            "İaşe Nezareti",
            "Maliye Bakanlığı",
            "Ticaret Bakanlığı"
        ],
        correct: 1
    },
    {
        question: "'Mübayaat Heyeti'nin amacı neydi?",
        options: [
            "Vergi toplamak",
            "Yapay fiyat artışlarını önlemek, haksız kazancı engellemek, istifçiliği ortadan kaldırmak",
            "Savaş yönetmek",
            "Dış ticaret yapmak",
            "Bankacılık yapmak"
        ],
        correct: 1
    },
    {
        question: "1918'de hangi kurum kuruldu?",
        options: [
            "Maliye Bakanlığı",
            "İaşe Nezareti",
            "Ticaret Bakanlığı",
            "Sanayi Bakanlığı",
            "Tarım Bakanlığı"
        ],
        correct: 1
    },
    {
        question: "'İaşe Nezareti'nin görevi neydi?",
        options: [
            "Sadece vergi toplamak",
            "İaşe işlerini düzenlemek, alım-satım işlemlerinde fiyat belirlemek, sanayi tesisleri kurmak",
            "Sadece ithalat yapmak",
            "Sadece ihracat yapmak",
            "Sadece gümrük işlemleri"
        ],
        correct: 1
    },
    {
        question: "1908-1922 yılları Türkiye'de hangi süreç için atılmış temel adımlardır?",
        options: [
            "Sosyalizm",
            "Ulusal nitelikte kapitalizmin filizlenmesi",
            "Feodalizm",
            "Komünizm",
            "Anarşizm"
        ],
        correct: 1
    },
    {
        question: "Milli Mücadele döneminde en önemli kaynak neydi?",
        options: [
            "Dış borçlar",
            "Tekalif-i Milliye",
            "Yabancı yardımlar",
            "Petrol gelirleri",
            "Altın rezervleri"
        ],
        correct: 1
    },
    {
        question: "Erzurum Kongresi'nin giderleri nasıl karşılandı?",
        options: [
            "Devlet bütçesinden",
            "Halka başvuruldu",
            "Dış yardımlardan",
            "Bankalardan borç alındı",
            "Vergi toplandı"
        ],
        correct: 1
    },
    {
        question: "Mustafa Kemal, Sivas'a giderken para meselesini nasıl ifade etti?",
        options: [
            "Paramız bol",
            "Evet, bir de para meselesi var",
            "Para sorun değil",
            "Paramız yeterli",
            "Para buluruz"
        ],
        correct: 1
    },
    {
        question: "Kuvayı Milliye müfrezelerinin temel sorunları neydi?",
        options: [
            "Sadece silah",
            "Nakdi ve Ayni malzeme temini, nakliye, iaşe",
            "Sadece personel",
            "Sadece eğitim",
            "Sadece moral"
        ],
        correct: 1
    },
    {
        question: "Balıkesir Kongresi'nde hangi hizmetler düzenlendi?",
        options: [
            "Sadece sağlık",
            "Askerlerin iaşesi, tedavisi, teçhizatı, silah bulundurulması için menzil müfettişliği",
            "Sadece eğitim",
            "Sadece barınma",
            "Sadece ulaşım"
        ],
        correct: 1
    },
    {
        question: "Nazilli Kongresi'ne göre Heyeti Milliye'nin giderleri nasıl karşılanacak?",
        options: [
            "Devlet bütçesinden",
            "Halkın ayni ve nakdi teberrularıyla",
            "Dış yardımlardan",
            "Bankalardan",
            "Vergi ile"
        ],
        correct: 1
    },
    {
        question: "Maliye Bakanı Hakkı Behiç Bey, Duyun-u Umumiye'den ne istedi?",
        options: [
            "Borç vermeleri",
            "Vergileri toplayıp bize verin, masrafınızı sonra hesaplaşırız",
            "Faiz indirimi",
            "Borç ertelemesi",
            "Yapılandırma"
        ],
        correct: 1
    },
    {
        question: "Meclis hangi kurumun gelirlerine el koydu?",
        options: [
            "Osmanlı Bankası",
            "Tütün Rejisi",
            "Ziraat Bankası",
            "Ticaret Odası",
            "Liman İşletmeleri"
        ],
        correct: 1
    },
    {
        question: "Milli Mücadele yıllarında hangi yeni vergiler getirildi?",
        options: [
            "Gelir vergisi",
            "Aşar, Nakliye, Deniz taşıtları vergisi, askerlikten tecil vergisi",
            "KDV",
            "MTV",
            "Emlak vergisi"
        ],
        correct: 1
    },
    {
        question: "'Firariler Hakkında Kanun' neden çıkarıldı?",
        options: [
            "Göçü engellemek için",
            "Askere alınanların silahlarıyla kaçmasını önlemek",
            "Kaçakçılığı engellemek",
            "Vergi kaçağını önlemek",
            "Ticari kaçakçılığı önlemek"
        ],
        correct: 1
    },
    {
        question: "Meclis'in çıkardığı ilk yasa hangi konudaydı?",
        options: [
            "Toprak reformu",
            "Vergi kanunu (Aşar vergisine zam)",
            "Sanayi teşviki",
            "Eğitim reformu",
            "Askeri düzenleme"
        ],
        correct: 1
    },
    {
        question: "Her çift hayvan başına sahipleri ne yapmakla yükümlü kılındı?",
        options: [
            "Vergi ödemek",
            "Yazlık ve kışlık olmak üzere iki dönüm araziyi ekmek",
            "Hayvanları teslim etmek",
            "Orduya katılmak",
            "Yol yapmak"
        ],
        correct: 1
    },
    {
        question: "19 Ağustos 1920 tarihli kararname hangi konudaydı?",
        options: [
            "Vergi artışı",
            "Sürmeye Elverişli Hayvanların Dışsatımının Önlenmesi",
            "Tarım reformu",
            "Sanayi teşviki",
            "Eğitim reformu"
        ],
        correct: 1
    },
    {
        question: "10 Ağustos 1920 tarihli 154 sayılı kanun hangi konudaydı?",
        options: [
            "Tarım",
            "Maden kömürü üretimini arttırmak",
            "Sanayi",
            "Ticaret",
            "Bankacılık"
        ],
        correct: 1
    },
    {
        question: "Zonguldak ve Ereğli maden ocaklarında çalışanlara ne sağlandı?",
        options: [
            "Maaş artışı",
            "Askerlikten geri çekilmeleri",
            "Konut",
            "Sağlık sigortası",
            "Emeklilik hakkı"
        ],
        correct: 1
    },
    {
        question: "Meclis üyelerinin aylıklarından ne kadar kesildi?",
        options: [
            "5 lira",
            "10 lira",
            "15 lira",
            "20 lira",
            "25 lira"
        ],
        correct: 1
    },
    {
        question: "14 Eylül 1920 tarihli kanun hangi konudaydı?",
        options: [
            "Vergi",
            "Men'i Müskirat (alkollü içki yasağı)",
            "Tarım",
            "Sanayi",
            "Ticaret"
        ],
        correct: 1
    },
    {
        question: "'Düğünlerde Men'i İsrafat Kanunu' neyi yasakladı?",
        options: [
            "Düğün yapmayı",
            "Çeyiz taşımayı, fazla çalgı çaldırmayı, ziyafet vermeyi",
            "Dans etmeyi",
            "Müzik dinlemeyi",
            "Eğlenmeyi"
        ],
        correct: 1
    },
    {
        question: "21 Eylül 1920 tarihinde çıkarılan 24 sayılı kanun hangisidir?",
        options: [
            "Aşar Vergisi",
            "Temettü Vergisi Kanunu",
            "Gümrük Kanunu",
            "Ticaret Kanunu",
            "Sanayi Kanunu"
        ],
        correct: 1
    },
    {
        question: "Temettü Vergisi 1920 yılında kaç katına çıkarıldı?",
        options: [
            "İki katı",
            "Beş katı (bazı miktarlar için 10 katı)",
            "Üç katı",
            "Dört katı",
            "Altı katı"
        ],
        correct: 1
    },
    {
        question: "Sakarya Savaşı'ndan hemen önce hangi emirler ilan edildi?",
        options: [
            "Seferberlik",
            "Tekalif-i Milliye Emirleri",
            "Genel af",
            "Vergi affı",
            "Borç ertelemesi"
        ],
        correct: 1
    },
    {
        question: "Talat Paşa ve Enver Paşa hangi iktidara yakın oldular?",
        options: [
            "İngiliz",
            "Sovyet (Bolşevikler)",
            "Fransız",
            "Alman",
            "İtalyan"
        ],
        correct: 1
    },
    {
        question: "Moskova Antlaşması ile Türkiye'ye ne sağlandı?",
        options: [
            "Toprak",
            "Mali ve askeri yardımlar",
            "Teknoloji transferi",
            "Ticaret anlaşması",
            "Gümrük muafiyeti"
        ],
        correct: 1
    },
    {
        question: "1923-1929 yılları arasında Türkiye'nin en önemli iki gelişmesi nedir?",
        options: [
            "Sanayi ve tarım",
            "Lozan Antlaşması ve Cumhuriyetin ilanı",
            "Eğitim ve sağlık",
            "Ulaşım ve enerji",
            "Ticaret ve bankacılık"
        ],
        correct: 1
    },
    {
        question: "1923-1929 döneminde Türkiye yılda ne kadar borç ödüyordu?",
        options: [
            "3 milyon",
            "6 milyon civarında",
            "10 milyon",
            "15 milyon",
            "20 milyon"
        ],
        correct: 1
    },
    {
        question: "İzmir İktisat Kongresi hangi tarihte düzenlendi?",
        options: [
            "1922",
            "Şubat 1923",
            "1924",
            "1925",
            "1926"
        ],
        correct: 1
    },
    {
        question: "İktisat Vekili Mahmut Esat, 9 Ocak 1923'te ne duyurdu?",
        options: [
            "Yeni vergi",
            "Bir kongrenin toplanacağını",
            "Sanayileşme planı",
            "Borç yapılandırması",
            "Gümrük indirimi"
        ],
        correct: 1
    },
    {
        question: "İzmir İktisat Kongresi'ne kimler katılacaktı?",
        options: [
            "Sadece devlet yetkilileri",
            "Her kazadan çiftçi, amele, tüccar, zanaatkâr, şirket ve banka temsilcileri",
            "Sadece tüccarlar",
            "Sadece sanayiciler",
            "Sadece bankacılar"
        ],
        correct: 1
    },
    {
        question: "İzmir İktisat Kongresi'ne kaç kişi katıldı?",
        options: [
            "500",
            "1135",
            "2000",
            "3000",
            "5000"
        ],
        correct: 1
    },
    {
        question: "İktisat Kongresi nerede toplandı?",
        options: [
            "Ankara'da",
            "Osmanlı Bankası depolarında bir salonda",
            "İstanbul'da",
            "İzmir Belediyesi'nde",
            "Ticaret Odası'nda"
        ],
        correct: 1
    },
    {
        question: "Kongre'de çiftçiler ne talep etti?",
        options: [
            "Kredi",
            "Aşar vergisinin kaldırılması",
            "Toprak",
            "Tohum",
            "Gübre"
        ],
        correct: 1
    },
    {
        question: "Kongre'de yerli kömür konusunda ne tartışıldı?",
        options: [
            "İhracat",
            "Bir grup yerli kömürün ucuz olduğunu, diğerleri ithal kömürün ucuz olduğunu savundu",
            "Üretim artışı",
            "Vergi indirimi",
            "Teşvik primi"
        ],
        correct: 1
    },
    {
        question: "Kongre Başkanı kimdi?",
        options: [
            "Mustafa Kemal",
            "Kazım Karabekir Paşa",
            "İsmet İnönü",
            "Celal Bayar",
            "Mahmut Esat"
        ],
        correct: 1
    },
    {
        question: "Kongre sonunda ne yayımlandı?",
        options: [
            "Bildiri",
            "Misakı İktisadi",
            "Genelge",
            "Tebliğ",
            "Rapor"
        ],
        correct: 1
    },
    {
        question: "Misakı İktisadi'de Türk halkı nasıl tanımlandı?",
        options: [
            "Tembel",
            "Kendi ürünlerini yetiştiren, çok çalışkan",
            "Zengin",
            "Fakir",
            "Gelişmemiş"
        ],
        correct: 1
    },
    {
        question: "Misakı İktisadi'ye göre Türk halkı ormanlara nasıl bakar?",
        options: [
            "Gelir kaynağı",
            "Evlat olarak görür",
            "Yakacak",
            "Satılacak mal",
            "Kaynak"
        ],
        correct: 1
    },
    {
        question: "Misakı İktisadi'ye göre Türk milleti neye düşman değildir?",
        options: [
            "Yabancılara",
            "Düşman olmayan milletlere daima dost",
            "Komşulara",
            "Avrupalılara",
            "Herkese"
        ],
        correct: 1
    },
    {
        question: "İzmir İktisat Kongresi'nde ne hedef alındı?",
        options: [
            "Savaş hazırlığı",
            "Ekonomik kalkınma, üretim artışı, milli unsurların ekonomiyi yönetmesi",
            "Toprak reformu",
            "Vergi indirimi",
            "Borç ödeme"
        ],
        correct: 1
    },
    {
        question: "1923-1929 döneminde anlamlı bir sanayileşme var mıydı?",
        options: [
            "Evet çok fazla",
            "Hayır, olmadı",
            "Kısmen",
            "Sadece tekstilde",
            "Sadece gıdada"
        ],
        correct: 1
    },
    {
        question: "Cumhuriyet döneminde hangi sektörde artış oldu?",
        options: [
            "Sanayi",
            "Tarımsal üretim",
            "Ticaret",
            "Bankacılık",
            "Turizm"
        ],
        correct: 1
    },
    {
        question: "1920'li yıllarda kırsal kesimde topraksız köylülerin oranı neydi?",
        options: [
            "%30",
            "%50",
            "%60",
            "%70",
            "%80"
        ],
        correct: 1
    },
    {
        question: "1927'de tüm köylülerin yüzde kaçının tarım araçları yoktu?",
        options: [
            "%10",
            "%20",
            "%30",
            "%40",
            "%50"
        ],
        correct: 1
    },
    {
        question: "Geçinecek geliri olmayan köylüler hangi yöntemlere başvurdu?",
        options: [
            "Göç",
            "Ortakçılık ve kirayla (yarı yarıya paylaşma)",
            "Bankalara başvurma",
            "Kooperatif kurma",
            "Devletten yardım isteme"
        ],
        correct: 1
    },
    {
        question: "Cumhuriyetin ilk yıllarında çıkarılan kanunlar neyi pekiştirdi?",
        options: [
            "Devlet mülkiyeti",
            "Özel mülkiyet",
            "Ortak mülkiyet",
            "Kamu mülkiyeti",
            "Kooperatif mülkiyeti"
        ],
        correct: 1
    },
    {
        question: "Topraksız köylünün topraklandırılması ne zaman gündeme geldi?",
        options: [
            "1920'lerde",
            "1930'ların sonlarına doğru",
            "1940'larda",
            "1950'lerde",
            "1960'larda"
        ],
        correct: 1
    },
    {
        question: "Aşar vergisi hangi tarihte kaldırıldı?",
        options: [
            "1923",
            "17 Şubat 1925 (552 sayılı yasa)",
            "1926",
            "1927",
            "1928"
        ],
        correct: 1
    },
    {
        question: "Aşar vergisinin kaldırılması bütçe açığını ne kadar artırdı?",
        options: [
            "İki katına",
            "Üç katına",
            "Dört katına",
            "Beş katına",
            "Altı katına"
        ],
        correct: 1
    },
    {
        question: "Aşar vergisi gelir kaybı nasıl kapatılmaya çalışıldı?",
        options: [
            "Dış borçla",
            "Arazi vergisi, pamuklu ve yünlü dokumalardan alınan tüketim vergileri artışı, şeker-gazyağı vergileri",
            "Sadece gelir vergisi",
            "Sadece gümrük vergisi",
            "Sadece emlak vergisi"
        ],
        correct: 1
    },
    {
        question: "'Ağnam Vergisi' neyi kapsıyordu?",
        options: [
            "Sadece koyun",
            "Dört ayaklı hayvanlar (sonra büyük baş hayvanlar da eklendi)",
            "Sadece büyükbaş",
            "Sadece küçükbaş",
            "Sadece at"
        ],
        correct: 1
    },
    {
        question: "Ağnam vergisinin devlet gelirleri içindeki payı neydi?",
        options: [
            "%5",
            "%12",
            "%20",
            "%30",
            "%40"
        ],
        correct: 1
    },
    {
        question: "'Yol Vergisi' 1921'de kimler tarafından ödeniyordu?",
        options: [
            "Herkes",
            "18-60 yaşları arasındaki tüm erkek nüfus",
            "Sadece tüccarlar",
            "Sadece zenginler",
            "Sadece şehirliler"
        ],
        correct: 1
    },
    {
        question: "1923-1929 döneminde makineli tarım nerede yaygınlaştı?",
        options: [
            "Tüm Türkiye'de",
            "Akdeniz bölgesinde",
            "Karadeniz'de",
            "Doğu Anadolu'da",
            "Marmara'da"
        ],
        correct: 1
    },
    {
        question: "Makineli tarımı desteklemek için ne gibi muafiyetler getirildi?",
        options: [
            "Sadece vergi muafiyeti",
            "Büyük çiftlik sahipleri ve yardımcılarının askerlikten muafiyeti, akaryakıt ve kimyevi gübrelerde gümrük muafiyeti",
            "Sadece kredi desteği",
            "Sadece tohum desteği",
            "Sadece toprak tahsisi"
        ],
        correct: 1
    },
    {
        question: "1924-1929 yılları arasında traktör sayısı nasıl değişti?",
        options: [
            "100'den 500'e",
            "220'den 1779'a",
            "50'den 200'e",
            "500'den 1000'e",
            "1000'den 2000'e"
        ],
        correct: 1
    },
    {
        question: "1929 ekonomik bunalımı makineleşme sürecini nasıl etkiledi?",
        options: [
            "Hızlandırdı",
            "Durdurdu",
            "Değiştirmedi",
            "İki katına çıkardı",
            "Yönünü değiştirdi"
        ],
        correct: 1
    },
    {
        question: "Cumhuriyetin ilk yıllarında çiftçiye kredi veren kurum hangisiydi?",
        options: [
            "İş Bankası",
            "Ziraat Bankası",
            "Emlak Bankası",
            "Halk Bankası",
            "Merkez Bankası"
        ],
        correct: 1
    },
    {
        question: "Ziraat Bankası hangi tarihte bütçe kanunuyla dönüştürüldü?",
        options: [
            "1923",
            "19 Mart 1924",
            "1925",
            "1926",
            "1927"
        ],
        correct: 1
    },
    {
        question: "Ziraat Bankası kaç yıl süreli bankaya dönüştü?",
        options: [
            "50 yıl",
            "99 yıl",
            "25 yıl",
            "75 yıl",
            "100 yıl"
        ],
        correct: 1
    },
    {
        question: "Ziraat Bankası'nın sermayesi ne kadardı?",
        options: [
            "10 milyon",
            "30 milyon",
            "50 milyon",
            "70 milyon",
            "100 milyon"
        ],
        correct: 1
    },
    {
        question: "İlerleyen yıllarda Ziraat Bankası kredilerinin çoğu kime gitti?",
        options: [
            "Köylülere",
            "Ticaretle uğraşan büyük toprak sahiplerine",
            "Sanayicilere",
            "Tüccarlara",
            "Bankacılara"
        ],
        correct: 1
    },
    {
        question: "'İstihsal, Alım ve Satım Ortaklık Kooperatifleri Nizamnamesi' hangi yıl çıktı?",
        options: [
            "1920",
            "1920'li yılların başı",
            "1925",
            "1927",
            "1929"
        ],
        correct: 1
    },
    {
        question: "1928'de kooperatif sayısı kaça ulaştı?",
        options: [
            "20",
            "48",
            "100",
            "150",
            "200"
        ],
        correct: 1
    },
    {
        question: "'İtibarı Zirai Kooperatifleri' neden kuruldu?",
        options: [
            "İhracat için",
            "Çiftçileri tefecilerden kurtarmak",
            "Sanayiyi desteklemek",
            "İthalat için",
            "Vergi toplamak"
        ],
        correct: 1
    },
    {
        question: "1 Haziran 1929'da İtibarı Zirai hangi adla değişti?",
        options: [
            "Köy Kooperatifi",
            "Tarım Kredi Kooperatifi",
            "Ziraat Kooperatifi",
            "Çiftçi Kooperatifi",
            "Üretici Kooperatifi"
        ],
        correct: 1
    },
    {
        question: "Kurtuluş Savaşı sonrası sanayileşme için hangi kanun uygulandı?",
        options: [
            "1920 Sanayi Kanunu",
            "1913 Teşvik-i Sanayi Kanunu",
            "1925 Sanayi Kanunu",
            "1930 Sanayi Kanunu",
            "1935 Sanayi Kanunu"
        ],
        correct: 1
    },
    {
        question: "9 Aralık 1925'te hangi kanun çıkarıldı?",
        options: [
            "Tarım Kanunu",
            "Yerli Kumaştan Elbise Giyilmesinin Mecburiyeti",
            "Gümrük Kanunu",
            "Vergi Kanunu",
            "Ticaret Kanunu"
        ],
        correct: 1
    },
    {
        question: "Sanayi ve Maadin Bankası hangi tarihte kuruldu?",
        options: [
            "1923",
            "1925",
            "1927",
            "1929",
            "1930"
        ],
        correct: 1
    },
    {
        question: "5 Nisan 1925'te hangi kanun çıkarıldı?",
        options: [
            "Tarım Kanunu",
            "Şeker Fabrikalarına Bahşolunan İmtiyazat ve Muafiyat Hakkında Kanun",
            "Sanayi Kanunu",
            "Ticaret Kanunu",
            "Gümrük Kanunu"
        ],
        correct: 1
    },
    {
        question: "İlk şeker fabrikaları hangileridir?",
        options: [
            "Ankara ve İzmir",
            "Alpullu (1926) ve Uşak (1926)",
            "İstanbul ve Bursa",
            "Konya ve Kayseri",
            "Adana ve Gaziantep"
        ],
        correct: 1
    },
    {
        question: "Mustafa Kemal kiremit konusunda ne dedi?",
        options: [
            "İthal edelim",
            "Kiremit işini halledin, âleme rezil oluyoruz",
            "Önemli değil",
            "Sonra bakarız",
            "İhraç edelim"
        ],
        correct: 1
    },
    {
        question: "15 Mayıs 1927'de kabul edilen Teşvik-i Sanayi Kanunu kaç yıl vergi muafiyeti sağlıyordu?",
        options: [
            "10 yıl",
            "15 yıl",
            "20 yıl",
            "25 yıl",
            "30 yıl"
        ],
        correct: 1
    },
    {
        question: "9 Ocak 1925'te hangi kanun çıkarıldı?",
        options: [
            "Tarım Kanunu",
            "Yol Mükellefiyeti Kanunu",
            "Sanayi Kanunu",
            "Gümrük Kanunu",
            "Ticaret Kanunu"
        ],
        correct: 1
    },
    {
        question: "Cumhuriyetin ilk yıllarında en dinamik devlet işletmesi hangisiydi?",
        options: [
            "PTT",
            "Demiryolları",
            "Liman İşletmeleri",
            "Posta",
            "Telgraf"
        ],
        correct: 1
    },
    {
        question: "1927'de Ankara-Kayseri hattı kaç km'ydi?",
        options: [
            "200 km",
            "386 km",
            "500 km",
            "600 km",
            "700 km"
        ],
        correct: 1
    },
    {
        question: "1930'da Kayseri-Sivas hattı kaç km'ydi?",
        options: [
            "100 km",
            "222 km",
            "300 km",
            "400 km",
            "500 km"
        ],
        correct: 1
    },
    {
        question: "Kabotaj Kanunu hangi tarihte yürürlüğe girdi?",
        options: [
            "1924",
            "1 Temmuz 1926",
            "1927",
            "1928",
            "1929"
        ],
        correct: 1
    },
    {
        question: "Kabotaj Kanunu neyi düzenledi?",
        options: [
            "İhracat",
            "Türk limanları arasında eşya ve yolcu taşıma hakkı",
            "İthalat",
            "Gümrük",
            "Vergi"
        ],
        correct: 1
    },
    {
        question: "1923'te Türkiye'de kaç ulusal banka vardı?",
        options: [
            "10",
            "18",
            "25",
            "30",
            "40"
        ],
        correct: 1
    },
    {
        question: "1923'te Türkiye'de kaç yabancı banka vardı?",
        options: [
            "5",
            "13",
            "20",
            "25",
            "30"
        ],
        correct: 1
    },
    {
        question: "İş Bankası hangi yıl kuruldu?",
        options: [
            "1923",
            "1924",
            "1925",
            "1926",
            "1927"
        ],
        correct: 1
    },
    {
        question: "İş Bankası'nın Genel Müdürü kimdi?",
        options: [
            "İsmet İnönü",
            "Celal Bayar",
            "Mustafa Kemal",
            "Hasan Saka",
            "Şükrü Saracoğlu"
        ],
        correct: 1
    },
    {
        question: "İş Bankası'nın Yönetim Kurulu Başkanı kimdi?",
        options: [
            "İsmet İnönü",
            "Mahmut Celal Bey (Bayar)",
            "Celal Bayar",
            "Tevfik Rüştü Aras",
            "Şükrü Saracoğlu"
        ],
        correct: 1
    },
    {
        question: "İş Bankası'nın ilk kuruluş sermayesi ne kadardı?",
        options: [
            "500 bin",
            "1 milyon",
            "2 milyon",
            "5 milyon",
            "10 milyon"
        ],
        correct: 1
    },
    {
        question: "İş Bankası sermayesinin bir kısmı nereden geldi?",
        options: [
            "Yabancı yardımlar",
            "Hint Müslümanlarının Kurtuluş Savaşı'na gönderdiği yardımdan",
            "Devlet bütçesi",
            "Vergi gelirleri",
            "Gümrük gelirleri"
        ],
        correct: 1
    },
    {
        question: "1925-1929 arasında İş Bankası kaç şube açtı?",
        options: [
            "10",
            "28",
            "50",
            "100",
            "150"
        ],
        correct: 1
    },
    {
        question: "1930'da hangi banka Türkiye'nin en büyük bankası oldu?",
        options: [
            "İş Bankası",
            "Ziraat Bankası",
            "Emlak Bankası",
            "Halk Bankası",
            "Merkez Bankası"
        ],
        correct: 1
    },
    {
        question: "Sanayi ve Maadin Bankası'nın amacı neydi?",
        options: [
            "Tarım kredisi",
            "Devlete ait fabrikaları işletmek, finanse etmek",
            "Konut kredisi",
            "Tüketici kredisi",
            "İhracat kredisi"
        ],
        correct: 1
    },
    {
        question: "Sanayi ve Maadin Bankası hangi fabrikaların temelini atmıştır?",
        options: [
            "Tekstil fabrikaları",
            "Alpullu ve Uşak şeker fabrikaları",
            "Çimento fabrikaları",
            "Demir fabrikaları",
            "Kağıt fabrikaları"
        ],
        correct: 1
    },
    {
        question: "Emlak ve Eytam Bankası'nın sermaye kaynağı neydi?",
        options: [
            "Devlet bütçesi",
            "Eytam Sandıkları'nda biriken fonlar",
            "Yabancı yardımlar",
            "Vergi gelirleri",
            "Gümrük gelirleri"
        ],
        correct: 1
    },
    {
        question: "Emlak ve Eytam Bankası hangi sektöre hizmet etti?",
        options: [
            "Tarım",
            "İnşaat (konut ihtiyacı)",
            "Sanayi",
            "Ticaret",
            "Turizm"
        ],
        correct: 1
    },
    {
        question: "Emlak ve Eytam Bankası hangi yılda Türkiye Emlak Kredi Bankası'na dönüştü?",
        options: [
            "1940",
            "14 Haziran 1946",
            "1950",
            "1960",
            "1970"
        ],
        correct: 1
    },
    {
        question: "1923-1929 döneminde gümrük politikasının temel sorunu neydi?",
        options: [
            "İhracat",
            "Ekonominin temel sorunu",
            "İthalat",
            "Transit geçiş",
            "Kaçakçılık"
        ],
        correct: 1
    },
    {
        question: "İttihat ve Terakki Partisi kapitülasyonları ne zaman kaldırdı?",
        options: [
            "1913",
            "7 Eylül 1914",
            "1915",
            "1916",
            "1917"
        ],
        correct: 1
    },
    {
        question: "1916 Gümrük Tarifesi ne zaman değiştirildi?",
        options: [
            "1920",
            "1925 yılından sonra (sekiz katına çıkartıldı)",
            "1927",
            "1928",
            "1930"
        ],
        correct: 1
    },
    {
        question: "1929'da yeni gümrük tarifesi hangi ayda uygulandı?",
        options: [
            "Ocak",
            "Ekim",
            "Mart",
            "Haziran",
            "Aralık"
        ],
        correct: 1
    },
    {
        question: "1929 tarifesinde hangi ürünler gümrükten muaf oldu?",
        options: [
            "Lüks ürünler",
            "Tarım makineleri ve gereçleri",
            "Otomobiller",
            "Mücevherler",
            "Elektronik eşyalar"
        ],
        correct: 1
    },
    {
        question: "1929 tarifesinde hangi alanlara yüksek gümrük konuldu?",
        options: [
            "Ham madde",
            "İplik, kumaş, şeker, un gibi gelişmekte olan yerli sanayi alanları",
            "Tarım ürünleri",
            "Teknoloji",
            "İlaç"
        ],
        correct: 1
    },
    {
        question: "1924-1928 yılları arasında milli üretimin yüzde kaçı ihraç ediliyordu?",
        options: [
            "%5",
            "%11",
            "%20",
            "%30",
            "%40"
        ],
        correct: 1
    },
    {
        question: "Türkiye hangi tür mal ihraç ediyor, hangi tür mal ithal ediyordu?",
        options: [
            "Sanayi ürünü ihraç, ham madde ithal",
            "Hammadde ihraç, sınai tüketim malı ithal",
            "Teknoloji ihraç, tarım ürünü ithal",
            "Hizmet ihraç, ürün ithal",
            "Tarım ürünü ihraç ve ithal"
        ],
        correct: 1
    },
    {
        question: "Türkiye'nin dünya ticaretindeki payının en yüksek olduğu dönem hangisidir?",
        options: [
            "1920-1922",
            "1927-1929 (%3)",
            "1930-1932",
            "1935-1937",
            "1940-1942"
        ],
        correct: 1
    },
    {
        question: "1929'a kadar Türkiye'nin ticari ilişkide bulunduğu en önemli ülke hangisiydi?",
        options: [
            "İngiltere",
            "Fransa",
            "ABD",
            "Almanya",
            "İtalya"
        ],
        correct: 1
    },
    {
        question: "Almanya ve ABD Türkiye'den hangi ürünleri alıyordu?",
        options: [
            "Buğday",
            "Tütün, incir, kuru üzüm ve fındık",
            "Pamuk",
            "Yün",
            "Deri"
        ],
        correct: 1
    },
    {
        question: "Türkiye'nin dış ticaret fazlası hangi ülkelerle oluyordu?",
        options: [
            "İngiltere ve Fransa",
            "Yunanistan, Suriye ve Mısır",
            "Almanya ve İtalya",
            "ABD ve Japonya",
            "Rusya ve İran"
        ],
        correct: 1
    },
    {
        question: "1929 dünya bunalımı hangi borsanın çöküşü ile başladı?",
        options: [
            "Londra Borsası",
            "Wall Street Borsası",
            "Paris Borsası",
            "Tokyo Borsası",
            "Frankfurt Borsası"
        ],
        correct: 1
    },
    {
        question: "1929 bunalımından en az etkilenen ülke hangisiydi?",
        options: [
            "ABD",
            "SSCB",
            "İngiltere",
            "Fransa",
            "Almanya"
        ],
        correct: 1
    },
    {
        question: "Türkiye 1929 bunalımını hangi ülkenin deneyimlerinden takip etti?",
        options: [
            "ABD",
            "Avrupa ülkeleri",
            "Japonya",
            "Çin",
            "Hindistan"
        ],
        correct: 1
    },
    {
        question: "1930-1945 yılları arasında CHF ne gibi bir politika izledi?",
        options: [
            "Liberal",
            "Sıkı politika (Vali ve kaymakamlar parti başkanı olarak görev yaptı)",
            "Demokratik",
            "Sosyalist",
            "Karma"
        ],
        correct: 1
    },
    {
        question: "II. Dünya Savaşı'na doğru gidiş netleşince ne yapıldı?",
        options: [
            "Ordu küçültüldü",
            "Basın kontrol altına alındı",
            "Seçimler ertelendi",
            "Partiler kapatıldı",
            "Muhalefet yasağı getirildi"
        ],
        correct: 1
    },
    {
        question: "1929 bunalımı Türkiye'de neyi arttırdı?",
        options: [
            "Zenginliği",
            "Yoksulluk seviyesini",
            "İstihdamı",
            "Üretimi",
            "İhracatı"
        ],
        correct: 1
    },
    {
        question: "1929 bunalımı sonrası hangi parti kuruldu?",
        options: [
            "CHP",
            "Serbest Cumhuriyet Fırkası (Liberal anlayış)",
            "DP",
            "MHP",
            "DSP"
        ],
        correct: 1
    },
    {
        question: "1929 bunalımı Türk Lirası'nın hangi para birimi karşısında değer kaybetmesine neden oldu?",
        options: [
            "Dolar",
            "İngiliz Sterlini",
            "Frank",
            "Mark",
            "Yen"
        ],
        correct: 1
    },
    {
        question: "1929 bunalımı Türkiye'nin tarımsal mallardan oluşan dış satımını nasıl etkiledi?",
        options: [
            "Arttırdı",
            "Azalttı, döviz gelirini düşürdü",
            "Değiştirmedi",
            "İki katına çıkardı",
            "Durdurmadı"
        ],
        correct: 1
    },
    {
        question: "1929 bunalımı hangi politikaya geçişi hızlandırdı?",
        options: [
            "Liberal",
            "Devletçi politikalar",
            "Sosyalist",
            "Kapitalist",
            "Karma"
        ],
        correct: 1
    },
    {
        question: "Liberal anlayış 1929 sonrası ne oldu?",
        options: [
            "Güçlendi",
            "Etkisini kaybetti",
            "Değişmedi",
            "Arttı",
            "İkiye katlandı"
        ],
        correct: 1
    },
    {
        question: "Devletçi politikaya geçişte Atatürk'ün hangi gezisi etkili oldu?",
        options: [
            "1929 Trakya gezisi",
            "1930 Anadolu gezisi",
            "1931 İstanbul gezisi",
            "1932 İzmir gezisi",
            "1933 Ankara gezisi"
        ],
        correct: 1
    },
    {
        question: "1931'de CHF programına hangi kavram eklendi?",
        options: [
            "Liberalizm",
            "Devletçilik",
            "Sosyalizm",
            "Kapitalizm",
            "Komünizm"
        ],
        correct: 1
    },
    {
        question: "1938 tarihli 'İktisadi Devlet Teşekkülleri' Kanunu'nda ne belirtildi?",
        options: [
            "Sadece devlet yatırım yapacak",
            "Devletin yapacağı alanlarda özel teşebbüse de yer verileceği",
            "Özel sektör yasak",
            "Karma sistem olmayacak",
            "Yabancı sermaye giremeyecek"
        ],
        correct: 1
    },
    {
        question: "1930'larda yabancı sermayeye yaklaşım nasıldı?",
        options: [
            "Tamamen yasak",
            "Davetkar (1920-1930'da 66 anonim şirkette yabancı sermaye ortaklığı)",
            "Sınırlı",
            "Teşvik edilmedi",
            "Kontrol edildi"
        ],
        correct: 1
    },
    {
        question: "Türkiye'nin ilk on yılındaki ekonomik politikalar nerede saptandı?",
        options: [
            "Ankara'da",
            "İzmir İktisat Kongresi'nde",
            "İstanbul'da",
            "Lozan'da",
            "Sivas'ta"
        ],
        correct: 1
    },
    {
        question: "1923-1929 yılları arasında anlamlı bir sanayileşme oldu mu?",
        options: [
            "Evet çok fazla",
            "Hayır, olmadı",
            "Kısmen",
            "Sadece tekstilde",
            "Sadece gıdada"
        ],
        correct: 1
    },
    {
        question: "Cumhuriyet döneminde tarımsal artışın nedeni neydi?",
        options: [
            "Teknoloji transferi",
            "Nüfusun yeniden toprağa dönmesi",
            "Yabancı yatırım",
            "Devlet desteği",
            "Kredi kolaylığı"
        ],
        correct: 1
    },
    {
        question: "Aşar vergisinin kaldırılmasından sonra gelir açığını kapatmak için hangi vergiler artırıldı?",
        options: [
            "Sadece gelir vergisi",
            "Arazi vergisi, pamuklu ve yünlü dokumalardan alınan tüketim vergileri, şeker-gazyağı vergileri",
            "Sadece gümrük vergisi",
            "Sadece emlak vergisi",
            "Sadece kurumlar vergisi"
        ],
        correct: 1
    },
    {
        question: "Devletçilik hangi yılda CHP programına belirgin olarak girdi?",
        options: [
            "1930",
            "1932",
            "1935",
            "1937",
            "1940"
        ],
        correct: 1
    },
    {
        question: "Devletçilik hangi yılda Türk Devleti'nin özelliklerinden biri oldu?",
        options: [
            "1932",
            "1937",
            "1940",
            "1945",
            "1950"
        ],
        correct: 1
    },
    {
        question: "1930 tarih ve 1567 sayılı kanun hangisidir?",
        options: [
            "Gümrük Kanunu",
            "Türk Parası Kıymetini Koruma Hakkında Kanun",
            "Sanayi Kanunu",
            "Ticaret Kanunu",
            "Vergi Kanunu"
        ],
        correct: 1
    },
    {
        question: "1930'ların başında hangi kampanya başlatıldı?",
        options: [
            "İhracat kampanyası",
            "Yerli malı kullan kampanyası",
            "Üretim kampanyası",
            "Tasarruf kampanyası",
            "Eğitim kampanyası"
        ],
        correct: 1
    },
    {
        question: "1933'ten sonra millileştirme hangi alanlarda yoğunlaştı?",
        options: [
            "Sadece bankacılık",
            "Demiryolları, limanlar, elektrik, havagazı, su ve telefon",
            "Sadece sanayi",
            "Sadece tarım",
            "Sadece ticaret"
        ],
        correct: 1
    }
];