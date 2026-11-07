// Kronospan material matching sheet
// =================================
//
// How to use this file:
// 1. For each material below, fill in the fields using the real decor
//    info Kronospan gave you (or that you find on their materials).
// 2. Leave a field "" (empty string) if you don't have that piece yet —
//    you don't need every field filled in to send it back.
// 3. You can add more materials to a combination's list, or add a new
//    combination key entirely (let me know the image/description for a
//    brand new one).
// 4. Save the file and tell me it's ready to re-check.
//
// Fields:
//   placeholderName  - the name currently shown on the site (safe to rename)
//   decorName        - Kronospan's official decor name, e.g. "Natural Oak"
//   decorCode        - Kronospan's official decor code, e.g. "K009 PW"
//   productUrl       - link to that decor's page on Kronospan's site/shop
//   image            - path/URL to a swatch photo of this exact decor
//                       (local file: drop it in public/assets/images/materials/
//                       and put the path here, e.g.
//                       "/assets/images/materials/k488-rutherfork-oak.jpg")

export type MaterialSeedEntry = {
  placeholderName: string;
  decorName: string;
  decorCode: string;
  productUrl: string;
  image: string;
};

export const materialSeedData: Record<string, MaterialSeedEntry[]> = {
  "warm-minimalism": [
    {
      placeholderName: "K705 Stonehaven Sand",
      decorName: " Stonehaven Sand",
      decorCode: "K705",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K705",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k705_sized.jpg.avif?itok=g_8m3on4",
    },
    {
      placeholderName: "K691 Almond Granada",
      decorName: "Almond Granada",
      decorCode: "K691",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K691",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k691_sized.jpg.avif?itok=4z0Y-QyS",
    },
    {
      placeholderName: "K688 Natural Canella Strata",
      decorName: "Natural Canella Strata",
      decorCode: "K688",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K689",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k688_sized.jpg.avif?itok=aeHTZODb",
    },
    {
      placeholderName: "K681 Macadamia",
      decorName: "Macadamia",
      decorCode: "K681",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K681",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k681_sized.jpg.avif?itok=9kLDVwA9",
    },
  ],

  "urban-contrast": [
    {
      placeholderName: "K537 Ristretto Baroque Oak",
      decorName: "Ristretto Baroque Oak",
      decorCode: "K537",
      productUrl: "http://kronospan.com/en_EN/decors/view/kronodesign/standard/K537/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K537_RW_Ristretto_Baroque_Oak.jpg.avif?itok=Gw2Ov7yi",
    },
    {
      placeholderName: "K594 Breccia Vivaldo",
      decorName: "Breccia Vivaldo",
      decorCode: "K594",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/worktops-slim-line-plus/K594/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K594_SU_Breccia_Vivaldo.jpg.avif?itok=n23A8-hn",
    },
    {
      placeholderName: "K5982 Mussel",
      decorName: "Mussel",
      decorCode: "K5982",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/color/K5982/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K5982_BS_Mussel.jpg.avif?itok=cBUy0cvo",
    },
    {
      placeholderName: "K514 Silk Road",
      decorName: "Silk Road",
      decorCode: "K514",
      productUrl: "https://kronospan.com/en_EN/decors/view/krono-original/rocko-tiles/R254/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/R254_SE_Silk_Road.jpg.avif?itok=xIjrSRn6",
    },
  ],

  "coastal-calm": [
    { placeholderName: "K696 Umber Primavera Oak", decorName: "Umber Primavera Oak", decorCode: "K696", productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K696/", image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K696_Umber_Primavera_Oak_0.jpg.avif?itok=5usR6Yqs" },
    {
      placeholderName: "K521 Smoke Green", decorName: "Smoke Green", decorCode: "K521",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/color/K521/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K521_Smoke_Green_UM.jpg.avif?itok=cV7hhvGA"
    },
    {
      placeholderName: "K209 Crema Limestone", decorName: "Crema Limestone", decorCode: "K209",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/worktops-round-edge/K209/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K209_Crema_Limestone_RS.jpg.avif?itok=CxJXDBa7"
    },
    {
      placeholderName: "K550 Dove Venera", decorName: "Dove Venera", decorCode: "K550 ",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/worktops-square-edge/K550/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K550_Dove_Venera_SL.jpg.avif?itok=kATa4BmK"
    },
  ],

  "desert-stone": [
    {
      placeholderName: "K488 Rutherford Oak",
      decorName: "Rutherford Oak", decorCode: "K488 ",
      productUrl: "https://kronospan.com/en_EN/decors/view/krono-original/organic-clever-silent-6-1-mm-perfect-pad-eco/K488/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K488_CM_Rutherford_Oak.jpg.avif?itok=rqY6Mgx8"
    },
    {
      placeholderName: "K7181 Dark Chocolate",
      decorName: "Dark Chocolate", decorCode: "K7181",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/color/K7181/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K7181_BS_Dark_Chocolate.jpg.avif?itok=UfEuPmA7"
    },
    {
      placeholderName: "K213 Dark Tivoli", decorName: "Dark Tivoli", decorCode: "K213",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/worktops-round-edge/K213/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K213_RS_Dark_Tivoli.jpg.avif?itok=n-SOaZO4"
    },
    {
      placeholderName: "K096 Clay Grey", decorName: "Clay Grey", decorCode: "K096",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/color/K096/",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K096_SU_Clay_Grey.jpg.avif?itok=Qf0f9hKC"
    },
  ],

  "modern-heritage": [
    { placeholderName: "Aged Bronze", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Jordanian Limestone", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Ebony Walnut", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Cream Marble", decorName: "", decorCode: "", productUrl: "", image: "" },
  ],

  "dusty-rose": [
    {
      placeholderName: "K704 Perlino Sabbia",
      decorName: "Perlino Sabbia", decorCode: "K704 ",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K704",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k704_sized_0.jpg.avif?itok=3yH5Yx1m"
    },
    {
      placeholderName: "K750 Agra Travertine",
      decorName: "Agra Travertine", decorCode: "K750",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/worktops-slim-line-plus/K750",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k750_sized.jpg.avif?itok=KMNVq0u6"
    },
    {
      placeholderName: "K683 Cajun",
      decorName: "Cajun", decorCode: "K683",
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K683",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k683_sized.jpg.avif?itok=5IsOV7bx"
    },
    {
      placeholderName: "K682 Alpaca", decorName: "Alpaca",
      decorCode: "K682",
      productUrl: "https://kronospan.com/es_ES/decors/view/kronodesign/trend-designing-reality/K682",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k682_sized.jpg.avif?itok=e1W4X9Bg"
    },
    {
      placeholderName: "K694 Silk Primavera Oak", decorName: "Silk Primavera Oak",
      decorCode: "K694",
      productUrl: "https://kronospan.com/es_ES/decors/view/kronodesign/trend-designing-reality/K694",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k694_sized.jpg.avif?itok=cIHcjgjH"
    },
    {
      placeholderName: "K695 Straw Primavera Oak", 
      decorName: "Straw Primavera Oak",
      decorCode: "K695",
      productUrl: "https://kronospan.com/es_ES/decors/view/kronodesign/trend-designing-reality/K695",
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/k695_sized.jpg.avif?itok=DiXFeF09"
    },
  ],

  "quiet-contrast": [
    { placeholderName: "4299 Dark Atelier", 
      decorName: "Dark Atelier", decorCode: "4299", 
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/contempo/4299/", 
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/4299_SU_Dark_Atelier_1.jpg.avif?itok=4YGQC9F4" },
    { placeholderName: "K553 Galaxus",
       decorName: "Galaxus", decorCode: "K553", 
       productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/worktops-square-edge/K553/", 
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K553_SU_Galaxus_1.jpg.avif?itok=EPLbEaSl" },
    { placeholderName: "K697 Cocoa Primavera Oak",
       decorName: "Cocoa Primavera Oak", 
       decorCode: "K697 ",
        productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K697/",
         image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K697_PV_Cocoa_Primavera_1.jpg.avif?itok=gV8EQTo0" },
    { placeholderName: "K684 Black Truffle", 
      decorName: "Black Truffle", decorCode: "K684", 
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K684/", 
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K684_PD_Black_Truffle_1.jpg.avif?itok=4pozV-f4" },
          { placeholderName: "AL06 Brushed Bronze", 
      decorName: "Brushed Bronze", decorCode: "AL06", 
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/metal/AL06/", 
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/AL06_Brushed_Bronze_1.jpg.avif?itok=DN0L6yTR" }
  ],

  "midnight-jewel": [
    { placeholderName: "K515 Spice Red",
       decorName: "Spice Red", decorCode: "K515", 
       productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/color/K515/",
        image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K515_BS_Spice_Red.jpg.avif?itok=eyQlE-0M" },
    { placeholderName: "K536 Amber Baroque Oak",
       decorName: "Amber Baroque Oak", decorCode: "K536",
        productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/contempo/K536/", 
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K536_Amber_Baroque_Oak.jpg.avif?itok=Z3vSfrQV" },
    { placeholderName: "K680 Dark Forest", 
      decorName: "Dark Forest", decorCode: "K680", 
      productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/trend-designing-reality/K687/", 
      image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/K680_Dark_Forest.jpg.avif?itok=cFJpYbVY" },
    { placeholderName: "AL06 Brushed Copper",
       decorName: "Brushed Copper", decorCode: "AL06",
        productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/metal/AL05/", 
        image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/AL06_Brused_Cooper.jpg.avif?itok=JJ00ANOa" },
         { placeholderName: "R070 Incando",
       decorName: "Incando", decorCode: "R070",
        productUrl: "https://kronospan.com/en_EN/decors/view/kronodesign/metal/AL05/", 
        image: "https://krono-dc.com/sites/default/files/styles/max_325x325/public/combinations/AL06_Brused_Cooper.jpg.avif?itok=JJ00ANOa" },
  ],

  "bold-statement": [
    { placeholderName: "High-Gloss Black Lacquer", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Speckled Terrazzo", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Brushed Bronze Metal", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Signal Red Lacquer", decorName: "", decorCode: "", productUrl: "", image: "" },
  ],

  "warm-radiance": [
    { placeholderName: "Rich Red Lacquer", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Natural Oak Grain", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Soft White Marble", decorName: "", decorCode: "", productUrl: "", image: "" },
    { placeholderName: "Brushed Silver Metal", decorName: "", decorCode: "", productUrl: "", image: "" },
  ],
};

export default materialSeedData;
