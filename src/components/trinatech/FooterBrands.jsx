import { Link } from "react-router-dom";
import { BRANDS } from "./BrandsDropdown";

// Mirrors the structure of the other footer columns ("Pages", "Shop with us",
// "Contact") so the existing .foot-grid h4 and .foot-grid a CSS styles apply.
export default function FooterBrands() {
  return (
    <div>
      <h4>Brands</h4>
      {BRANDS.map((b) => (
        <Link key={b.slug} to={`/brands/${b.slug}`}>
          {b.name}
        </Link>
      ))}
    </div>
  );
}