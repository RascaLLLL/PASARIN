# PASARIN Figma references

All dimensions below come from high-fidelity `get_design_context` responses, not inferred from screenshots. Screenshots are reference targets only; they are not runtime assets. Exact per-image classes and nearby containers are in `reference-summary.json` under `image_geometry`.

| Reference key | Layout and content |
| --- | --- |
| `catalog_desktop` | White navigation, 80px horizontal padding, top20px, category row48px. Content padding32px 80px and gap28px. Blue-tinted hero text panel625px with36px padding and title36px; right hero image height338px. Four-column product rows; photo214px high, cards radius15px with light border/shadow. Category pills32px high, blue active. |
| `catalog_mobile` | 390px design with20px side padding. Header16px vertical, logo symbol32px and wordmark105x35px, Menu; search44px high on its own row. Content24px vertical and gap24px. Hero text title28px, padding20px and image110px wide on right. Two-column products with150px photos,14px product titles,12px metadata. |
| `login_desktop` | Blue identity panel510px wide,900px high, padding top52px and50px sides; PASARIN48px, white logo tile116px. Four precisely cropped product cutouts use image geometry from reference. Right region padding32px 100px; form max600px. Username/email, password visibility, forgot password, submit, Facebook/Google alternatives, signup link. |
| `login_mobile` | Compact logo header, no large blue illustration panel; full-width form in24px side padding. Username/email and password; same alternative login actions and recovery links. |
| `signup_desktop` | Same identity panel and cutouts as login. Form: username, email, password, confirmation; minimum8 characters; Facebook/Google alternatives. Figma's original copy says buyer registration; parent task intentionally changes it to common-account registration. |
| `signup_mobile` | Compact logo header,24px side padding, full-width stacked form and social buttons. Same username/email/password/confirmation fields. |
| `product_desktop` | Public navigation matches catalog. Main two-column product layout: gallery592px wide, main image480px high with radius18px; four thumbnail entries (main + three alternate gallery photos). Title Arabica Gayo, price65000, description, seller card and WhatsApp. Related products: Matcha, Kopi Susu, Orange Juice. |
| `product_mobile` | Main product image320px high; vertically stacked gallery and product content. Related products use150px photo slots. Exact gallery variants and crops are in reference summary. |
| `store_desktop` | Public navigation, breadcrumb, cafe banner220px high; identity/logo/description/contact details below. Four product cards: Arabica, Matcha, Kopi Susu, Orange Juice. Seller logo is text `dsc.` inside the designed tile. |
| `owner_dashboard_desktop` | Sidebar232px with24px padding, header88px with32px horizontal padding; main pale gray background. Three metric cards, verification alert, product table and Add Product. Font headings Inter; body Arimo, with a few kit components using Inter. |
| `admin_dashboard_desktop` | Same232px sidebar and88px header. Four metrics, pending owner/store review table, quick actions and verification summary. Main background #F5F7FB; primary #006FFD; cards white. |
| `owner_profile_desktop` | Shared owner shell, content32px vertical and40px horizontal. White rounded form panel28px padding plus350px public preview;24px column gap. Fields: store name, category, description, address, owner name, WhatsApp; logo JPG/PNG max2MB ratio1:1, banner JPG/PNG max5MB1200x400. Public preview includes logo/banner, verified label, location, description, reputation and products. |
| `verification_detail_desktop` | Shared admin shell. Owner/store details, KTP and NIB document placeholder cards (private), approve/reject actions, right public-store preview. Task changes verification scope to account identity once; store publication remains independent. |
| `report_detail_desktop` | Shared admin shell. Reported product details and store identity; decision area with retain/hide actions and mandatory reason; reporter identity, received time, report reason and impact notes. |

## Asset rules

- Runtime dictionary: `assets/js/figma-assets.js`, global `window.PASARIN_ASSETS`.
- All dictionary values are local project-relative paths. Source URLs occur only under `tmp/figma`.
- All167 assets exist and are nonempty; 91 unique content hashes. Duplicates were retained at their semantic paths so current references do not break.
- SVG root dimensions are preserved. `icon-dimensions.json` lists every icon's natural width, height and viewBox.
- Chat, Store, ShoppingBagOutlined and Categories icons are24x24; Search16x16; ShieldCheck/LogOut20x20; ChevronDown14x14; CalendarDays and admin metric icons18x18; ChevronRight16x16. Profile is24.0009x24.0006.
- Product photos supplied via app data can share exact-byte matches. Keep static logo, hero, cutouts and icons in their original design slots.

## Retrieval limit

Figma Starter's tool limit was reached on `84:90030` (owner-dashboard mobile). Called `whoami` as required; active team is Starter with Full seat. No further Figma calls were made. Other uncaptured frames must use retrieved shared component/layout references plus the agreed feature specifications; do not claim those pages were individually compared with their Figma frames.
