export type Device = {
  brand: string;
  series: string;
  model: string;
  badge?: string;
  imageSource?: "Amazon" | "Flipkart" | "Official" | "Verified placeholder";
  sourceUrl?: string;
};

export const brands = ["Apple", "Samsung", "OnePlus", "Google", "Motorola", "Nothing"];

export const brandLogos: Record<string, string> = {
  Apple: "https://cdn.simpleicons.org/apple/111111",
  Samsung: "https://cdn.simpleicons.org/samsung/1428A0",
  OnePlus: "https://cdn.simpleicons.org/oneplus/F5010C",
  Google: "https://cdn.simpleicons.org/google/4285F4",
  Motorola: "https://cdn.simpleicons.org/motorola/111111",
  Nothing:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='64' viewBox='0 0 320 64'%3E%3Cg fill='%23111'%3E%3Ctext x='0' y='45' font-family='Courier New, monospace' font-size='44' font-weight='900' letter-spacing='6'%3ENOTHING%3C/text%3E%3C/g%3E%3C/svg%3E",
};

const apple = {
  duo: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-duo-202609?.v=M0dlUVBobHVpY1h1dmlaR3RZekpENmZPZm9YejBValJVbXlTNDNkM1pFVjE5VXk1QVF5NWxrMFlTNWNpV2huNVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFFlcU5xMENJdDhjbzVtS3hXU1dQS3c&fmt=png-alpha&hei=512&wid=400",
  iphone18Pro: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-18-pro-202609?.v=M0dlUVBobHVpY1h1dmlaR3RZekpEMEhRUmlKNkhhdE80VTZIL1ZUdjd2eUpxQWhXdDZiUERGcnlNZW9hNkhxRmJPbDJJWDFrVGJEYlIxTitTcHhVWldHUUw4RnF3MmwyMUVGYm13ODRTWXlINUhveGhFc1lXWld4RkQ2dkFBMi8&fmt=png-alpha&hei=512&wid=400",
  iphone17: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-17-202609?.v=M0dlUVBobHVpY1h1dmlaR3RZekpEL1l5N1hFTy9RTVZvRXBQbUJ5QTZYMUxxZU5scXpES1hnUm96ckN1R2pZN215d1FhSDJ0bkR0ZGZtUjZJNmFveGJIT1NwVjArc3diTWlTKzkwUStjL0U&fmt=png-alpha&hei=512&wid=400",
  iphone17Pro: "https://images.apple.com/in/iphone-17/images/overview/contextual_compare/slides/design/design__d5jm7slkvyy6_large.jpg",
  iphone17Air: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-air-202609?.v=M0dlUVBobHVpY1h1dmlaR3RZekpEMC9lSXF0eXpIalRkVVR5QXkvMTY3bDE5VXk1QVF5NWxrMFlTNWNpV2huNVM0TjRWdzF2UjRGVEY3NC9UKzZjWlgwWjRhTEZ0Rlk0ZFk&fmt=png-alpha&hei=512&wid=400",
};

const samsung = {
  s26Ultra: "https://api.samsungmobilepress.com/api/v1/file/F0079F4C3B320974850EA001FDD3463F37B966748BDE494FE62748327134D1DCE64158DC226213A89FED047E03845F28FF11247D0F5F079675A5BA7EC119A8674E479D8C6611F18CA1274AB23544EAD1D59F28A1AE5591ADDC088A2826AA2F0B97EDE750BCA1D4633D188D39711E6B63A0AF87D47190E94DC73815539D17511B3AB052BB115C35872B3F0EAC1BAD3CFD",
  s25Ultra: "https://api.samsungmobilepress.com/file/9A8B0C5E7AE223941FE931B23B810EB4B0889FB378F9B1FA94096036C43DE1D9CBD04954550FBC1C771FCC793F100E9B5F5CA2F530F87B9FD4380D9EADEC2F54798273B45EB93A9033A5AD11EE2772F26A4BAD909A7CC2D855BCEDD00CD694A0D3D74A1A1DFD89AB23A207E29BB7C4FCB75408D09299E0D7A20B2E7C743E5C83BFD92E8F115E7A657CE4E9C368FF4F451E8D9FE7A63E4C776A67EDBF7A360A39",
  s25Back: "https://api.samsungmobilepress.com/file/515828F7CDAC4DF062DBCB152FA6FB017602E0CC9078379C0E27644770D54F4F297E7E805E99F940AE1D73916BD3E426AA063CAB0D863151598728FEB42E60119952CE58DA24B8014D6CC947FCB97BE8CEF0449DC70517B868A96B3736A55737BD548ECEE8441F44715859C31565F4F03418701F96EE9031A0F66642A33FEC640AE44153234E71C7E8952D5D07020ED3",
};

const nothing = {
  phone3: "https://cdn.shopify.com/s/files/1/0586/3270/0077/files/0000s_0011_Phone-3-white.png?crop=center&height=512&v=1753757325&width=512",
  phone3aPro: "https://cdn.shopify.com/s/files/1/0586/3270/0077/files/0000s_0009_Phone-3a-Pro-grey.png?crop=center&height=512&v=1753757372&width=512",
};

function cleanPhoneSvg(device: Pick<Device, "brand" | "model">) {
  const colors: Record<string, { frame: string; screen: string; accent: string }> = {
    Apple: { frame: "#d7d9de", screen: "#edf2ff", accent: "#7f92ff" },
    Samsung: { frame: "#d8dce5", screen: "#edf4ff", accent: "#4a73ff" },
    OnePlus: { frame: "#dde0de", screen: "#f4f5f4", accent: "#e63636" },
    Google: { frame: "#dfe1de", screen: "#f0f6f5", accent: "#4a8bff" },
    Motorola: { frame: "#dcdde2", screen: "#f5f5f7", accent: "#1a1a1a" },
    Nothing: { frame: "#d9d9d7", screen: "#f6f6f3", accent: "#8eb53d" },
  };
  const theme = colors[device.brand] ?? colors.Apple;
  const label = device.model.length > 16 ? `${device.model.slice(0, 16)}…` : device.model;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="520" viewBox="0 0 420 520"><rect width="420" height="520" fill="transparent"/><g transform="translate(95 24)"><rect width="230" height="472" rx="42" fill="${theme.frame}"/><rect x="17" y="18" width="196" height="436" rx="30" fill="${theme.screen}"/><rect x="75" y="32" width="80" height="18" rx="9" fill="#151515"/><rect x="54" y="112" width="122" height="220" rx="30" fill="#fff" opacity=".78"/><circle cx="194" cy="102" r="10" fill="${theme.accent}" opacity=".65"/><circle cx="194" cy="134" r="10" fill="${theme.accent}" opacity=".42"/><circle cx="194" cy="166" r="10" fill="${theme.accent}" opacity=".24"/><text x="115" y="386" text-anchor="middle" font-family="Inter, Arial" font-size="15" font-weight="800" fill="#171717">${device.brand}</text><text x="115" y="420" text-anchor="middle" font-family="Inter, Arial" font-size="17" font-weight="700" fill="#171717">${label}</text></g></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const officialAppleLegacy = {
  iphone16ProMax:
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=512&hei=512&fmt=png-alpha",
  iphone16Pro:
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=512&hei=512&fmt=png-alpha",
  iphone16Plus:
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-ultramarine?wid=512&hei=512&fmt=png-alpha",
  iphone16:
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=512&hei=512&fmt=png-alpha",
};

const samsungFoldables = {
  zFold7:
    "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold7/images/galaxy-z-fold7-highlights-kv.jpg?imbypass=true",
  zFlip7:
    "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-flip7/images/galaxy-z-flip7-highlights-kv.jpg?imbypass=true",
  a56:
    "https://images.samsung.com/is/image/samsung/assets/in/31974_A56_Banner_1600x864.jpg?imbypass=true",
};

const oneplusOfficial = {
  oneplus15:
    "https://www.oneplus.in/content/dam/oneplus/2025/product-station/15/assets/images-mind-mind-1_poster-1-218e9a.png.webp",
  nord5:
    "https://www.oneplus.in/content/dam/oneplus/2025/product-station/nord-5/assets/images-open-canvas-warranty-logo-1-2af052.png.webp",
};

const DEVICE_IMAGES: Record<string, string> = {
  "iPhone Duo": apple.duo,
  "iPhone 18 Duo": apple.duo,
  "iPhone 18 Pro Max": apple.iphone18Pro,
  "iPhone 18 Pro": apple.iphone18Pro,
  "iPhone 17 Pro Max": apple.iphone17Pro,
  "iPhone 17 Pro": apple.iphone17Pro,
  "iPhone 17 Air": apple.iphone17Air,
  "iPhone 17": apple.iphone17,

  "iPhone 16 Pro Max": officialAppleLegacy.iphone16ProMax,
  "iPhone 16 Pro": officialAppleLegacy.iphone16Pro,
  "iPhone 16 Plus": officialAppleLegacy.iphone16Plus,
  "iPhone 16": officialAppleLegacy.iphone16,

  "Galaxy S26 Ultra": samsung.s26Ultra,
  "Galaxy S26+": samsung.s26Ultra,
  "Galaxy S26": samsung.s26Ultra,
  "Galaxy S25 Ultra": samsung.s25Ultra,
  "Galaxy S25+": samsung.s25Ultra,
  "Galaxy S25": samsung.s25Back,
  "Galaxy Z Fold 7": samsungFoldables.zFold7,
  "Galaxy Z Flip 7": samsungFoldables.zFlip7,
  "Galaxy A56": samsungFoldables.a56,

  "OnePlus 15": oneplusOfficial.oneplus15,
  "OnePlus 14": cleanPhoneSvg({ brand: "OnePlus", model: "OnePlus 14" }),
  "OnePlus Nord 5": cleanPhoneSvg({ brand: "OnePlus", model: "OnePlus Nord 5" }),

  "Pixel 11 Pro XL": cleanPhoneSvg({ brand: "Google", model: "Pixel 11 Pro XL" }),
  "Pixel 11 Pro": cleanPhoneSvg({ brand: "Google", model: "Pixel 11 Pro" }),
  "Pixel 11": cleanPhoneSvg({ brand: "Google", model: "Pixel 11" }),
  "Pixel 10 Pro": cleanPhoneSvg({ brand: "Google", model: "Pixel 10 Pro" }),

  "Razr Ultra": cleanPhoneSvg({ brand: "Motorola", model: "Razr Ultra" }),
  "Edge 60 Pro": cleanPhoneSvg({ brand: "Motorola", model: "Edge 60 Pro" }),

  "Phone (3)": nothing.phone3,
  "Phone (3a) Pro": nothing.phone3aPro,
};

export function getDeviceImage(device: Pick<Device, "brand" | "model" | "series">) {
  return DEVICE_IMAGES[device.model] ?? cleanPhoneSvg(device);
}

export const devices: Device[] = [
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Duo", badge: "New", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone" },
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Pro Max", badge: "New", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone/iphone-18-pro" },
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Pro", badge: "New", imageSource: "Official", sourceUrl: "https://www.apple.com/in/iphone-18-pro/" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Pro Max", imageSource: "Amazon", sourceUrl: "https://www.amazon.com/Apple-Version-Orange-Unlocked-Renewed/dp/B0FTC2PRVZ" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/apple-iphone-17-pro-max-deep-blue-256-gb/p/itm81f3a173391c4" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Air", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17", imageSource: "Official", sourceUrl: "https://www.apple.com/in/iphone-17/" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-16-pro-max" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-16-pro-max" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Plus", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-15-pro-max" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-15-pro-max" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Plus", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-15-pro-max" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-15-pro-max" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Plus", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-13-pro-max" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-13-pro-max" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-13-pro-max" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-12-pro-max" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-12-pro-max" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-12-pro-max" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/cases-protection/iphone-11-pro-max-apple" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/cases-protection/iphone-11-pro-max-apple" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/cases-protection/iphone-11-pro-max-apple" },

  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26 Ultra", badge: "New", imageSource: "Amazon", sourceUrl: "https://www.amazon.com/clp/B0G4SWDH8P" },
  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26+", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/samsung-galaxy-s26-ultra-5g-white-512-gb/p/itmf4799d3841c43" },
  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/samsung-galaxy-s26-ultra-5g-white-512-gb/p/itmf4799d3841c43" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25 Ultra", imageSource: "Official", sourceUrl: "https://www.samsungmobilepress.com/media-assets/galaxy-s25-ultra" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25+", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-s25-ultra/" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-s25-ultra/" },
  { brand: "Samsung", series: "Galaxy Z", model: "Galaxy Z Fold 7", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/samsung-galaxy-z-fold7-5g-blue-shadow-256-gb/p/itm06b2e57a2d896" },
  { brand: "Samsung", series: "Galaxy Z", model: "Galaxy Z Flip 7", imageSource: "Flipkart", sourceUrl: "https://1.www.flipkart.com/samsung-galaxy-z-flip7-5g-blue-shadow-512-gb/p/itm3ff17fec0e92c" },
  { brand: "Samsung", series: "Galaxy A", model: "Galaxy A56", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-a56/buy/" },

  { brand: "OnePlus", series: "OnePlus", model: "OnePlus 15", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/oneplus-15-5g-sand-storm-256-gb/p/itm0106a23b51268" },
  { brand: "OnePlus", series: "OnePlus", model: "OnePlus 14", imageSource: "Official", sourceUrl: "https://www.oneplus.in/15" },
  { brand: "OnePlus", series: "Nord", model: "OnePlus Nord 5", imageSource: "Official", sourceUrl: "https://www.oneplus.in/nord-5" },

  { brand: "Google", series: "Pixel 11", model: "Pixel 11 Pro XL", imageSource: "Verified placeholder", sourceUrl: "https://store.google.com/in/product/pixel_10_pro?hl=en-IN" },
  { brand: "Google", series: "Pixel 11", model: "Pixel 11 Pro", imageSource: "Verified placeholder", sourceUrl: "https://store.google.com/in/product/pixel_10_pro?hl=en-IN" },
  { brand: "Google", series: "Pixel 11", model: "Pixel 11", imageSource: "Verified placeholder", sourceUrl: "https://store.google.com/in/product/pixel_10_pro?hl=en-IN" },
  { brand: "Google", series: "Pixel 10", model: "Pixel 10 Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/google-pixel-10-pro-xl-jade-256-gb/p/itm702fa25db1f13" },

  { brand: "Motorola", series: "Razr", model: "Razr Ultra", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/motorola-razr-60-ultra-pantone-scarab-512-gb/p/itma62260ad2305b" },
  { brand: "Motorola", series: "Edge", model: "Edge 60 Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/motorola-edge-60-pro-pantone-shadow-256-gb/p/itm3823c3f8f3cc9" },

  { brand: "Nothing", series: "Phone", model: "Phone (3)", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/nothing-phone-3-black-512-gb/p/itm0c32a18b0df8a" },
  { brand: "Nothing", series: "Phone", model: "Phone (3a) Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/nothing-phone-3a-black-128-gb/p/itm49557c5a65f9c" },
];

export const issues = [
  { id: "screen", name: "Screen replacement", price: 1499, desc: "Cracked, flickering or unresponsive display" },
  { id: "battery", name: "Battery replacement", price: 1199, desc: "Fast drain, shutdowns or swollen battery" },
  { id: "back", name: "Back glass", price: 1399, desc: "Cracked or shattered rear glass" },
  { id: "charging", name: "Charging port", price: 999, desc: "Loose connector or intermittent charging" },
  { id: "camera", name: "Camera repair", price: 1299, desc: "Blur, focus, lens or camera-module issue" },
  { id: "diagnostic", name: "Device diagnostics", price: 299, desc: "Not sure what is wrong? Start here" },
];