/**
 * Facts about the practice used across pages. Items marked `toConfirm` are
 * waiting on the clinic; render them with the brass "to confirm" treatment.
 * Sources: PRODUCT.md and docs/brand-brief.md.
 */

export const practice = {
  name: "The Tooth Care",
  byline: "By Dr. Uzzal",
  fullName: "The Tooth Care by Dr. Uzzal",
  leadDentist: { fullName: "Dr. Orko Uzzal", shortName: "Dr. Uzzal" },
  hours: { closing: "11 PM", summary: "Daily till 11 PM", openingToConfirm: true },
  facebook: "https://www.facebook.com/thetoothcarebd",
} as const;

export interface Branch {
  slug: "bashundhara" | "nadda";
  name: string;
  address: string;
  shortAddress: string;
  landmark: string;
  phone: { display: string; tel: string };
  mapsUrl: string;
  /** Free parking is claimed by the clinic; street or lot is not yet confirmed. */
  parking: string;
}

export const branches: readonly Branch[] = [
  {
    slug: "bashundhara",
    name: "Bashundhara",
    address:
      "Ground Floor, House 25 (Bank Asia Building), Avenue Road, Block A, Bashundhara R/A, Dhaka",
    shortAddress: "House 25, Bank Asia Building, Avenue Road, Block A",
    landmark: "The Bank Asia building on Avenue Road; the sign is at street level.",
    phone: { display: "01778-128427", tel: "+8801778128427" },
    mapsUrl:
      "https://www.google.com/maps/search/House+25+Bank+Asia+Building+Avenue+Road+Block+A+Bashundhara+Dhaka",
    parking: "Free",
  },
  {
    slug: "nadda",
    name: "Nadda",
    address: "Ka-40/4, Harez Sorok, Nadda Bus Stand, Pragati Sarani, Dhaka 1212",
    shortAddress: "Ka-40/4, Harez Sorok, Nadda Bus Stand",
    landmark: "Just off the bus stand on Pragati Sarani. The original chamber.",
    phone: { display: "01767-806366", tel: "+8801767806366" },
    mapsUrl:
      "https://www.google.com/maps/search/Ka-40%2F4+Harez+Sorok+Nadda+Bus+Stand+Pragati+Sarani+Dhaka",
    parking: "Free",
  },
];

/** The chamber whose number answers calls from the site's Call buttons. */
export const primaryBranch = branches[0];

export type TreatmentGroup = "Repair" | "Straighten and whiten" | "Diagnosis";

export interface Treatment {
  slug: string;
  name: string;
  /** What the treatment fixes, in the patient's words. Same kind of phrase for every row. */
  fixes: string;
  group: TreatmentGroup;
  /** One plain paragraph on what is done. Visits and cost ranges are still to be supplied. */
  summary: string;
}

export const treatmentGroups: readonly TreatmentGroup[] = [
  "Repair",
  "Straighten and whiten",
  "Diagnosis",
];

/** The eight treatments with their own pages. */
export const featuredTreatments: readonly Treatment[] = [
  {
    slug: "root-canal",
    name: "Root canal treatment",
    fixes: "An infected or painful tooth",
    group: "Repair",
    summary:
      "The infected nerve inside the tooth is removed, the canals are cleaned and sealed, and the tooth is kept rather than pulled. It is done under local anaesthetic. Most teeth need a crown afterwards to protect them.",
  },
  {
    slug: "crowns-and-veneers",
    name: "Crowns and veneers",
    fixes: "Broken, worn, or discoloured teeth",
    group: "Repair",
    summary:
      "A crown covers a damaged tooth completely; a veneer is a thin layer bonded to the front of it. We use zirconia and porcelain, matched to the colour of your other teeth.",
  },
  {
    slug: "dental-implants",
    name: "Dental implants",
    fixes: "Missing teeth",
    group: "Repair",
    summary:
      "A titanium post is placed in the jaw where the tooth was, left to heal, and then fitted with a crown. The result looks and works like a natural tooth and does not depend on the teeth beside it.",
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    fixes: "Crooked or crowded teeth",
    group: "Straighten and whiten",
    summary:
      "Braces or clear aligners move the teeth into line over months. We explain both options, how long each takes for your teeth, and what the visits in between involve.",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic dentistry",
    fixes: "Chips, gaps, and uneven edges",
    group: "Straighten and whiten",
    summary:
      "Bonding, contouring, and gap closure reshape the front teeth with tooth-coloured material, usually in a single visit and without cutting healthy tooth away.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth whitening",
    fixes: "Stained or yellowed teeth",
    group: "Straighten and whiten",
    summary:
      "In-chamber LED whitening lightens the teeth in one sitting. We check first that whitening will work on your kind of staining, and say so if it will not.",
  },
  {
    slug: "smile-makeover",
    name: "Smile makeover",
    fixes: "Several problems, planned together",
    group: "Straighten and whiten",
    summary:
      "A plan that combines treatments, for example whitening, veneers, and gap closure, in an order that makes sense. You see the full plan and its cost before anything starts.",
  },
  {
    slug: "opg-x-ray",
    name: "OPG X-ray",
    fixes: "A full-mouth view before treatment",
    group: "Diagnosis",
    summary:
      "A panoramic X-ray of both jaws in one image, taken in the chamber in a few seconds. It shows roots, bone, and hidden problems that a look in the mouth cannot.",
  },
];

/** Routine treatments without their own page. */
export const otherTreatments: readonly string[] = [
  "Scaling and polishing",
  "Fillings",
  "Extractions",
  "Teeth jewellery",
];

export const googleReviewsUrl =
  "https://www.google.com/maps/search/The+Tooth+Care+by+Dr.+Uzzal+Dhaka";

/** Verbatim fragments from public Google reviews of the Bashundhara chamber. Names await consent. */
export const reviewQuotes = [
  { text: "Rare to find such respectful and expert care." },
  { text: "Explained everything clearly." },
  { text: "…no longer afraid of dental visits." },
] as const;
