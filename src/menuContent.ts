import type { Language } from './content'

type Translation = Record<Language, string>

export interface MenuProduct {
  id: string
  name: string
  description: Translation
  price: number
  perPiece?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  subtitle: Translation
  introduction: Translation
  products: MenuProduct[]
}

// Names, Romanian descriptions and prices come from the
// owner-supplied menu poster. Prices are shared by both languages.
export const menuCategories: MenuCategory[] = [
  {
    id: 'pastries',
    name: 'Honey Pastries',
    subtitle: { ro: 'Patiserie cu miere', en: 'Honey-inspired pastries' },
    introduction: {
      ro: 'Croissante, rulouri și prăjituri cu un strop de miere.',
      en: 'Croissants, rolls, and little cakes with a touch of honey.',
    },
    products: [
      {
        id: 'honey-twist',
        name: 'Honey Twist',
        price: 16,
        description: {
          ro: 'Croissant răsucit cu miere, scorțișoară și nuci caramelizate.',
          en: 'Twisted croissant with honey, cinnamon, and caramelised walnuts.',
        },
      },
      {
        id: 'honey-brioche',
        name: 'Honey Brioche',
        price: 14,
        description: {
          ro: 'Brioșă pufoasă cu miere de flori și unt.',
          en: 'Fluffy brioche with blossom honey and butter.',
        },
      },
      {
        id: 'pistachio-roll',
        name: 'Bee Pistachio Roll',
        price: 19,
        description: {
          ro: 'Rulou din aluat laminat cu cremă de fistic, miere și coajă de portocală.',
          en: 'Laminated pastry roll with pistachio cream, honey, and orange zest.',
        },
      },
      {
        id: 'cinnamon-bun',
        name: 'Honey Cinnamon Bun',
        price: 17,
        description: {
          ro: 'Rulou cu scorțișoară, miere și cremă de brânză.',
          en: 'Cinnamon roll with honey and cream cheese.',
        },
      },
      {
        id: 'apple-danish',
        name: 'Apple Honey Danish',
        price: 16,
        description: {
          ro: 'Patiserie daneză cu mere caramelizate, miere și cremă de vanilie.',
          en: 'Danish pastry with caramelised apples, honey, and vanilla cream.',
        },
      },
      {
        id: 'madeleines',
        name: 'Honey Madeleines',
        price: 7,
        perPiece: true,
        description: {
          ro: 'Mini-prăjituri franțuzești cu miere, unt și lămâie.',
          en: 'Little French cakes with honey, butter, and lemon.',
        },
      },
      {
        id: 'almond-bites',
        name: 'Honey Almond Bites',
        price: 8,
        perPiece: true,
        description: {
          ro: 'Mini-prăjituri cu migdale, unt rumenit și miere.',
          en: 'Little almond cakes with browned butter and honey.',
        },
      },
      {
        id: 'crunch-rolls',
        name: 'Honey Crunch Rolls',
        price: 12,
        description: {
          ro: 'Rulouri crocante din foi fine, cu nucă, scorțișoară și sirop cu miere.',
          en: 'Crisp, delicate pastry rolls with walnuts, cinnamon, and honey syrup.',
        },
      },
      {
        id: 'honey-tart',
        name: 'Golden Honey Tart',
        price: 18,
        description: {
          ro: 'Tartă cu cremă de lămâie, miere și bezea italiană.',
          en: 'Lemon cream tart with honey and Italian meringue.',
        },
      },
      {
        id: 'beehive-cake',
        name: 'Beehive Cake',
        price: 22,
        description: {
          ro: 'Tort cu foi fragede, cremă fină de smântână și miere.',
          en: 'Tender layered cake with sour cream and honey.',
        },
      },
    ],
  },
  {
    id: 'specials',
    name: 'Honey Specials',
    subtitle: { ro: 'Preparate savuroase', en: 'Something a little more' },
    introduction: {
      ro: 'De la clătite la prânzuri sărate, cu mierea în prim-plan.',
      en: 'From pancakes to savoury lunches, with honey at the heart.',
    },
    products: [
      {
        id: 'pancakes',
        name: 'Honey Pancakes',
        price: 34,
        description: {
          ro: 'Clătite pufoase cu unt, miere, fructe de pădure și nuci caramelizate.',
          en: 'Fluffy pancakes with butter, honey, berries, and caramelised walnuts.',
        },
      },
      {
        id: 'ricotta-toast',
        name: 'Honey Ricotta Toast',
        price: 32,
        description: {
          ro: 'Pâine cu maia, ricotta cremoasă, miere, fistic și smochine.',
          en: 'Sourdough toast with creamy ricotta, honey, pistachios, and figs.',
        },
      },
      {
        id: 'crunch-chicken',
        name: 'Honey Crunch Chicken',
        price: 42,
        description: {
          ro: 'Pui crocant, waffles sărate, sos de miere cu chilli și salată proaspătă.',
          en: 'Crispy chicken, savoury waffles, honey-chilli sauce, and fresh salad.',
        },
      },
      {
        id: 'hive-salad',
        name: 'Golden Hive Salad',
        price: 38,
        description: {
          ro: 'Halloumi rumenit, mix de salate, pere, nuci și dressing cu miere și lămâie.',
          en: 'Golden halloumi, mixed leaves, pears, walnuts, and a honey-lemon dressing.',
        },
      },
      {
        id: 'bee-sandwich',
        name: 'Buzzy Bee Sandwich',
        price: 36,
        description: {
          ro: 'Chiflă brioche, pui la grătar, cheddar, ceapă caramelizată și sos honey mustard.',
          en: 'Brioche bun with grilled chicken, cheddar, caramelised onions, and honey mustard.',
        },
      },
    ],
  },
  {
    id: 'brews',
    name: 'Buzzy Brews',
    subtitle: { ro: 'Cafea & băuturi', en: 'Coffee & drinks' },
    introduction: {
      ro: 'Cafea, ceai și băuturi răcoritoare, în stil Buzzy Bean.',
      en: 'Coffee, tea, and refreshing sips, the Buzzy Bean way.',
    },
    products: [
      {
        id: 'bee-latte',
        name: 'Honey Bee Latte',
        price: 19,
        description: {
          ro: 'Espresso, lapte și sirop de miere.',
          en: 'Espresso, milk, and honey syrup.',
        },
      },
      {
        id: 'hive-latte',
        name: 'Golden Hive Latte',
        price: 20,
        description: {
          ro: 'Latte cu miere, scorțișoară și vanilie.',
          en: 'Latte with honey, cinnamon, and vanilla.',
        },
      },
      {
        id: 'iced-latte',
        name: 'Iced Honey Latte',
        price: 19,
        description: {
          ro: 'Espresso, lapte rece, sirop de miere.',
          en: 'Espresso, cold milk, and honey syrup.',
        },
      },
      {
        id: 'calm-tea',
        name: 'Bee Calm Tea',
        price: 17,
        description: {
          ro: 'Ceai de plante, miere și lămâie.',
          en: 'Herbal tea, honey, and lemon.',
        },
      },
      {
        id: 'buzz-fizz',
        name: 'Honey Buzz Fizz',
        price: 18,
        description: {
          ro: 'Apă carbogazoasă, lămâie, sirop de miere și mentă.',
          en: 'Sparkling water, lemon, honey syrup, and mint.',
        },
      },
      {
        id: 'chocolate',
        name: 'Chocolate Honey',
        price: 20,
        description: {
          ro: 'Ciocolată caldă cu miere și frișcă.',
          en: 'Hot chocolate with honey and whipped cream.',
        },
      },
    ],
  },
  {
    id: 'combos',
    name: 'Sweet Combos',
    subtitle: { ro: 'Combinații recomandate', en: 'Better together' },
    introduction: {
      ro: 'Ceva dulce și o cafea bună. Perechi alese pentru pauza ta.',
      en: 'Something sweet and a good coffee. A pairing for your break.',
    },
    products: [
      {
        id: 'morning-buzz',
        name: 'Morning Buzz',
        price: 32,
        description: {
          ro: 'Honey Twist + Honey Bee Latte',
          en: 'Honey Twist + Honey Bee Latte',
        },
      },
      {
        id: 'little-bee',
        name: 'Little Bee',
        price: 28,
        description: {
          ro: 'Madeleines (3 buc.) + Latte',
          en: 'Madeleines (3 pieces) + Latte',
        },
      },
      {
        id: 'honey-delight',
        name: 'Honey Delight',
        price: 30,
        description: {
          ro: 'Beehive Cake + Cappuccino',
          en: 'Beehive Cake + Cappuccino',
        },
      },
      {
        id: 'afternoon-treat',
        name: 'Afternoon Treat',
        price: 30,
        description: {
          ro: 'Apple Honey Danish + Iced Latte',
          en: 'Apple Honey Danish + Iced Latte',
        },
      },
    ],
  },
]

export const menuPageCopy = {
  ro: {
    title: 'Un strop de miere.',
    accent: 'O mulțime de bun.',
    introduction:
      'Patiserie aurie, preparate savuroase și cafea bună. Descoperă meniul Buzzy Bean, de la prima înghițitură până la ultima firimitură.',
    fullMenu: 'Vezi meniul complet',
    backHome: 'Înapoi la cafenea',
    categoriesLabel: 'Categorii din meniu',
    perPiece: '/ buc.',
    ingredients: 'Întreabă-ne despre ingrediente și alergeni.',
    contact: 'Ai o întrebare despre meniu?',
    contactAction: 'Scrie-ne',
  },
  en: {
    title: 'A little honey.',
    accent: 'A whole lot of good.',
    introduction:
      'Golden pastries, savoury plates, and good coffee. Explore the Buzzy Bean menu, from the first sip to the very last crumb.',
    fullMenu: 'View the full menu',
    backHome: 'Back to the café',
    categoriesLabel: 'Menu categories',
    perPiece: '/ piece',
    ingredients: 'Ask us about ingredients and allergens.',
    contact: 'A question about the menu?',
    contactAction: 'Get in touch',
  },
} satisfies Record<Language, Record<string, string>>
