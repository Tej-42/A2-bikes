const BASE = location.hostname === "localhost"
    ? ""
    : "/a2-bikes";

const bikes = [
    { name: "Honda CBR 250 R", type: "SPORT", cubature: 249, cubature_round: 250, power: 19, cylinders: 1, manufacturer: "Honda", price: { min: 1750, max: 2500 }, years: { min: 2011, max: 2020 }, img_filter: "images/honda cbr 250 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+250r", color: "#cc0000" },
    { name: "Honda CBR 300 R", type: "SPORT", cubature: 286, cubature_round: 300, power: 22, cylinders: 1, manufacturer: "Honda", price: { min: 2800, max: 4200 }, years: { min: 2014, max: 2023 }, img_filter: "images/honda cbr 300 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+300", color: "#cc0000" },
    { name: "Honda CBR 400 R", type: "SPORT", cubature: 399, cubature_round: 400, power: 35, cylinders: 2, manufacturer: "Honda", price: { min: 4000, max: 6500 }, years: { min: 2013, max: new Date().getFullYear() }, img_filter: "images/honda cbr 400 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+400", color: "#cc0000" },
    { name: "Honda CBR 450 SR", type: "SPORT", cubature: 447, cubature_round: 450, power_real: 37, power: 35, cylinders: 2, manufacturer: "Honda", price: { min: 1800, max: 3500 }, years: { min: 1989, max: 1994 }, img_filter: "images/honda cbr 450 sr.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+450+sr", color: "#cc0000" },
    { name: "Honda CBR 500 R", type: "SPORT", cubature: 471, cubature_round: 500, power: 35, cylinders: 2, manufacturer: "Honda", price: { min: 3400, max: 6000 }, years: { min: 2013, max: new Date().getFullYear() }, img_filter: "images/honda cbr 500 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+500r", color: "#cc0000" },
    { name: "Honda CBR 600 R", type: "SPORT", cubature: 599, cubature_round: 600, power_real: 87, power: 35, cylinders: 4, manufacturer: "Honda", price: { min: 3000, max: 4000 }, years: { min: 2003, max: 2016 }, img_filter: "images/honda cbr 600 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+600r", color: "#cc0000" },
    { name: "Honda CBR 600 F", type: "SPORT", cubature: 599, cubature_round: 600, power_real: 75, power: 35, cylinders: 4, manufacturer: "Honda", price: { min: 2000, max: 3000 }, years: {min: 1984, max: 2013 }, img_filter: "images/honda cbr 600 f.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+600f", color: "#cc0000" },
    { name: "Kawasaki Ninja 250", type: "SPORT", cubature: 248, cubature_round: 250, power: 26, cylinders: 2, manufacturer: "Kawasaki", price: { min: 2200, max: 3000 }, years: { min: 1988, max: new Date().getFullYear() }, img_filter: "images/kawasaki ninja 250.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+ninja+250", color: "#39ff14" },
    { name: "Kawasaki Ninja 300", type: "SPORT", cubature: 296, cubature_round: 300, power: 29, cylinders: 2, manufacturer: "Kawasaki", price: { min: 3800, max: 4000 }, years: { min: 2012, max: 2017 }, img_filter: "images/kawasaki ninja 300.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+ninja+300", color: "#39ff14" },
    { name: "Kawasaki Ninja 400", type: "SPORT", cubature: 399, cubature_round: 400, power: 35, cylinders: 2, manufacturer: "Kawasaki", price: { min: 4000, max: 6500 }, years: { min: 2018, max: new Date().getFullYear() }, img_filter: "images/kawasaki ninja 400.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+ninja+400", color: "#39ff14" },
    { name: "Kawasaki Ninja 500", type: "SPORT", cubature: 451, cubature_round: 500, power_real: 38, power: 35, cylinders: 2, manufacturer: "Kawasaki", price: { min: 5500, max: 7000 }, years: { min: 2024, max: new Date().getFullYear() }, img_filter: "images/kawasaki ninja 500.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+ninja+500", color: "#39ff14" },
    { name: "Kawasaki Ninja 600", type: "SPORT", cubature: 599, cubature_round: 600, power_real: 80, power: 35, cylinders: 2, manufacturer: "Kawasaki", price: { min: 1800, max: 4000 }, years: { min: 1995, max: 2002 }, img_filter: "images/kawasaki ninja 600.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+ninja+600", color: "#39ff14" },
    { name: "Kawasaki GPZ 500", type: "SPORT", cubature: 498, cubature_round: 500, power_real: 44, power: 35, cylinders: 2, manufacturer: "Kawasaki", price: { min: 2000 , max: 2200 }, years: { min: 1987, max: 2009}, img_filter: "images/kawasaki gpz 500.jpg", bazos_url:"https://motocykle.bazos.sk/cestne/?hledat=kawasaki+gpz+500", color: "#39ff14" },
    { name: "Kawasaki ZZR 600", type: "SPORT", cubature: 599, cubature_round: 600, power_real: 72, power: 35, cylinders: 4, manufacturer: "Kawasaki", price: { min: 1600, max: 2300 }, years: { min: 1990, max: 2008 }, img_filter: "images/kawasaki zzr 600.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+zzr+600", color: "#39ff14" },
    { name: "Suzuki GSX 250 R", type: "SPORT", cubature: 248, cubature_round: 250, power: 18, cylinders: 2, manufacturer: "Suzuki", price: { min: 3000, max: 4500 }, years: { min: 2017, max: new Date().getFullYear() }, img_filter: "images/suzuki gsx 250 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=suzuki+gsxr+250", color: "#1ab9d9" },
    { name: "Suzuki GSX 400 R", type: "SPORT", cubature: 399, cubature_round: 400, power: 33, cylinders: 4, manufacturer: "Suzuki", price: { min: 3000, max: 4500 }, years: { min: 1984, max: 1996 }, img_filter: "images/suzuki gsx 400 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=suzuki+gsxr+400", color: "#1ab9d9" },
    { name: "Suzuki GSX 600 R", type: "SPORT", cubature: 599, cubature_round: 600, power_real: 70, power: 35, cylinders: 4, manufacturer: "Suzuki", price: { min: 1800, max: 4000 }, years: { min: 1992, max: new Date().getFullYear() }, img_filter: "images/suzuki gsx 600 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=suzuki+gsxr+600", color: "#1ab9d9" },
    { name: "Suzuki GSX 650 F", type: "SPORT", cubature: 656, cubature_round: 650, power_real: 64, power: 35, cylinders: 4, manufacturer: "Suzuki", price: { min: 2500, max: 3500 }, years: { min: 2008, max: 2015 }, img_filter: "images/suzuki gsx 650 f.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=suzuki+gsx+650f", color: "#1ab9d9" },
    { name: "Yamaha YZF R3", type: "SPORT", cubature: 321, cubature_round: 300, power: 31, cylinders: 2, manufacturer: "Yamaha", price: { min: 4000, max: 5000 }, years: { min: 2015, max: new Date().getFullYear() }, img_filter: "images/yamaha yzf r3.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=yamaha+r3", color: "#0057ff" },
    { name: "Yamaha YZF R6", type: "SPORT", cubature: 599, cubature_round: 600, power_real: 87, power: 35, cylinders: 4, manufacturer: "Yamaha", price: { min: 2000, max: 3000 }, years: { min: 1999, max: 2024 }, img_filter: "images/yamaha yzf r6.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=yamaha+r6", color: "#0057ff" },
    { name: "Yamaha YZF R7", type: "SPORT", cubature: 689, cubature_round: 700, power_real: 54, power: 35, cylinders: 2, manufacturer: "Yamaha", price: { min: 7000, max: 9000 }, years: { min: 1999, max: new Date().getFullYear() }, img_filter: "images/yamaha yzf r7.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=yamaha+r7", color: "#0057ff" },
    { name: "Yamaha FZR 600", type: "SPORT", cubature: 599, cubature_round: 600, power_real: 66, power: 35, cylinders: 4, manufacturer: "Yamaha", price: { min: 1500, max: 2500 }, years: { min: 1989, max: 1999 }, img_filter: "images/yamaha fzr 600.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=yamaha+fzr+600", color: "#0057ff" },
    { name: "KTM RC 390", type: "SPORT", cubature: 373, cubature_round: 400, power: 32, cylinders: 1, manufacturer: "KTM", price: { min: 3000, max: 4000 }, years: { min: 2014, max: new Date().getFullYear() }, img_filter: "images/ktm rc 390.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=ktm+rc+390", color: "#ff6f00" },
    { name: "CFmoto 300 SR; 450 SS", type: "SPORT", cubature: 292, cubature_round: 300, power: 21, cylinders: 1, manufacturer: "CFmoto", price: { min: 3000, max: 4500 }, years: {min: 2020, max: new Date().getFullYear() }, img_filter: "images/cfmoto 300 sr.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=cfmoto+300+sr", color: "#cfcfcf" },
    { name: "Honda CB 250 F", type: "NAKED", cubature: 249, cubature_round: 250, power: 20, cylinders: 1, manufacturer: "Honda", price: { min: 2000, max: 2500 }, years: { min: 2014, max: 2017 }, img_filter: "images/honda cb 250 f.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbf+250", color: "#cc0000" },
    { name: "Honda CB 300 R", type: "NAKED", cubature: 286, cubature_round: 300, power: 23, cylinders: 1, manufacturer: "Honda", price: { min: 3500, max: 5000 }, years: { min: 2018, max: new Date().getFullYear() }, img_filter: "images/honda cb 300 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbr+300", color: "#cc0000" },
    { name: "Honda CB 400 F", type: "NAKED", cubature: 399, cubature_round: 400, power: 35, cylinders: 2, manufacturer: "Honda", price: { min: 4000, max: 6000 }, years: { min: 2013, max: new Date().getFullYear() }, img_filter: "images/honda cb 400 f.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbf+400", color: "#cc0000" },
    { name: "Honda CB 500 F", type: "NAKED", cubature: 471, cubature_round: 500, power: 35, cylinders: 2, manufacturer: "Honda", price: { min: 1800, max: 3000 }, years: { min: 2013, max: new Date().getFullYear() }, img_filter: "images/honda cb 500 f.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbf+500", color: "#cc0000" },
    { name: "Honda CB 600 F Hornet", type: "NAKED", cubature: 599, cubature_round: 600, power_real: 75, power: 35, cylinders: 4, manufacturer: "Honda", price: { min: 2000, max: 4000 }, years: { min: 1998, max: 2013 }, img_filter: "images/honda cb 600 f hornet.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cb+600+f", color: "#cc0000" },
    { name: "Honda CB 650 F", type: "NAKED", cubature: 649, cubature_round: 650, power_real: 64, power: 35, cylinders: 4, manufacturer: "Honda", price: { min: 4500, max: 7000 }, years: { min: 2014, max: 2018 }, img_filter: "images/honda cb 650 f.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=honda+cbf+650", color: "#cc0000" },
    { name: "Kawasaki Z 250", type: "NAKED", cubature: 249, cubature_round: 250, power: 23, cylinders: 2, manufacturer: "Kawasaki", price: { min: 2500, max: 3800 }, years: { min: 2013, max: 2016 }, img_filter: "images/kawasaki z 250.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+z+250", color: "#39ff14" },
    { name: "Kawasaki Z 300", type: "NAKED", cubature: 296, cubature_round: 300, power: 29, cylinders: 2, manufacturer: "Kawasaki", price: { min: 2500, max: 3500 }, years: { min: 2015, max: 2018 }, img_filter: "images/kawasaki z 300.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=kawasaki+z+300", color: "#39ff14" },
    { name: "Kawasaki Z 400", type: "NAKED", cubature: 399, cubature_round: 400, power: 33, cylinders: 2, manufacturer: "Kawasaki", price: { min: 5500, max: 6500 }, years: { min: 2018, max: new Date().getFullYear() }, img_filter: "images/kawasaki z 400.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=kawasaki+z+400", color: "#39ff14" },
    { name: "Kawasaki Z 500", type: "NAKED", cubature: 451, cubature_round: 500, power: 33, cylinders: 2, manufacturer: "Kawasaki", price: { min: 5500, max: 6500 }, years: { min: 2024, max: new Date().getFullYear() }, img_filter: "images/kawasaki z 500.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=kawasaki+z+500", color: "#39ff14" },
    { name: "Kawasaki Z 650", type: "NAKED", cubature: 649, cubature_round: 650, power_real: 50, power: 35, cylinders: 2, manufacturer: "Kawasaki", price: { min: 4000, max: 6500 }, years: { min: 2017, max: new Date().getFullYear() }, img_filter: "images/kawasaki z 650.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=kawasaki+z+650", color: "#39ff14" },
    { name: "Kawasaki ER-6N", type: "NAKED", cubature: 649, cubature_round: 650, power_real: 53, power: 35, cylinders: 2, manufacturer: "Kawasaki", price: { min: 1800, max: 4500 }, years: { min: 2006, max: 2016 }, img_filter: "images/kawasaki er 6 n.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=kawasaki+er6n", color: "#39ff14" },
    { name: "Suzuki GSR 600", type: "NAKED", cubature: 599, cubature_round: 600, power_real: 72, power: 35, cylinders: 4, manufacturer: "Suzuki", price: { min: 2000, max: 3500 }, years: { min: 2006, max: 2011 }, img_filter: "images/suzuki gsr 600.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=suzuki+gsr+600", color: "#1ab9d9" },
    { name: "Suzuki GSR 750", type: "NAKED", cubature: 749, cubature_round: 750, power_real: 78, power: 35, cylinders: 4, manufacturer: "Suzuki", price: { min: 4500, max: 5000 }, years: { min: 2011, max: 2016 }, img_filter: "images/suzuki gsr 750.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=suzuki+gsr+750", color: "#1ab9d9" },
    { name: "Suzuki GSX-S 750", type: "NAKED", cubature: 749, cubature_round: 750, power_real: 84, power: 35, cylinders: 4, manufacturer: "Suzuki", price: { min: 6000, max: 7000 }, years: { min: 2017, max: new Date().getFullYear() }, img_filter: "images/suzuki gsx s 750.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=suzuki+gsxs+750", color: "#1ab9d9" },
    { name: "Suzuki SV 650", type: "NAKED", cubature: 645, cubature_round: 650, power_real: 55, power: 35, cylinders: 2, manufacturer: "Suzuki", price: { min: 1800, max: 5000 }, years: { min: 1999, max: new Date().getFullYear() }, img_filter: "images/suzuki sv 650.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=suzuki+sv+650", color: "#1ab9d9" },
    { name: "Yamaha MT-03", type: "NAKED", cubature: 321, cubature_round: 300, power: 31, cylinders: 2, manufacturer: "Yamaha", price: { min: 2000, max: 4000 }, years: { min: 2016, max: new Date().getFullYear() }, img_filter: "images/yamaha mt 03.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=yamaha+mt+03", color: "#0057ff" },
    { name: "Yamaha MT-07", type: "NAKED", cubature: 689, cubature_round: 700, power_real: 54, power: 35, cylinders: 2, manufacturer: "Yamaha", price: { min: 4000, max: 6500 }, years: { min: 2014, max: new Date().getFullYear() }, img_filter: "images/yamaha mt 07.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=yamaha+mt+07", color: "#0057ff" },
    { name: "Yamaha FZ6", type: "NAKED", cubature: 600, cubature_round: 600, power_real: 72, power: 35, cylinders: 4, manufacturer: "Yamaha", price: { min: 1500, max: 3000 }, years: { min: 2004, max: 2010 }, img_filter: "images/yamaha fz 6.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=yamaha+fz6", color: "#0057ff" },
    { name: "Yamaha FZ8", type: "NAKED", cubature: 779, cubature_round: 800, power_real: 78, power: 35, cylinders: 4, manufacturer: "Yamaha", price: { min: 3200, max: 5200 }, years: { min: 2010, max: 2016 }, img_filter: "images/yamaha fz 8.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/20/?hledat=yamaha+fz8", color: "#0057ff" },
    { name: "KTM Duke 390", type: "NAKED", cubature: 373, cubature_round: 400, power: 32, cylinders: 1, manufacturer: "KTM", price: { min: 2000, max: 4500 }, years: {min: 2013, max: new Date().getFullYear() }, img_filter: "images/ktm duke 390.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=ktm+duke+390", color: "#ff6f00" },
    { name: "KTM Duke 690", type: "NAKED", cubature: 690, cubature_round: 700, power_real: 54, power: 35, cylinders: 1, manufacturer: "KTM", price: { min: 3000, max: 5000 }, years: { min: 2008, max: new Date().getFullYear() }, img_filter: "images/ktm duke 690.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=ktm+duke+690", color: "#ff6f00" },
    { name: "KTM Duke 790", type: "NAKED", cubature: 799, cubature_round: 800, power_real: 77, power: 35, cylinders: 2, manufacturer: "KTM", price: { min: 4500, max: 7000 }, years: { min: 2017, max: new Date().getFullYear() }, img_filter: "images/ktm duke 790.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=ktm+duke+790", color: "#ff6f00" },
    { name: "CFmoto 300 NK", type: "NAKED", cubature: 292, cubature_round: 300, power: 21, cylinders: 1, manufacturer: "CFmoto", price: { min: 3000, max: 3500 }, years: { min: 2019, max: new Date().getFullYear() }, img_filter: "images/cfmoto 300 nk.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=cfmoto+300+nk", color: "#cfcfcf" },
    { name: "CFmoto 400 NK", type: "NAKED", cubature: 400, cubature_round: 400, power: 30, cylinders: 2, manufacturer: "CFmoto", price: { min: 3000, max: 4500 }, years: { min: 2018, max: new Date().getFullYear() }, img_filter: "images/cfmoto 400 nk.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=cfmoto+400+nk", color: "#cfcfcf" },
    { name: "CFmoto 450 NK", type: "NAKED", cubature: 449, cubature_round: 450, power: 35, cylinders: 2, manufacturer: "CFmoto", price: { min: 4500, max: 5500 }, years: { min: 2023, max: new Date().getFullYear() }, img_filter: "images/cfmoto 450 nk.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=cfmoto+450+nk", color: "#cfcfcf" },
    { name: "CFmoto 650 NK", type: "NAKED", cubature: 649, cubature_round: 650, power_real: 45, power: 35, cylinders: 2, manufacturer: "CFmoto", price: { min: 4000, max: 5200 }, years: { min: 2012, max: new Date().getFullYear() }, img_filter: "images/cfmoto 650 nk.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=cfmoto+650+nk", color: "#cfcfcf" },
    { name: "BMW G 310 R", type: "NAKED", cubature: 313, cubature_round: 300, power: 25, cylinders: 1, manufacturer: "BMW", price: { min: 4000, max: 4500 }, years: { min: 2016, max: new Date().getFullYear() }, img_filter: "images/bmw g 310 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=bmw+g+310+r#031e49", color: "#031e49" },
    { name: "Voge 525 R", type: "NAKED", cubature: 494, cubature_round: 500, power: 35, cylinders: 2, manufacturer: "Voge", price: { min: 4500, max: 6000 }, years: { min: 2023, max: new Date().getFullYear() }, img_filter: "images/voge 525 r.jpg", bazos_url: "https://motocykle.bazos.sk/cestne/?hledat=voge+525+r", color: "#555555" },
];


let currentPage = "home";

function slugify(text) {
    return text
        .toLowerCase()
        .replaceAll(" ", "-")
        .replace(/[^a-z0-9-]/g, "");
}

function navigate(path) {
    history.pushState(null, "", BASE + path);
    router();
}

function router() {
    let path = window.location.pathname.replace(BASE, "") || "/";

    if (path === "" || path === "/") {
        showPage("home");
    } else if (path === "/favorites") {
        showPage("favorites");
    } else if (path === "/document") {
        showPage("document");
    } else if (path === "/contact") {
        showPage("contact");
    } else if (path === "/filter-all") {
        showPage("filter-all");
    } else if (path === "/filter-type") {
        showPage("filter-type");
    } else if (path === "/filter-cubature") {
        showPage("filter-cubature");
    } else if (path === "/filter-power") {
        showPage("filter-power");
    } else if (path === "/filter-price") {
        showPage("filter-price");
    } else if (path === "/filter-cylinders") {
        showPage("filter-cylinders");
    } else if (path === "/filter-manufacturers") {
        showPage("filter-manufacturers");
    } else if (path === "/filter-years") {
        showPage("filter-years");
    } else if (path.startsWith("/bike/")) {
        const slug = path.replace("/bike/", "");
        const bike = bikes.find(b => slugify(b.name) === slug);

        if (bike) {
            showBike(bike.name);
        } else {
            showPage("home");
        }
    } else {
        showPage("home");
    }
}

window.addEventListener("popstate", router);

function getFavorites() {
    return JSON.parse(localStorage.getItem("favoriteBikes")) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem("favoriteBikes", JSON.stringify(favorites));
}

function isFavorite(name) {
    return getFavorites().includes(name);
}

function toggleFavorite(name, event) {
    event.stopPropagation();

    let favorites = getFavorites();

    if (favorites.includes(name)) {
        favorites = favorites.filter(f => f !== name);
    } else {
        favorites.push(name);
    }

    saveFavorites(favorites);
    updateFavoritesCount();
    showPage(currentPage);
}

function updateFavoritesCount() {
    const countEl = document.getElementById("favorites-count");
    if (countEl) {
        countEl.textContent = `(${getFavorites().length})`;
    }
}

function bikeCard(bike, extra = "") {
    return `
        <div class="bike-box" style="--bike-color:${bike.color}" onclick="navigate('/bike/${slugify(bike.name)}')">
            <button class="favorite-star ${isFavorite(bike.name) ? "active" : ""}" onclick="toggleFavorite('${bike.name}', event)">★</button>
            <img src="${bike.img_filter || "images/no-image.jpg"}" alt="${bike.name}">
            <h3>${bike.name}</h3>
            ${extra}
        </div>
    `;
}

function showPage(page) {
    currentPage = page;

    const content = document.getElementById("content");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => link.classList.remove("active"));

    if (page === "home") {
        navLinks[0].classList.add("active");

        content.innerHTML = `
            <div class="introduction">
                <h2>Welcome to the A2 Motorbike Database</h2>
                <p>Browse through a complete list of A2-compatible motorcycles, filter by power,
                manufacturer, type, year, price and more.</p>
            </div>

            <div class="filters-selector">
                <div class="filter-box" onclick="navigate('/filter-all')">
                    <h3>See every bike</h3>
                </div>

                <div class="filter-box" onclick="navigate('/filter-type')">
                    <h3>See bikes according to its type</h3>
                </div>

                <div class="filter-box" onclick="navigate('/filter-cubature')">
                    <h3>See bikes according to its cubature</h3>
                </div>

                <div class="filter-box" onclick="navigate('/filter-power')">
                    <h3>See bikes according to its power</h3>
                </div>

                <div class="filter-box" onclick="navigate('/filter-price')">
                    <h3>See bikes according to its price</h3>
                </div>

                <div class="filter-box" onclick="navigate('/filter-cylinders')">
                    <h3>See bikes according to number of its cylinders</h3>
                </div>

                <div class="filter-box" onclick="navigate('/filter-manufacturers')">
                    <h3>See bikes according to its manufacturer</h3>
                </div>

                <div class="filter-box" onclick="navigate('/filter-years')">
                    <h3>See bikes according to years when it was made</h3>
                </div>
            </div>
        `;
    }

    else if (page === "filter-all") {
        content.innerHTML = `
            <h2>All bikes</h2>
            <div class="bikes-grid">
                ${bikes.map(bike => bikeCard(bike)).join("")}
            </div>
        `;
    }

    else if (page === "filter-type") {
        const uniqueType = [...new Set(bikes.map(b => b.type).filter(Boolean))];

        content.innerHTML = `
            <h2>Filter by Type</h2>
            <div class="filter-controls">
                ${uniqueType.map(type => `
                    <label>
                        <input type="checkbox" name="type" value="${type}"> ${type}
                    </label>
                `).join("")}
            </div>

            <div id="bikesContainer" class="bikes-grid"></div>
        `;

        const checkboxes = document.querySelectorAll('input[name="type"]');
        const bikesContainer = document.getElementById("bikesContainer");

        function filterBikes() {
            const selected = Array.from(checkboxes).filter(ch => ch.checked).map(ch => ch.value);
            const filtered = selected.length ? bikes.filter(b => selected.includes(b.type)) : bikes;

            bikesContainer.innerHTML = filtered.map(bike =>
                bikeCard(bike, `<p>${bike.type}</p>`)
            ).join("");
        }

        checkboxes.forEach(ch => ch.addEventListener("change", filterBikes));
        filterBikes();
    }

    else if (page === "filter-cubature") {
        const uniqueCubature = [...new Set(bikes.map(b => b.cubature_round).filter(Boolean))];

        content.innerHTML = `
            <h2>Filter by Cubature</h2>
            <div class="filter-controls">
                ${uniqueCubature.map(cub => `
                    <label>
                        <input type="checkbox" name="cubature_round" value="${cub}"> ${cub}
                    </label>
                `).join("")}
            </div>

            <div id="bikesContainer" class="bikes-grid"></div>
        `;

        const checkboxes = document.querySelectorAll('input[name="cubature_round"]');
        const bikesContainer = document.getElementById("bikesContainer");

        function filterBikes() {
            const selected = Array.from(checkboxes).filter(ch => ch.checked).map(ch => Number(ch.value));
            const filtered = selected.length ? bikes.filter(b => selected.includes(b.cubature_round)) : bikes;

            bikesContainer.innerHTML = filtered.map(bike => bikeCard(bike)).join("");
        }

        checkboxes.forEach(ch => ch.addEventListener("change", filterBikes));
        filterBikes();
    }

    else if (page === "filter-power") {
        content.innerHTML = `
            <h2>Filter by Power</h2>
            <div class="filter-controls">
                <div class="dual-slider">
                    <input type="range" id="minPower" min="0" max="100" value="0" step="1">
                    <input type="range" id="maxPower" min="0" max="100" value="100" step="1">
                    <div class="slider-track"></div>
                </div>
                <div class="slider-values">
                    <span>Min: <span id="minPowerValue">0</span> kW</span>
                    <span>Max: <span id="maxPowerValue">100</span> kW</span>
                </div>
            </div>
            <div id="bikesContainer" class="bikes-grid"></div>
        `;

        const minPower = document.getElementById("minPower");
        const maxPower = document.getElementById("maxPower");
        const minPowerValue = document.getElementById("minPowerValue");
        const maxPowerValue = document.getElementById("maxPowerValue");
        const track = document.querySelector(".slider-track");
        const bikesContainer = document.getElementById("bikesContainer");

        function updateSlider() {
            let min = parseInt(minPower.value);
            let max = parseInt(maxPower.value);

            if (max < min) {
                [minPower.value, maxPower.value] = [max, min];
                min = parseInt(minPower.value);
                max = parseInt(maxPower.value);
            }

            minPowerValue.textContent = min;
            maxPowerValue.textContent = max;

            const percent1 = (min / minPower.max) * 100;
            const percent2 = (max / maxPower.max) * 100;
            track.style.left = percent1 + "%";
            track.style.width = (percent2 - percent1) + "%";

            const filtered = bikes.filter(b => {
                const power = b.power ?? b.power_real;
                return power !== null && power !== undefined && power >= min && power <= max;
            });

            bikesContainer.innerHTML = filtered.length
                ? filtered.map(bike => bikeCard(bike, `<p>${bike.power ?? bike.power_real} kW</p>`)).join("")
                : "<p>No bikes found in this power range.</p>";
        }

        minPower.addEventListener("input", updateSlider);
        maxPower.addEventListener("input", updateSlider);
        updateSlider();
    }

    else if (page === "filter-price") {
        content.innerHTML = `
            <h2>Filter by Price</h2>
            <div class="filter-controls">
                <div class="dual-slider">
                    <input type="range" id="minPrice" min="0" max="10000" value="0" step="100">
                    <input type="range" id="maxPrice" min="0" max="10000" value="10000" step="100">
                    <div class="slider-track"></div>
                </div>
                <div class="slider-values">
                    <span>Min: <span id="minPriceValue">0</span> €</span>
                    <span>Max: <span id="maxPriceValue">10000</span> €</span>
                </div>
            </div>
            <div id="bikesContainer" class="bikes-grid"></div>
        `;

        const minPrice = document.getElementById("minPrice");
        const maxPrice = document.getElementById("maxPrice");
        const minPriceValue = document.getElementById("minPriceValue");
        const maxPriceValue = document.getElementById("maxPriceValue");
        const track = document.querySelector(".slider-track");
        const bikesContainer = document.getElementById("bikesContainer");

        function updatePriceSlider() {
            let min = parseInt(minPrice.value);
            let max = parseInt(maxPrice.value);

            if (max < min) {
                [minPrice.value, maxPrice.value] = [max, min];
                min = parseInt(minPrice.value);
                max = parseInt(maxPrice.value);
            }

            minPriceValue.textContent = min;
            maxPriceValue.textContent = max;

            const percent1 = (min / minPrice.max) * 100;
            const percent2 = (max / maxPrice.max) * 100;
            track.style.left = percent1 + "%";
            track.style.width = (percent2 - percent1) + "%";

            const filtered = bikes.filter(b => {
                if (!b.price) return false;

                const bikeMin = b.price.min ?? b.price;
                const bikeMax = b.price.max ?? b.price;

                return bikeMax >= min && bikeMin <= max;
            });

            bikesContainer.innerHTML = filtered.length
                ? filtered.map(bike => bikeCard(bike, `<p>${bike.price.min}-${bike.price.max} €</p>`)).join("")
                : "<p>No bikes found in this price range.</p>";
        }

        minPrice.addEventListener("input", updatePriceSlider);
        maxPrice.addEventListener("input", updatePriceSlider);
        updatePriceSlider();
    }

    else if (page === "filter-cylinders") {
        const uniqueCylinders = [...new Set(bikes.map(b => b.cylinders).filter(Boolean))];

        content.innerHTML = `
            <h2>Filter by number of Cylinders</h2>
            <div class="filter-controls">
                ${uniqueCylinders.map(cyl => `
                    <label>
                        <input type="checkbox" name="cylinders" value="${cyl}"> ${cyl}
                    </label>
                `).join("")}
            </div>

            <div id="bikesContainer" class="bikes-grid"></div>
        `;

        const checkboxes = document.querySelectorAll('input[name="cylinders"]');
        const bikesContainer = document.getElementById("bikesContainer");

        function filterBikes() {
            const selected = Array.from(checkboxes).filter(ch => ch.checked).map(ch => Number(ch.value));
            const filtered = selected.length ? bikes.filter(b => selected.includes(b.cylinders)) : bikes;

            bikesContainer.innerHTML = filtered.map(bike => bikeCard(bike)).join("");
        }

        checkboxes.forEach(ch => ch.addEventListener("change", filterBikes));
        filterBikes();
    }

    else if (page === "filter-manufacturers") {
        const uniqueManufacturers = [...new Set(bikes.map(b => b.manufacturer).filter(Boolean))];

        content.innerHTML = `
            <h2>Filter by Manufacturer</h2>
            <div class="filter-controls">
                ${uniqueManufacturers.map(man => `
                    <label>
                        <input type="checkbox" name="manufacturer" value="${man}"> ${man}
                    </label>
                `).join("")}
            </div>

            <div id="bikesContainer" class="bikes-grid"></div>
        `;

        const checkboxes = document.querySelectorAll('input[name="manufacturer"]');
        const bikesContainer = document.getElementById("bikesContainer");

        function filterBikes() {
            const selected = Array.from(checkboxes).filter(ch => ch.checked).map(ch => ch.value);
            const filtered = selected.length ? bikes.filter(b => selected.includes(b.manufacturer)) : bikes;

            bikesContainer.innerHTML = filtered.map(bike => bikeCard(bike)).join("");
        }

        checkboxes.forEach(ch => ch.addEventListener("change", filterBikes));
        filterBikes();
    }

    else if (page === "filter-years") {
        const currentYear = new Date().getFullYear();

        content.innerHTML = `
            <h2>Filter by Years</h2>
            <div class="filter-controls">
                <div class="dual-slider">
                    <input type="range" id="minYears" min="1980" max="${currentYear}" value="1980" step="1">
                    <input type="range" id="maxYears" min="1980" max="${currentYear}" value="${currentYear}" step="1">
                    <div class="slider-track"></div>
                </div>
                <div class="slider-values">
                    <span>Min: <span id="minYearsValue">1980</span></span>
                    <span>Max: <span id="maxYearsValue">${currentYear}</span></span>
                </div>
            </div>
            <div id="bikesContainer" class="bikes-grid"></div>
        `;

        const minYears = document.getElementById("minYears");
        const maxYears = document.getElementById("maxYears");
        const minYearsValue = document.getElementById("minYearsValue");
        const maxYearsValue = document.getElementById("maxYearsValue");
        const track = document.querySelector(".slider-track");
        const bikesContainer = document.getElementById("bikesContainer");

        function updateYearsSlider() {
            let min = parseInt(minYears.value);
            let max = parseInt(maxYears.value);

            if (max < min) {
                [minYears.value, maxYears.value] = [max, min];
                min = parseInt(minYears.value);
                max = parseInt(maxYears.value);
            }

            minYearsValue.textContent = min;
            maxYearsValue.textContent = max;

            const percent1 = (min - 1980) / (currentYear - 1980) * 100;
            const percent2 = (max - 1980) / (currentYear - 1980) * 100;
            track.style.left = percent1 + "%";
            track.style.width = (percent2 - percent1) + "%";

            const filtered = bikes.filter(b => {
                if (!b.years) return false;

                const bikeMin = b.years.min ?? b.years;
                const bikeMax = b.years.max ?? b.years;

                return bikeMax >= min && bikeMin <= max;
            });

            bikesContainer.innerHTML = filtered.length
                ? filtered.map(bike => bikeCard(bike, `<p>${bike.years.min}-${bike.years.max}</p>`)).join("")
                : "<p>No bikes found in this years range.</p>";
        }

        minYears.addEventListener("input", updateYearsSlider);
        maxYears.addEventListener("input", updateYearsSlider);
        updateYearsSlider();
    }

    else if (page === "favorites") {
        navLinks[1].classList.add("active");

        const favoriteNames = JSON.parse(localStorage.getItem("favoriteBikes")) || [];
        const favoriteBikes = bikes.filter(bike => favoriteNames.includes(bike.name));

        content.innerHTML = `
            <div class="favorites-header">
                <h2>Favorite bikes</h2>
            </div>

            <div class="bikes-grid">
                ${
                    favoriteBikes.length
                    ? favoriteBikes.map(bike => bikeCard(bike)).join("")
                    : "<p>You have no favorite bikes yet.</p>"
                }
            </div>
        `;
    }

    else if (page === "document") {
        navLinks[2].classList.add("active");

        fetch("prehovor-do-duse.html")
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
            })
            .catch(() => {
                content.innerHTML = "<p>Document could not be loaded.</p>";
            });
    }

    else if (page === "contact") {
        navLinks[3].classList.add("active");

        content.innerHTML = `
            <div class="contacts">
                <h2>Contact</h2>
                <p>Some mistakes or need help? Contact me via:
                <a href="mailto:matejcorba10@gmail.com">matejcorba10@gmail.com</a></p>
            </div>
        `;
    }
}

function showBike(name) {
    const content = document.getElementById("content");
    const bike = bikes.find(b => b.name === name);

    if (!bike) {
        content.innerHTML = `<p>Bike not found.</p>`;
        return;
    }

    const priceText = bike.price ? `${bike.price.min} - ${bike.price.max} €` : "Unknown";
    const restrictedText = bike.power ? ` (restricted: ${bike.power} kW)` : "";

    content.innerHTML = `
        <div class="bike-detail">
            <h2>${bike.name}</h2>
            <p><strong>Manufacturer:</strong> ${bike.manufacturer}</p>
            <p><strong>Type:</strong> ${bike.type}</p>
            <p><strong>Cubature:</strong> ${bike.cubature} cc</p>
            <p><strong>Power:</strong> ${bike.power_real} kW${restrictedText}</p>
            <p><strong>Cylinders:</strong> ${bike.cylinders}</p>
            <p><strong>Years:</strong> ${bike.years.min} - ${bike.years.max}</p>
            <p><strong>Price:</strong> ${priceText}</p>

            <p>
                <a href="${bike.bazos_url}" target="_blank" class="buy-button">
                    View listings / Buy this bike
                </a>
            </p>

            <button onclick="history.back()">Back</button>
        </div>
    `;
}

window.onload = () => {
    updateFavoritesCount();

    const redirect = sessionStorage.getItem("redirect");

    if (redirect) {
        sessionStorage.removeItem("redirect");
        history.replaceState(null, "", redirect);
    }

    router();
};
