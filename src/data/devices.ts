export type ImageSource = "Amazon" | "Flipkart" | "Official";

export type Device = {
  brand: string;
  series: string;
  model: string;
  badge?: string;
  imageSource: ImageSource;
  sourceUrl: string;
  render: "standard" | "pro" | "ultra" | "fold" | "flip" | "nothing" | "pixel" | "razr";
  color: string;
  accent: string;
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

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cameraCluster(device: Device) {
  const c = device.accent;
  if (device.render === "nothing") {
    return `
      <circle cx="70" cy="116" r="15" fill="${c}" opacity=".95"/>
      <circle cx="112" cy="95" r="15" fill="${c}" opacity=".82"/>
      <circle cx="150" cy="124" r="15" fill="${c}" opacity=".68"/>
      <path d="M68 174c32-52 66-70 112-56" stroke="${c}" stroke-width="8" stroke-linecap="round" fill="none" opacity=".32"/>
      <path d="M62 216c52 24 104 18 144-20" stroke="${c}" stroke-width="7" stroke-linecap="round" fill="none" opacity=".23"/>
    `;
  }

  if (device.render === "pixel") {
    return `
      <rect x="38" y="92" width="166" height="48" rx="24" fill="${c}" opacity=".85"/>
      <circle cx="72" cy="116" r="14" fill="#111"/>
      <circle cx="116" cy="116" r="14" fill="#111" opacity=".82"/>
      <circle cx="164" cy="116" r="10" fill="#111" opacity=".55"/>
    `;
  }

  if (device.render === "ultra") {
    return `
      <circle cx="68" cy="94" r="17" fill="${c}"/>
      <circle cx="118" cy="94" r="17" fill="${c}" opacity=".86"/>
      <circle cx="68" cy="145" r="17" fill="${c}" opacity=".72"/>
      <circle cx="118" cy="145" r="17" fill="${c}" opacity=".56"/>
      <circle cx="168" cy="121" r="12" fill="${c}" opacity=".38"/>
    `;
  }

  if (device.render === "pro") {
    return `
      <circle cx="72" cy="102" r="18" fill="${c}"/>
      <circle cx="124" cy="102" r="18" fill="${c}" opacity=".82"/>
      <circle cx="98" cy="154" r="18" fill="${c}" opacity=".65"/>
    `;
  }

  return `
    <circle cx="82" cy="106" r="17" fill="${c}"/>
    <circle cx="134" cy="106" r="17" fill="${c}" opacity=".7"/>
  `;
}

function renderStandardPhone(device: Device) {
  const label = esc(device.model.length > 18 ? `${device.model.slice(0, 18)}…` : device.model);
  const brand = esc(device.brand);
  const fill = device.color;
  const accent = device.accent;

  return `
    <g transform="translate(96 24)">
      <rect x="0" y="0" width="228" height="472" rx="42" fill="${fill}"/>
      <rect x="12" y="12" width="204" height="448" rx="34" fill="#ffffff" opacity=".5"/>
      <rect x="22" y="22" width="184" height="428" rx="29" fill="#f8f9f3"/>
      <rect x="72" y="34" width="82" height="18" rx="9" fill="#10120f"/>
      ${cameraCluster(device)}
      <rect x="55" y="254" width="118" height="74" rx="24" fill="#fff" opacity=".72"/>
      <rect x="64" y="354" width="100" height="30" rx="15" fill="${accent}" opacity=".16"/>
      <text x="114" y="375" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="900" fill="#171717">${brand}</text>
      <text x="114" y="418" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="800" fill="#171717">${label}</text>
    </g>
  `;
}

function renderFold(device: Device) {
  const label = esc(device.model.length > 18 ? `${device.model.slice(0, 18)}…` : device.model);
  const fill = device.color;
  const accent = device.accent;

  return `
    <g transform="translate(58 36)">
      <rect x="0" y="16" width="178" height="420" rx="34" fill="${fill}"/>
      <rect x="18" y="36" width="142" height="380" rx="25" fill="#f7f8f2"/>
      <rect x="158" y="0" width="136" height="452" rx="32" fill="${fill}" opacity=".9"/>
      <rect x="174" y="22" width="104" height="408" rx="23" fill="#fbfcf7"/>
      <line x1="154" y1="22" x2="154" y2="430" stroke="#111" stroke-width="4" opacity=".2"/>
      <circle cx="250" cy="96" r="14" fill="${accent}"/>
      <circle cx="250" cy="142" r="14" fill="${accent}" opacity=".72"/>
      <circle cx="250" cy="188" r="14" fill="${accent}" opacity=".48"/>
      <text x="147" y="382" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="900" fill="#171717">Samsung</text>
      <text x="147" y="414" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800" fill="#171717">${label}</text>
    </g>
  `;
}

function renderFlip(device: Device) {
  const label = esc(device.model.length > 18 ? `${device.model.slice(0, 18)}…` : device.model);
  const fill = device.color;
  const accent = device.accent;

  return `
    <g transform="translate(96 34)">
      <rect x="0" y="0" width="228" height="218" rx="34" fill="${fill}"/>
      <rect x="18" y="22" width="92" height="72" rx="22" fill="#f8f9f4"/>
      <circle cx="154" cy="62" r="16" fill="${accent}"/>
      <circle cx="194" cy="62" r="16" fill="${accent}" opacity=".68"/>
      <rect x="0" y="224" width="228" height="218" rx="34" fill="${fill}" opacity=".92"/>
      <rect x="20" y="246" width="188" height="174" rx="26" fill="#fbfcf7"/>
      <line x1="8" y1="220" x2="220" y2="220" stroke="#111" stroke-width="5" opacity=".18"/>
      <text x="114" y="334" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="900" fill="#171717">Samsung</text>
      <text x="114" y="368" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800" fill="#171717">${label}</text>
    </g>
  `;
}

function renderRazr(device: Device) {
  const label = esc(device.model.length > 18 ? `${device.model.slice(0, 18)}…` : device.model);
  const fill = device.color;
  const accent = device.accent;

  return `
    <g transform="translate(98 36)">
      <rect x="0" y="0" width="224" height="204" rx="34" fill="${fill}"/>
      <rect x="20" y="22" width="184" height="80" rx="24" fill="#f8f9f4"/>
      <circle cx="62" cy="140" r="16" fill="${accent}"/>
      <circle cx="112" cy="140" r="16" fill="${accent}" opacity=".72"/>
      <rect x="0" y="220" width="224" height="228" rx="34" fill="${fill}" opacity=".93"/>
      <rect x="22" y="246" width="180" height="174" rx="28" fill="#fbfcf7"/>
      <text x="112" y="336" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="900" fill="#171717">Motorola</text>
      <text x="112" y="370" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800" fill="#171717">${label}</text>
    </g>
  `;
}

function phoneSvg(device: Device) {
  const body =
    device.render === "fold"
      ? renderFold(device)
      : device.render === "flip"
        ? renderFlip(device)
        : device.render === "razr"
          ? renderRazr(device)
          : renderStandardPhone(device);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="420" height="520" viewBox="0 0 420 520">
      <rect width="420" height="520" fill="transparent"/>
      <ellipse cx="210" cy="490" rx="96" ry="18" fill="#111" opacity=".08"/>
      ${body}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function getDeviceImage(device: Pick<Device, "brand" | "model" | "series">) {
  const found = devices.find((item) => item.model === device.model);
  if (!found) {
    return phoneSvg({
      brand: device.brand,
      series: device.series,
      model: device.model,
      imageSource: "Official",
      sourceUrl: "",
      render: "standard",
      color: "#d8dce5",
      accent: "#6f8cff",
    });
  }

  return phoneSvg(found);
}

export const devices: Device[] = [
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Duo", badge: "New", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone", render: "fold", color: "#f2f1ec", accent: "#a6a6a6" },
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Pro Max", badge: "New", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone/iphone-18-pro", render: "pro", color: "#5e1f2c", accent: "#d8ad73" },
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Pro", badge: "New", imageSource: "Official", sourceUrl: "https://www.apple.com/in/iphone-18-pro/", render: "pro", color: "#7b2a3a", accent: "#e1bd81" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Pro Max", imageSource: "Amazon", sourceUrl: "https://www.amazon.com/Apple-Version-Orange-Unlocked-Renewed/dp/B0FTC2PRVZ", render: "pro", color: "#e86f2a", accent: "#171717" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/apple-iphone-17-pro-max-deep-blue-256-gb/p/itm81f3a173391c4", render: "pro", color: "#243a59", accent: "#eef3ff" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Air", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/buy-iphone", render: "standard", color: "#b8c7d8", accent: "#ffffff" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17", imageSource: "Official", sourceUrl: "https://www.apple.com/in/iphone-17/", render: "standard", color: "#dce3ff", accent: "#6878ff" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/", render: "pro", color: "#c8b39c", accent: "#2b2119" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/", render: "pro", color: "#b8aaa1", accent: "#2c2622" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Plus", imageSource: "Official", sourceUrl: "https://www.apple.com/in/newsroom/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/", render: "standard", color: "#385cc9", accent: "#ffffff" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16", imageSource: "Official", sourceUrl: "https://www.apple.com/in/newsroom/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/", render: "standard", color: "#2f63d7", accent: "#ffffff" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/", render: "pro", color: "#c5b7a2", accent: "#2c2823" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/", render: "pro", color: "#9b9991", accent: "#20201e" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Plus", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-15-pro-max", render: "standard", color: "#f3c8dc", accent: "#ffffff" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-15-pro-max", render: "standard", color: "#bfd9ef", accent: "#ffffff" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max", render: "pro", color: "#d8c7f2", accent: "#1e1630" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max", render: "pro", color: "#2e2e31", accent: "#f2e0ff" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Plus", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max", render: "standard", color: "#dfe7f7", accent: "#6d82ff" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-14-pro-max", render: "standard", color: "#f3f1ea", accent: "#202020" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-13-pro-max", render: "pro", color: "#c6d7db", accent: "#1e373d" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-13-pro-max", render: "pro", color: "#aeb7b8", accent: "#202020" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-13-pro-max", render: "standard", color: "#f6beca", accent: "#ffffff" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-12-pro-max", render: "pro", color: "#a7b3c2", accent: "#1c2731" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-12-pro-max", render: "pro", color: "#d7c0a8", accent: "#2a221d" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/made-by-apple/iphone-12-pro-max", render: "standard", color: "#4b7fb8", accent: "#ffffff" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11 Pro Max", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/cases-protection/iphone-11-pro-max-apple", render: "pro", color: "#3f5147", accent: "#d7e5dd" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11 Pro", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/cases-protection/iphone-11-pro-max-apple", render: "pro", color: "#303033", accent: "#f4f4f4" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11", imageSource: "Official", sourceUrl: "https://www.apple.com/in/shop/accessories/all/cases-protection/iphone-11-pro-max-apple", render: "standard", color: "#c9e8d8", accent: "#ffffff" },

  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26 Ultra", badge: "New", imageSource: "Amazon", sourceUrl: "https://www.amazon.com/clp/B0G4SWDH8P", render: "ultra", color: "#1f242b", accent: "#8fb7ff" },
  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26+", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/samsung-galaxy-s26-ultra-5g-white-512-gb/p/itmf4799d3841c43", render: "standard", color: "#e6edf9", accent: "#527dff" },
  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/samsung-galaxy-s26-ultra-5g-white-512-gb/p/itmf4799d3841c43", render: "standard", color: "#d8e2f5", accent: "#527dff" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25 Ultra", imageSource: "Official", sourceUrl: "https://www.samsungmobilepress.com/media-assets/galaxy-s25-ultra", render: "ultra", color: "#c7c9c6", accent: "#121212" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25+", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-s25-ultra/", render: "standard", color: "#b9c6d8", accent: "#4a73ff" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-s25-ultra/", render: "standard", color: "#d5deea", accent: "#4a73ff" },
  { brand: "Samsung", series: "Galaxy Z", model: "Galaxy Z Fold 7", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-z-fold7/", render: "fold", color: "#1d2738", accent: "#8fb7ff" },
  { brand: "Samsung", series: "Galaxy Z", model: "Galaxy Z Flip 7", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-z-flip7/", render: "flip", color: "#2f405d", accent: "#9dbdff" },
  { brand: "Samsung", series: "Galaxy A", model: "Galaxy A56", imageSource: "Official", sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-a56/buy/", render: "standard", color: "#e1e5ee", accent: "#7e9cff" },

  { brand: "OnePlus", series: "OnePlus", model: "OnePlus 15", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/oneplus-15-5g-sand-storm-256-gb/p/itm0106a23b51268", render: "standard", color: "#d8c3a4", accent: "#d32f2f" },
  { brand: "OnePlus", series: "OnePlus", model: "OnePlus 14", imageSource: "Official", sourceUrl: "https://www.oneplus.in/15", render: "standard", color: "#1f1f1f", accent: "#e83535" },
  { brand: "OnePlus", series: "Nord", model: "OnePlus Nord 5", imageSource: "Official", sourceUrl: "https://www.oneplus.in/nord-5", render: "standard", color: "#d5e5ff", accent: "#3d66ff" },

  { brand: "Google", series: "Pixel 11", model: "Pixel 11 Pro XL", imageSource: "Official", sourceUrl: "https://store.google.com/in/product/pixel_10_pro?hl=en-IN", render: "pixel", color: "#e0e2da", accent: "#161616" },
  { brand: "Google", series: "Pixel 11", model: "Pixel 11 Pro", imageSource: "Official", sourceUrl: "https://store.google.com/in/product/pixel_10_pro?hl=en-IN", render: "pixel", color: "#d9e8d8", accent: "#2f6f43" },
  { brand: "Google", series: "Pixel 11", model: "Pixel 11", imageSource: "Official", sourceUrl: "https://store.google.com/in/product/pixel_10_pro?hl=en-IN", render: "pixel", color: "#f0e3cb", accent: "#885e24" },
  { brand: "Google", series: "Pixel 10", model: "Pixel 10 Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/google-pixel-10-pro-xl-jade-256-gb/p/itm702fa25db1f13", render: "pixel", color: "#cddcd3", accent: "#223c32" },

  { brand: "Motorola", series: "Razr", model: "Razr Ultra", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/motorola-razr-60-ultra-pantone-scarab-512-gb/p/itma62260ad2305b", render: "razr", color: "#14372f", accent: "#c5f0a2" },
  { brand: "Motorola", series: "Edge", model: "Edge 60 Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/motorola-edge-60-pro-pantone-shadow-256-gb/p/itm3823c3f8f3cc9", render: "standard", color: "#3b444f", accent: "#b8dbff" },

  { brand: "Nothing", series: "Phone", model: "Phone (3)", imageSource: "Official", sourceUrl: "https://in.nothing.tech/products/phone-3", render: "nothing", color: "#f6f6f3", accent: "#111111" },
  { brand: "Nothing", series: "Phone", model: "Phone (3a) Pro", imageSource: "Flipkart", sourceUrl: "https://www.flipkart.com/nothing-phone-3a-black-128-gb/p/itm49557c5a65f9c", render: "nothing", color: "#e9e9e4", accent: "#222222" },
];

export const issues = [
  { id: "screen", name: "Screen replacement", price: 1499, desc: "Cracked, flickering or unresponsive display" },
  { id: "battery", name: "Battery replacement", price: 1199, desc: "Fast drain, shutdowns or swollen battery" },
  { id: "back", name: "Back glass", price: 1399, desc: "Cracked or shattered rear glass" },
  { id: "charging", name: "Charging port", price: 999, desc: "Loose connector or intermittent charging" },
  { id: "camera", name: "Camera repair", price: 1299, desc: "Blur, focus, lens or camera-module issue" },
  { id: "diagnostic", name: "Device diagnostics", price: 299, desc: "Not sure what is wrong? Start here" },
];