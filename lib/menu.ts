export type MenuItem = {
  name: string;
  note?: string;
  price: string;
};

export type MenuGroup = {
  title: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  label: string;
  groups: MenuGroup[];
  footnote?: string;
};

export const menu: MenuCategory[] = [
  {
    id: "topli",
    label: "Topli napici",
    groups: [
      {
        title: "Kafa",
        items: [
          { name: "Espresso", price: "2,00" },
          { name: "Cappuccino Lavazza", price: "2,70" },
          { name: "Latte Lavazza", price: "3,30" },
          {
            name: "Latte macchiato",
            note: "Čokoladni keks, slana karamela, prženi lješnjak, vanilija, bundeva",
            price: "3,80"
          },
          { name: "Iced latte", price: "4,00" },
          { name: "Mlijeko / Soja 1dl", price: "4,00" }
        ]
      },
      {
        title: "Čokolada & Nescafe",
        items: [
          { name: "Crna topla čokolada", note: "Mandarina, kokos", price: "4,50" },
          { name: "Bijela topla čokolada", note: "Malina, jagoda", price: "4,50" },
          {
            name: "Mocha",
            note: "Crna čokolada, bijela čokolada, karamela",
            price: "4,00"
          },
          { name: "Nes Vanilija / Irish / Čokolada", price: "3,30" },
          { name: "Nes Classic", price: "2,90" },
          {
            name: "Comodo homemade tea (H/C)",
            note: "Limun, spice red berry, breskva, mango, malina, ruža",
            price: "3,50"
          }
        ]
      }
    ],
    footnote: "Dostupno i bez laktoze — pitajte za biljno mlijeko."
  },
  {
    id: "sokovi",
    label: "Cijeđeni sokovi",
    groups: [
      {
        title: "Svježe cijeđeno",
        items: [
          { name: "Limunada", price: "4,00" },
          { name: "Narandža", price: "4,40" },
          { name: "Jabuka", price: "3,00" },
          { name: "Grejp", price: "6,00" },
          { name: "Narandža — komad", price: "2,20" },
          { name: "Grejp — komad", price: "3,00" },
          { name: "Jabuka — komad", price: "1,50" },
          {
            name: "Comodo limunada",
            note: "Marakuja, zelena jabuka, jagoda",
            price: "3,50"
          }
        ]
      },
      {
        title: "Comodo mixevi",
        items: [
          { name: "Mix I", note: "Narandža, grejp", price: "5,20" },
          { name: "Mix II", note: "Narandža, limun", price: "6,20" },
          { name: "Mix III", note: "Narandža, mrkva, limun", price: "6,00" },
          { name: "Mix IV", note: "Grejp, limun", price: "7,00" },
          { name: "Mix V", note: "Grejp, narandža, limun", price: "9,20" },
          {
            name: "Mix VI–IX",
            note: "Jabuka, mrkva, ananas — u raznim kombinacijama",
            price: "3,00–6,00"
          },
          {
            name: "Comodo Mix",
            note: "Narandža, jabuka, mrkva, đumbir",
            price: "5,50"
          }
        ]
      }
    ],
    footnote: "Cijeđeno svježe, za svaku narudžbu posebno."
  },
  {
    id: "cajevi",
    label: "Premium čajevi",
    groups: [
      {
        title: "Premium čajevi",
        items: [
          { name: "Čaj Kamilica", price: "3,30" },
          { name: "Čaj Menta", price: "3,30" },
          { name: "Čaj Crni", price: "3,30" },
          { name: "Čaj Voćni", price: "3,30" }
        ]
      },
      {
        title: "\u00A0",
        items: [
          { name: "Čaj Zeleni", price: "3,30" },
          { name: "Čaj Narandža Vanilija", price: "3,30" },
          { name: "Čaj Zeleni mint maroccan", price: "3,30" }
        ]
      }
    ],
    footnote: "Poslužuje se u fildžanu, sa medom i limunom po želji."
  },
  {
    id: "vode",
    label: "Mineralne vode",
    groups: [
      {
        title: "Vode",
        items: [
          { name: "Vivia voda 0,25", price: "2,70" },
          { name: "Vivia voda 0,75", price: "7,50" },
          { name: "Vitinka gazirana 0,25", price: "2,70" },
          { name: "Vitinka gazirana 1L", price: "7,50" },
          { name: "San Pellegrino 0,25", price: "3,80" }
        ]
      },
      {
        title: "Exotic 0,25",
        items: [
          { name: "Limeta", price: "3,00" },
          { name: "Kruška", price: "3,00" },
          { name: "Dunja", price: "3,00" },
          { name: "Zmajevo voće", price: "3,00" },
          { name: "Narandža", price: "3,80" },
          { name: "Limun i grejp", price: "3,80" }
        ]
      }
    ]
  },
  {
    id: "cider",
    label: "Cider",
    groups: [
      {
        title: "Somersby · 0,33",
        items: [
          { name: "Mango", price: "5,50" },
          { name: "Marakuja", price: "5,50" },
          { name: "Jagoda", price: "5,50" },
          { name: "Mandarina", price: "5,50" }
        ]
      },
      {
        title: "\u00A0",
        items: [
          { name: "Borovnica", price: "5,50" },
          { name: "Kruška", price: "5,50" },
          { name: "Malina", price: "5,50" },
          { name: "Zova / Jabuka", price: "5,50" }
        ]
      }
    ]
  },
  {
    id: "kokteli",
    label: "Kokteli",
    groups: [
      {
        title: "Klasici",
        items: [
          { name: "Mojito", price: "8,00" },
          { name: "Whiskey Sour", price: "8,00" },
          { name: "Cuba Libre", price: "6,00" },
          { name: "Blue Lagoon", price: "6,00" }
        ]
      },
      {
        title: "Spritz & ostalo",
        items: [
          { name: "Tequila Sunrise", price: "7,00" },
          { name: "Rose Spritz", price: "7,00" },
          { name: "Aperol Spritz", price: "upit" }
        ]
      }
    ],
    footnote:
      "Kompletna koktel karta dostupna u baru — pitajte konobara za preporuku večeri."
  }
];
