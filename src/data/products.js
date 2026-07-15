// ============================================================
// TRINATECH PRODUCT DATA — FULL CATALOG INDEX (832 products)
// Combines the 6 part files. Jace Studio | July 13, 2026
// 54 Royal products have image: null — UI renders a placeholder.
// ============================================================

import { PRODUCTS_1 } from "./products-part1";
import { PRODUCTS_2 } from "./products-part2";
import { PRODUCTS_3 } from "./products-part3";
import { PRODUCTS_4 } from "./products-part4";
import { PRODUCTS_5 } from "./products-part5";
import { PRODUCTS_6 } from "./products-part6";

export const PRODUCTS = [
  ...PRODUCTS_1,
  ...PRODUCTS_2,
  ...PRODUCTS_3,
  ...PRODUCTS_4,
  ...PRODUCTS_5,
  ...PRODUCTS_6,
];

export const BRANDS = ["APC", "Asus", "Brother", "Canon", "Dell", "Eaton", "Epson", "HP", "Konica Minolta", "Kyocera", "Lenovo", "MECER", "Other", "Ricoh", "Riso", "Royal", "Samsung", "Sharp", "Toshiba", "Transcend"];

export const CATEGORIES = ["Brother Inks Cartridges", "Brother Toners", "Canon Ink Cartridges", "Canon Toners", "Computers & Computer Accessories", "Computers & Computer Accessories > External Hard Disks", "Epson Ribbons & Inks", "HP Original Toners", "Inks & Toner Cartridges", "Laptops", "Maintenance Kits & Spare Parts", "Master Roll", "Master Rolls & Inks", "Monitors", "Original Hp Ink Cartridges", "Printer Parts", "Printers & Copiers", "Projectors", "Ricoh Toners", "Riso Master Rolls & Inks", "Royal Hp Compatible Toners", "Royal Kyocera Compatible Toners", "Royal Toners", "Scanner", "Sharp Toners", "Toshiba Toners", "UPS"];

export const formatPrice = (n) => `KSh ${n.toLocaleString()}`;

export default PRODUCTS;