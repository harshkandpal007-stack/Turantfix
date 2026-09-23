export type Device = { brand: string; series: string; model: string; badge?: string };

export const brands = ["Apple", "Samsung", "OnePlus", "Google", "Motorola", "Nothing"];

export const brandLogos: Record<string, string> = {
  Apple: "https://cdn.simpleicons.org/apple/111111",
  Samsung: "https://cdn.simpleicons.org/samsung/1428A0",
  OnePlus: "https://cdn.simpleicons.org/oneplus/F5010C",
  Google: "https://cdn.simpleicons.org/google/4285F4",
  Motorola: "https://cdn.simpleicons.org/motorola/111111",
  Nothing: "https://cdn.simpleicons.org/nothing/111111",
};

const deviceImages: Record<string, string> = {
  Apple: "https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg?auto=compress&cs=tinysrgb&w=700",
  Samsung: "https://images.pexels.com/photos/7742503/pexels-photo-7742503.jpeg?auto=compress&cs=tinysrgb&w=700",
  OnePlus: "https://images.pexels.com/photos/10343719/pexels-photo-10343719.jpeg?auto=compress&cs=tinysrgb&w=700",
  Google: "https://images.pexels.com/photos/32218867/pexels-photo-32218867.jpeg?auto=compress&cs=tinysrgb&w=700",
  Motorola: "https://images.pexels.com/photos/215583/pexels-photo-215583.jpeg?auto=compress&cs=tinysrgb&w=700",
  Nothing: "https://images.pexels.com/photos/36768424/pexels-photo-36768424.jpeg?auto=compress&cs=tinysrgb&w=700",
};

export function getDeviceImage(device: Pick<Device, "brand" | "model" | "series">) {
  return deviceImages[device.brand] ?? deviceImages.Apple;
}

export const devices: Device[] = [
  { brand: "Apple", series: "iPhone Duo", model: "iPhone Duo", badge: "New" },
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Pro Max", badge: "New" },
  { brand: "Apple", series: "iPhone 18", model: "iPhone 18 Pro", badge: "New" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Pro Max" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Pro" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17 Air" },
  { brand: "Apple", series: "iPhone 17", model: "iPhone 17" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Pro Max" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Pro" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16 Plus" },
  { brand: "Apple", series: "iPhone 16", model: "iPhone 16" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Pro Max" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Pro" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15 Plus" },
  { brand: "Apple", series: "iPhone 15", model: "iPhone 15" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Pro Max" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Pro" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14 Plus" },
  { brand: "Apple", series: "iPhone 14", model: "iPhone 14" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13 Pro Max" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13 Pro" },
  { brand: "Apple", series: "iPhone 13", model: "iPhone 13" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12 Pro Max" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12 Pro" },
  { brand: "Apple", series: "iPhone 12", model: "iPhone 12" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11 Pro Max" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11 Pro" },
  { brand: "Apple", series: "iPhone 11", model: "iPhone 11" },
  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26 Ultra", badge: "New" },
  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26+" },
  { brand: "Samsung", series: "Galaxy S26", model: "Galaxy S26" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25 Ultra" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25+" },
  { brand: "Samsung", series: "Galaxy S25", model: "Galaxy S25" },
  { brand: "Samsung", series: "Galaxy Z", model: "Galaxy Z Fold 7" },
  { brand: "Samsung", series: "Galaxy Z", model: "Galaxy Z Flip 7" },
  { brand: "Samsung", series: "Galaxy A", model: "Galaxy A56" },
  { brand: "OnePlus", series: "OnePlus 15", model: "OnePlus 15" },
  { brand: "OnePlus", series: "OnePlus 14", model: "OnePlus 14" },
  { brand: "OnePlus", series: "Nord", model: "OnePlus Nord 5" },
  { brand: "Google", series: "Pixel 11", model: "Pixel 11 Pro XL" },
  { brand: "Google", series: "Pixel 11", model: "Pixel 11 Pro" },
  { brand: "Google", series: "Pixel 11", model: "Pixel 11" },
  { brand: "Google", series: "Pixel 10", model: "Pixel 10 Pro" },
  { brand: "Motorola", series: "Razr", model: "Razr Ultra" },
  { brand: "Motorola", series: "Edge", model: "Edge 60 Pro" },
  { brand: "Nothing", series: "Phone", model: "Phone (3)" },
  { brand: "Nothing", series: "Phone", model: "Phone (3a) Pro" },
];

export const issues = [
  { id: "screen", name: "Screen replacement", price: 1499, desc: "Cracked, flickering or unresponsive display" },
  { id: "battery", name: "Battery replacement", price: 1199, desc: "Fast drain, shutdowns or swollen battery" },
  { id: "back", name: "Back glass", price: 1399, desc: "Cracked or shattered rear glass" },
  { id: "charging", name: "Charging port", price: 999, desc: "Loose connector or intermittent charging" },
  { id: "camera", name: "Camera repair", price: 1299, desc: "Blur, focus, lens or camera-module issue" },
  { id: "diagnostic", name: "Device diagnostics", price: 299, desc: "Not sure what is wrong? Start here" },
];
