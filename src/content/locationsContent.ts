import type { Language } from "@/types/site";

export type StudioLocation = {
  id: string;
  name: string;
  eyebrow: string;
  address: string;
  city: string;
  country: string;
  region: string;
  description: string;
  mapQuery: string;
  lat: number;
  lng: number;
  specialties: string[];
  isMain?: boolean;
};

type LocationSeed = {
  city: string;
  countryEn: string;
  countryPl: string;
  lat: number;
  lng: number;
  region: string;
};

type LocationsContent = {
  nearestEyebrow: string;
  nearestTitle: string;
  nearestDescription: string;
  fallbackTitle: string;
  fallbackDescription: string;
  permissionLoading: string;
  permissionDenied: string;
  permissionUnavailable: string;
  permissionGranted: string;
  useMyLocationLabel: string;
  distanceLabel: string;
  googleMapsLabel: string;
  allLocationsEyebrow: string;
  allLocationsTitle: string;
  allLocationsDescription: string;
  searchPlaceholder: string;
  allRegionsLabel: string;
  locationsCountLabel: string;
  noResultsTitle: string;
  noResultsDescription: string;
  regions: Record<string, string>;
  locations: StudioLocation[];
};

const locationSeedText = `
Warsaw|Poland|Polska|52.2297|21.0122|Europe
Paris|France|Francja|48.8566|2.3522|Europe
London|United Kingdom|Wielka Brytania|51.5074|-0.1278|Europe
Dubai|United Arab Emirates|ZEA|25.2048|55.2708|Middle East
Singapore|Singapore|Singapur|1.3521|103.8198|Asia
Krakow|Poland|Polska|50.0647|19.945|Europe
Gdansk|Poland|Polska|54.352|18.6466|Europe
Berlin|Germany|Niemcy|52.52|13.405|Europe
Munich|Germany|Niemcy|48.1351|11.582|Europe
Hamburg|Germany|Niemcy|53.5511|9.9937|Europe
Vienna|Austria|Austria|48.2082|16.3738|Europe
Prague|Czech Republic|Czechy|50.0755|14.4378|Europe
Bratislava|Slovakia|Słowacja|48.1486|17.1077|Europe
Budapest|Hungary|Węgry|47.4979|19.0402|Europe
Rome|Italy|Włochy|41.9028|12.4964|Europe
Milan|Italy|Włochy|45.4642|9.19|Europe
Venice|Italy|Włochy|45.4408|12.3155|Europe
Madrid|Spain|Hiszpania|40.4168|-3.7038|Europe
Barcelona|Spain|Hiszpania|41.3874|2.1686|Europe
Valencia|Spain|Hiszpania|39.4699|-0.3763|Europe
Lisbon|Portugal|Portugalia|38.7223|-9.1393|Europe
Porto|Portugal|Portugalia|41.1579|-8.6291|Europe
Amsterdam|Netherlands|Holandia|52.3676|4.9041|Europe
Rotterdam|Netherlands|Holandia|51.9244|4.4777|Europe
Brussels|Belgium|Belgia|50.8503|4.3517|Europe
Antwerp|Belgium|Belgia|51.2194|4.4025|Europe
Zurich|Switzerland|Szwajcaria|47.3769|8.5417|Europe
Geneva|Switzerland|Szwajcaria|46.2044|6.1432|Europe
Copenhagen|Denmark|Dania|55.6761|12.5683|Europe
Stockholm|Sweden|Szwecja|59.3293|18.0686|Europe
Oslo|Norway|Norwegia|59.9139|10.7522|Europe
Helsinki|Finland|Finlandia|60.1699|24.9384|Europe
Reykjavik|Iceland|Islandia|64.1466|-21.9426|Europe
Dublin|Ireland|Irlandia|53.3498|-6.2603|Europe
Edinburgh|United Kingdom|Wielka Brytania|55.9533|-3.1883|Europe
Manchester|United Kingdom|Wielka Brytania|53.4808|-2.2426|Europe
Birmingham|United Kingdom|Wielka Brytania|52.4862|-1.8904|Europe
Nice|France|Francja|43.7102|7.262|Europe
Lyon|France|Francja|45.764|4.8357|Europe
Marseille|France|Francja|43.2965|5.3698|Europe
Luxembourg|Luxembourg|Luksemburg|49.6116|6.1319|Europe
Monaco|Monaco|Monako|43.7384|7.4246|Europe
Athens|Greece|Grecja|37.9838|23.7275|Europe
Thessaloniki|Greece|Grecja|40.6401|22.9444|Europe
Zagreb|Croatia|Chorwacja|45.815|15.9819|Europe
Split|Croatia|Chorwacja|43.5081|16.4402|Europe
Ljubljana|Slovenia|Słowenia|46.0569|14.5058|Europe
Belgrade|Serbia|Serbia|44.7866|20.4489|Europe
Bucharest|Romania|Rumunia|44.4268|26.1025|Europe
Sofia|Bulgaria|Bułgaria|42.6977|23.3219|Europe
Vilnius|Lithuania|Litwa|54.6872|25.2797|Europe
Riga|Latvia|Łotwa|56.9496|24.1052|Europe
Tallinn|Estonia|Estonia|59.437|24.7536|Europe
Kyiv|Ukraine|Ukraina|50.4501|30.5234|Europe
Lviv|Ukraine|Ukraina|49.8397|24.0297|Europe
Istanbul|Turkey|Turcja|41.0082|28.9784|Middle East
Ankara|Turkey|Turcja|39.9334|32.8597|Middle East
Nicosia|Cyprus|Cypr|35.1856|33.3823|Europe
Malta|Malta|Malta|35.9375|14.3754|Europe
Sarajevo|Bosnia and Herzegovina|Bośnia i Hercegowina|43.8563|18.4131|Europe
Tirana|Albania|Albania|41.3275|19.8187|Europe
Skopje|North Macedonia|Macedonia Północna|41.9981|21.4254|Europe
Podgorica|Montenegro|Czarnogóra|42.4304|19.2594|Europe
Chisinau|Moldova|Mołdawia|47.0105|28.8638|Europe
Tokyo|Japan|Japonia|35.6762|139.6503|Asia
Osaka|Japan|Japonia|34.6937|135.5023|Asia
Kyoto|Japan|Japonia|35.0116|135.7681|Asia
Seoul|South Korea|Korea Południowa|37.5665|126.978|Asia
Busan|South Korea|Korea Południowa|35.1796|129.0756|Asia
Beijing|China|Chiny|39.9042|116.4074|Asia
Shanghai|China|Chiny|31.2304|121.4737|Asia
Shenzhen|China|Chiny|22.5431|114.0579|Asia
Hong Kong|China|Chiny|22.3193|114.1694|Asia
Taipei|Taiwan|Tajwan|25.033|121.5654|Asia
Bangkok|Thailand|Tajlandia|13.7563|100.5018|Asia
Phuket|Thailand|Tajlandia|7.8804|98.3923|Asia
Chiang Mai|Thailand|Tajlandia|18.7883|98.9853|Asia
Manila|Philippines|Filipiny|14.5995|120.9842|Asia
Cebu|Philippines|Filipiny|10.3157|123.8854|Asia
Davao|Philippines|Filipiny|7.1907|125.4553|Asia
General Santos|Philippines|Filipiny|6.1164|125.1716|Asia
Barangay Calumpang|Philippines|Filipiny|6.08773|125.15054|Asia
Kuala Lumpur|Malaysia|Malezja|3.139|101.6869|Asia
Penang|Malaysia|Malezja|5.4141|100.3288|Asia
Jakarta|Indonesia|Indonezja|-6.2088|106.8456|Asia
Bali|Indonesia|Indonezja|-8.4095|115.1889|Asia
Ho Chi Minh City|Vietnam|Wietnam|10.8231|106.6297|Asia
Hanoi|Vietnam|Wietnam|21.0278|105.8342|Asia
Da Nang|Vietnam|Wietnam|16.0544|108.2022|Asia
Phnom Penh|Cambodia|Kambodża|11.5564|104.9282|Asia
Siem Reap|Cambodia|Kambodża|13.3671|103.8448|Asia
Vientiane|Laos|Laos|17.9757|102.6331|Asia
Yangon|Myanmar|Mjanma|16.8409|96.1735|Asia
Mumbai|India|Indie|19.076|72.8777|Asia
Delhi|India|Indie|28.7041|77.1025|Asia
Bengaluru|India|Indie|12.9716|77.5946|Asia
Hyderabad|India|Indie|17.385|78.4867|Asia
Chennai|India|Indie|13.0827|80.2707|Asia
Colombo|Sri Lanka|Sri Lanka|6.9271|79.8612|Asia
Malé|Maldives|Malediwy|4.1755|73.5093|Asia
Kathmandu|Nepal|Nepal|27.7172|85.324|Asia
Dhaka|Bangladesh|Bangladesz|23.8103|90.4125|Asia
Karachi|Pakistan|Pakistan|24.8607|67.0011|Asia
Lahore|Pakistan|Pakistan|31.5204|74.3587|Asia
Doha|Qatar|Katar|25.2854|51.531|Middle East
Abu Dhabi|United Arab Emirates|ZEA|24.4539|54.3773|Middle East
Riyadh|Saudi Arabia|Arabia Saudyjska|24.7136|46.6753|Middle East
Jeddah|Saudi Arabia|Arabia Saudyjska|21.4858|39.1925|Middle East
Kuwait City|Kuwait|Kuwejt|29.3759|47.9774|Middle East
Bahrain|Bahrain|Bahrajn|26.0667|50.5577|Middle East
Muscat|Oman|Oman|23.588|58.3829|Middle East
Tel Aviv|Israel|Izrael|32.0853|34.7818|Middle East
Jerusalem|Israel|Izrael|31.7683|35.2137|Middle East
Amman|Jordan|Jordania|31.9539|35.9106|Middle East
Beirut|Lebanon|Liban|33.8938|35.5018|Middle East
Tbilisi|Georgia|Gruzja|41.7151|44.8271|Asia
Yerevan|Armenia|Armenia|40.1872|44.5152|Asia
Baku|Azerbaijan|Azerbejdżan|40.4093|49.8671|Asia
Almaty|Kazakhstan|Kazachstan|43.222|76.8512|Asia
Astana|Kazakhstan|Kazachstan|51.1694|71.4491|Asia
Tashkent|Uzbekistan|Uzbekistan|41.2995|69.2401|Asia
New York|United States|USA|40.7128|-74.006|North America
Los Angeles|United States|USA|34.0522|-118.2437|North America
San Francisco|United States|USA|37.7749|-122.4194|North America
Chicago|United States|USA|41.8781|-87.6298|North America
Miami|United States|USA|25.7617|-80.1918|North America
Las Vegas|United States|USA|36.1699|-115.1398|North America
Seattle|United States|USA|47.6062|-122.3321|North America
Boston|United States|USA|42.3601|-71.0589|North America
Washington|United States|USA|38.9072|-77.0369|North America
Dallas|United States|USA|32.7767|-96.797|North America
Austin|United States|USA|30.2672|-97.7431|North America
Houston|United States|USA|29.7604|-95.3698|North America
Atlanta|United States|USA|33.749|-84.388|North America
Denver|United States|USA|39.7392|-104.9903|North America
Phoenix|United States|USA|33.4484|-112.074|North America
San Diego|United States|USA|32.7157|-117.1611|North America
Toronto|Canada|Kanada|43.6532|-79.3832|North America
Vancouver|Canada|Kanada|49.2827|-123.1207|North America
Montreal|Canada|Kanada|45.5017|-73.5673|North America
Calgary|Canada|Kanada|51.0447|-114.0719|North America
Ottawa|Canada|Kanada|45.4215|-75.6972|North America
Mexico City|Mexico|Meksyk|19.4326|-99.1332|North America
Guadalajara|Mexico|Meksyk|20.6597|-103.3496|North America
Cancun|Mexico|Meksyk|21.1619|-86.8515|North America
Monterrey|Mexico|Meksyk|25.6866|-100.3161|North America
San José|Costa Rica|Kostaryka|9.9281|-84.0907|Central America
Panama City|Panama|Panama|8.9824|-79.5199|Central America
Guatemala City|Guatemala|Gwatemala|14.6349|-90.5069|Central America
Havana|Cuba|Kuba|23.1136|-82.3666|Caribbean
Santo Domingo|Dominican Republic|Dominikana|18.4861|-69.9312|Caribbean
San Juan|Puerto Rico|Portoryko|18.4655|-66.1057|Caribbean
Nassau|Bahamas|Bahamy|25.0443|-77.3504|Caribbean
Kingston|Jamaica|Jamajka|17.9712|-76.7936|Caribbean
São Paulo|Brazil|Brazylia|-23.5558|-46.6396|South America
Rio de Janeiro|Brazil|Brazylia|-22.9068|-43.1729|South America
Brasília|Brazil|Brazylia|-15.7939|-47.8828|South America
Buenos Aires|Argentina|Argentyna|-34.6037|-58.3816|South America
Santiago|Chile|Chile|-33.4489|-70.6693|South America
Lima|Peru|Peru|-12.0464|-77.0428|South America
Bogotá|Colombia|Kolumbia|4.711|-74.0721|South America
Medellín|Colombia|Kolumbia|6.2476|-75.5658|South America
Quito|Ecuador|Ekwador|-0.1807|-78.4678|South America
Guayaquil|Ecuador|Ekwador|-2.17|-79.9224|South America
Montevideo|Uruguay|Urugwaj|-34.9011|-56.1645|South America
Asunción|Paraguay|Paragwaj|-25.2637|-57.5759|South America
La Paz|Bolivia|Boliwia|-16.4897|-68.1193|South America
Caracas|Venezuela|Wenezuela|10.4806|-66.9036|South America
Cairo|Egypt|Egipt|30.0444|31.2357|Africa
Alexandria|Egypt|Egipt|31.2001|29.9187|Africa
Marrakesh|Morocco|Maroko|31.6295|-7.9811|Africa
Casablanca|Morocco|Maroko|33.5731|-7.5898|Africa
Rabat|Morocco|Maroko|34.0209|-6.8416|Africa
Tunis|Tunisia|Tunezja|36.8065|10.1815|Africa
Algiers|Algeria|Algieria|36.7538|3.0588|Africa
Tripoli|Libya|Libia|32.8872|13.1913|Africa
Cape Town|South Africa|RPA|-33.9249|18.4241|Africa
Johannesburg|South Africa|RPA|-26.2041|28.0473|Africa
Durban|South Africa|RPA|-29.8587|31.0218|Africa
Nairobi|Kenya|Kenia|-1.2921|36.8219|Africa
Mombasa|Kenya|Kenia|-4.0435|39.6682|Africa
Lagos|Nigeria|Nigeria|6.5244|3.3792|Africa
Abuja|Nigeria|Nigeria|9.0765|7.3986|Africa
Accra|Ghana|Ghana|5.6037|-0.187|Africa
Dakar|Senegal|Senegal|14.7167|-17.4677|Africa
Addis Ababa|Ethiopia|Etiopia|8.9806|38.7578|Africa
Kigali|Rwanda|Rwanda|-1.9441|30.0619|Africa
Kampala|Uganda|Uganda|0.3476|32.5825|Africa
Dar es Salaam|Tanzania|Tanzania|-6.7924|39.2083|Africa
Zanzibar|Tanzania|Tanzania|-6.1659|39.2026|Africa
Maputo|Mozambique|Mozambik|-25.9692|32.5732|Africa
Luanda|Angola|Angola|-8.839|13.2894|Africa
Windhoek|Namibia|Namibia|-22.5609|17.0658|Africa
Gaborone|Botswana|Botswana|-24.6282|25.9231|Africa
Lusaka|Zambia|Zambia|-15.3875|28.3228|Africa
Harare|Zimbabwe|Zimbabwe|-17.8252|31.0335|Africa
Port Louis|Mauritius|Mauritius|-20.1609|57.5012|Africa
Victoria|Seychelles|Seszele|-4.6191|55.4513|Africa
Sydney|Australia|Australia|-33.8688|151.2093|Oceania
Melbourne|Australia|Australia|-37.8136|144.9631|Oceania
Brisbane|Australia|Australia|-27.4698|153.0251|Oceania
Perth|Australia|Australia|-31.9505|115.8605|Oceania
Adelaide|Australia|Australia|-34.9285|138.6007|Oceania
Gold Coast|Australia|Australia|-28.0167|153.4|Oceania
Canberra|Australia|Australia|-35.2809|149.13|Oceania
Auckland|New Zealand|Nowa Zelandia|-36.8485|174.7633|Oceania
Wellington|New Zealand|Nowa Zelandia|-41.2865|174.7762|Oceania
Christchurch|New Zealand|Nowa Zelandia|-43.5321|172.6362|Oceania
Queenstown|New Zealand|Nowa Zelandia|-45.0312|168.6626|Oceania
Honolulu|United States|USA|21.3069|-157.8583|Oceania
Suva|Fiji|Fidżi|-18.1248|178.4501|Oceania
`;

const regionLabels: Record<Language, Record<string, string>> = {
  pl: {
    Europe: "Europa",
    Asia: "Azja",
    "Middle East": "Bliski Wschód",
    "North America": "Ameryka Północna",
    "Central America": "Ameryka Centralna",
    Caribbean: "Karaiby",
    "South America": "Ameryka Południowa",
    Africa: "Afryka",
    Oceania: "Oceania",
  },
  en: {
    Europe: "Europe",
    Asia: "Asia",
    "Middle East": "Middle East",
    "North America": "North America",
    "Central America": "Central America",
    Caribbean: "Caribbean",
    "South America": "South America",
    Africa: "Africa",
    Oceania: "Oceania",
  },
};

const specialtySets: Record<Language, string[][]> = {
  pl: [
    ["Facial care", "Glow rituals", "Consultations"],
    ["Brows & lashes", "Soft glam", "Natural look"],
    ["Occasion makeup", "Photo-ready skin", "Event beauty"],
    ["Signature care", "Premium packages", "Skin rituals"],
  ],
  en: [
    ["Facial care", "Glow rituals", "Consultations"],
    ["Brows & lashes", "Soft glam", "Natural look"],
    ["Occasion makeup", "Photo-ready skin", "Event beauty"],
    ["Signature care", "Premium packages", "Skin rituals"],
  ],
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseSeeds(): LocationSeed[] {
  return locationSeedText
    .trim()
    .split("\n")
    .map((line) => {
      const [city, countryEn, countryPl, lat, lng, region] = line.split("|");

      return {
        city,
        countryEn,
        countryPl,
        lat: Number(lat),
        lng: Number(lng),
        region,
      };
    });
}

function getLegacyName(city: string) {
  if (city === "Warsaw") {
    return "Aurora Warsaw Flagship";
  }

  if (city === "Paris") {
    return "Aurora Paris Studio";
  }

  if (city === "London") {
    return "Aurora London Atelier";
  }

  if (city === "Dubai") {
    return "Aurora Dubai Lounge";
  }

  if (city === "Singapore") {
    return "Aurora Singapore Room";
  }

  if (city === "General Santos") {
    return "Aurora General Santos Studio";
  }

  if (city === "Barangay Calumpang") {
    return "Aurora Barangay Calumpang Garden Studio";
  }

  return null;
}

function getGeneratedName(city: string, index: number) {
  const suffixes = ["Studio", "Atelier", "Lounge", "Room", "House", "Suite"];
  const suffix = suffixes[index % suffixes.length];

  return `Aurora ${city} ${suffix}`;
}

function getAddress(seed: LocationSeed, index: number) {
  if (seed.city === "Warsaw") {
    return "ul. Różana 12, 00-001 Warszawa";
  }

  if (seed.city === "Paris") {
    return "14 Rue Saint-Honoré, 75001 Paris";
  }

  if (seed.city === "London") {
    return "22 Mayfair Place, London W1J";
  }

  if (seed.city === "Dubai") {
    return "Downtown Dubai, Sheikh Mohammed bin Rashid Blvd";
  }

  if (seed.city === "Singapore") {
    return "2 Orchard Turn, Singapore 238801";
  }

  if (seed.city === "General Santos") {
    return "Jose Catolico Sr. Avenue, General Santos, South Cotabato";
  }

  if (seed.city === "Barangay Calumpang") {
    return "Barangay Calumpang, General Santos City, South Cotabato";
  }

  const number = 8 + ((index * 7) % 89);

  return `${number} Aurora Avenue`;
}

function getDisplayCity(seed: LocationSeed, language: Language) {
  if (seed.city === "Barangay Calumpang") {
    return language === "pl"
      ? "Barangay Calumpang, General Santos City, Filipiny"
      : "Barangay Calumpang, General Santos City, Philippines";
  }

  const country = language === "pl" ? seed.countryPl : seed.countryEn;

  return `${seed.city}, ${country}`;
}

function getDescription(language: Language, seed: LocationSeed, index: number) {
  const regionLabel = regionLabels[language][seed.region] ?? seed.region;

  if (language === "pl") {
    if (index === 0) {
      return "Główna siedziba marki i punkt odniesienia dla całej sieci Aurora Beauty Studio.";
    }

    if (seed.city === "Barangay Calumpang") {
      return "Druga lokalizacja Aurora w General Santos City — przeniesiona do Barangay Calumpang jako spokojny punkt beauty dla klientek z południowego Mindanao.";
    }

    return `Lokalizacja premium w mieście ${seed.city}, zaprojektowana jako spokojny punkt beauty dla klientek szukających naturalnego efektu i dopracowanej obsługi. Region: ${regionLabel}.`;
  }

  if (index === 0) {
    return "The main brand headquarters and reference point for the entire Aurora Beauty Studio network.";
  }

  if (seed.city === "Barangay Calumpang") {
    return "A second Aurora location in General Santos City — moved to Barangay Calumpang as a calm beauty space for clients in southern Mindanao.";
  }

  return `A premium location in ${seed.city}, designed as a calm beauty space for clients looking for natural results and refined service. Region: ${regionLabel}.`;
}

function createLocations(language: Language): StudioLocation[] {
  return parseSeeds().map((seed, index) => {
    const country = language === "pl" ? seed.countryPl : seed.countryEn;
    const address = getAddress(seed, index);
    const legacyName = getLegacyName(seed.city);
    const name = legacyName ?? getGeneratedName(seed.city, index);
    const region = regionLabels[language][seed.region] ?? seed.region;
    const city = getDisplayCity(seed, language);

    return {
      id: `${slugify(seed.city)}-${slugify(seed.countryEn)}`,
      name,
      eyebrow:
        index === 0
          ? language === "pl"
            ? "Główna siedziba"
            : "Main headquarters"
          : region,
      address,
      city,
      country,
      region,
      description: getDescription(language, seed, index),
      mapQuery: `${seed.lat},${seed.lng}`,
      lat: seed.lat,
      lng: seed.lng,
      specialties:
        specialtySets[language][index % specialtySets[language].length],
      isMain: index === 0,
    };
  });
}

export const locationsContent: Record<Language, LocationsContent> = {
  pl: {
    nearestEyebrow: "Najbliższy salon",
    nearestTitle: "Najbliższa lokalizacja Aurora Beauty Studio",
    nearestDescription:
      "Po zgodzie na użycie lokalizacji urządzenia pokażemy salon znajdujący się najbliżej Ciebie. Jeśli lokalizacja nie będzie dostępna, jako punkt domyślny pokażemy główną siedzibę w Warszawie.",
    fallbackTitle: "Pokazujemy główną siedzibę",
    fallbackDescription:
      "Nie mamy dostępu do lokalizacji urządzenia, więc jako domyślną lokalizację wyświetlamy Aurora Warsaw Flagship.",
    permissionLoading: "Sprawdzamy lokalizację urządzenia...",
    permissionDenied:
      "Nie uzyskaliśmy dostępu do lokalizacji. Pokazujemy główną siedzibę.",
    permissionUnavailable:
      "Geolokalizacja nie jest dostępna w tej przeglądarce. Pokazujemy główną siedzibę.",
    permissionGranted: "Lokalizacja urządzenia została uwzględniona.",
    useMyLocationLabel: "Użyj mojej lokalizacji",
    distanceLabel: "Szacowana odległość",
    googleMapsLabel: "Otwórz w Google Maps",
    allLocationsEyebrow: "Wszystkie lokalizacje",
    allLocationsTitle: "Sprawdź wszystkie nasze lokalizacje",
    allLocationsDescription:
      "Poniżej znajdziesz pełną listę 211 lokalizacji Aurora Beauty Studio. Możesz wyszukać miasto, kraj albo zawęzić listę do regionu.",
    searchPlaceholder: "Szukaj miasta, kraju lub salonu...",
    allRegionsLabel: "Wszystkie regiony",
    locationsCountLabel: "lokalizacji",
    noResultsTitle: "Brak wyników",
    noResultsDescription: "Zmień wyszukiwaną frazę albo wybierz inny region.",
    regions: regionLabels.pl,
    locations: createLocations("pl"),
  },

  en: {
    nearestEyebrow: "Nearest studio",
    nearestTitle: "Nearest Aurora Beauty Studio location",
    nearestDescription:
      "After permission to use your device location, we will show the studio closest to you. If location access is unavailable, the Warsaw flagship will be shown as the default location.",
    fallbackTitle: "Showing the main headquarters",
    fallbackDescription:
      "We do not have access to your device location, so Aurora Warsaw Flagship is displayed as the default location.",
    permissionLoading: "Checking device location...",
    permissionDenied:
      "Location access was not granted. Showing the main headquarters.",
    permissionUnavailable:
      "Geolocation is not available in this browser. Showing the main headquarters.",
    permissionGranted: "Your device location has been included.",
    useMyLocationLabel: "Use my location",
    distanceLabel: "Estimated distance",
    googleMapsLabel: "Open in Google Maps",
    allLocationsEyebrow: "All locations",
    allLocationsTitle: "Explore all our locations",
    allLocationsDescription:
      "Below you will find the full list of 211 Aurora Beauty Studio locations. You can search by city, country or narrow the list by region.",
    searchPlaceholder: "Search city, country or studio...",
    allRegionsLabel: "All regions",
    locationsCountLabel: "locations",
    noResultsTitle: "No results",
    noResultsDescription:
      "Change the search phrase or select a different region.",
    regions: regionLabels.en,
    locations: createLocations("en"),
  },
};
