export interface Product {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  features: string[];
  color: string;
}

export const categories = [
  { key: 'tous', label: 'Tous' },
  { key: 'detergents', label: 'Détergents' },
  { key: 'desodorisants', label: 'Désodorisants' },
  { key: 'insecticides', label: 'Insecticides' },
  { key: 'nettoyants', label: 'Nettoyants' },
];

export const products: Product[] = [
  // Détergents
  {
    slug: 'gel-lave-sol-lavande',
    name: 'Gel Lave-Sol Lavande',
    category: 'detergents',
    categoryLabel: 'Détergents',
    description: 'La douceur de la lavande pour un intérieur frais et parfumé. Notre gel lave-sol lavande nettoie en profondeur tout en laissant un parfum apaisant qui dure des heures. Idéal pour carrelage, marbre et tous types de sols.',
    image: '/images/products/product-1.jpg',
    features: ['Parfum lavande longue durée', 'Nettoyage en profondeur', 'Convient à tous les sols', 'Formule concentrée'],
    color: '#9B59B6',
  },
  {
    slug: 'gel-lave-sol-citron',
    name: 'Gel Lave-Sol Citron',
    category: 'detergents',
    categoryLabel: 'Détergents',
    description: 'La puissance dégraissante du citron pour des sols impeccables. Élimine les taches tenaces et laisse une fraîcheur citronnée vivifiante dans toute la maison.',
    image: '/images/products/gel-1.jpg',
    features: ['Action dégraissante puissante', 'Fraîcheur citronnée', 'Élimine les taches tenaces', 'Usage quotidien'],
    color: '#F1C40F',
  },
  {
    slug: 'gel-lave-sol-floral',
    name: 'Gel Lave-Sol Floral',
    category: 'detergents',
    categoryLabel: 'Détergents',
    description: 'Un bouquet de fleurs printanières pour transformer le nettoyage en moment de plaisir. Notes délicates de rose et jasmin pour une ambiance accueillante.',
    image: '/images/products/product-2.jpg',
    features: ['Notes florales délicates', 'Doux pour les surfaces', 'Brillance incomparable', 'Biodégradable'],
    color: '#FF69B4',
  },
  {
    slug: 'gel-lave-sol-pin',
    name: 'Gel Lave-Sol Pin',
    category: 'detergents',
    categoryLabel: 'Détergents',
    description: 'La fraîcheur naturelle du pin pour un nettoyage puissant et revigorant. Parfait pour les grandes surfaces et les espaces de vie.',
    image: '/images/products/gel-2.jpg',
    features: ['Parfum pin naturel', 'Pouvoir nettoyant renforcé', 'Grandes surfaces', 'Action antibactérienne'],
    color: '#27AE60',
  },
  {
    slug: 'gel-lave-sol-jasmin',
    name: 'Gel Lave-Sol Jasmin',
    category: 'detergents',
    categoryLabel: 'Détergents',
    description: 'L\'élégance du jasmin dans un gel nettoyant haute performance. Un parfum oriental raffiné qui embaume votre intérieur pendant des heures.',
    image: '/images/products/product-3.jpg',
    features: ['Parfum jasmin oriental', 'Haute performance', 'Longue tenue olfactive', 'Formule premium'],
    color: '#E91E8C',
  },
  {
    slug: 'gel-multi-surfaces',
    name: 'Gel Multi-Surfaces',
    category: 'detergents',
    categoryLabel: 'Détergents',
    description: 'Le nettoyant universel par excellence. Une seule formule pour toutes les surfaces de votre maison : sols, plans de travail, sanitaires et plus encore.',
    image: '/images/products/product-4.jpg',
    features: ['Toutes surfaces', 'Formule universelle', 'Économique', 'Sans traces'],
    color: '#00A3E0',
  },
  // Désodorisants
  {
    slug: 'desodorisant-citron',
    name: 'Désodorisant Citron',
    category: 'desodorisants',
    categoryLabel: 'Désodorisants',
    description: 'Explosion de fraîcheur citronnée. Neutralise instantanément les mauvaises odeurs et laisse un parfum vivifiant dans toutes les pièces.',
    image: '/images/products/spray-1.jpg',
    features: ['Fraîcheur intense', 'Efficacité 24h', 'Sans résidu', 'Spray longue portée'],
    color: '#F1C40F',
  },
  {
    slug: 'desodorisant-floral',
    name: 'Désodorisant Floral',
    category: 'desodorisants',
    categoryLabel: 'Désodorisants',
    description: 'Un bouquet de fleurs printanières en spray pour une ambiance apaisante et naturelle. Parfait pour le salon et les chambres.',
    image: '/images/products/spray-2.jpg',
    features: ['Notes florales naturelles', 'Ambiance apaisante', 'Format pratique', 'Non irritant'],
    color: '#E91E8C',
  },
  {
    slug: 'desodorisant-lavande',
    name: 'Désodorisant Lavande',
    category: 'desodorisants',
    categoryLabel: 'Désodorisants',
    description: 'La sérénité de la lavande en spray. Idéal pour créer une atmosphère relaxante dans votre chambre ou salle de bain.',
    image: '/images/products/spray-3.jpg',
    features: ['Effet relaxant', 'Parfum authentique', 'Idéal chambre & salle de bain', 'Longue durée'],
    color: '#9B59B6',
  },
  {
    slug: 'desodorisant-ocean',
    name: 'Désodorisant Océan',
    category: 'desodorisants',
    categoryLabel: 'Désodorisants',
    description: 'La brise marine chez vous. Notes fraîches et iodées pour une sensation de grand air et de pureté dans toute la maison.',
    image: '/images/products/spray-1.jpg',
    features: ['Brise marine fraîche', 'Sensation de pureté', 'Neutralise les odeurs', 'Toutes pièces'],
    color: '#00A3E0',
  },
  // Insecticides
  {
    slug: 'insecticide-multi-insectes',
    name: 'Insecticide Multi-Insectes',
    category: 'insecticides',
    categoryLabel: 'Insecticides',
    description: 'Protection totale contre tous les insectes volants et rampants. Action foudroyante et effet barrière longue durée pour un foyer sans nuisibles.',
    image: '/images/products/spray-2.jpg',
    features: ['Action foudroyante', 'Effet barrière 48h', 'Tous insectes', 'Usage intérieur/extérieur'],
    color: '#E74C3C',
  },
  {
    slug: 'insecticide-cafards-rampants',
    name: 'Insecticide Cafards & Rampants',
    category: 'insecticides',
    categoryLabel: 'Insecticides',
    description: 'Formule spécialisée contre les cafards, fourmis et insectes rampants. Pénètre dans les recoins pour une élimination complète.',
    image: '/images/products/spray-3.jpg',
    features: ['Spécial rampants', 'Pénètre les recoins', 'Élimination complète', 'Effet résiduel longue durée'],
    color: '#C0392B',
  },
  // Nettoyants
  {
    slug: 'javel-brilex',
    name: 'Javel Brilex',
    category: 'nettoyants',
    categoryLabel: 'Nettoyants',
    description: 'Eau de Javel concentrée Brilex pour une désinfection maximale. Élimine 99,9% des bactéries et germes. Indispensable pour l\'hygiène de la maison.',
    image: '/images/products/product-1.jpg',
    features: ['Désinfection 99,9%', 'Formule concentrée', 'Blanchissant puissant', 'Multi-usage'],
    color: '#00A3E0',
  },
  {
    slug: 'nettoyant-vitre',
    name: 'Nettoyant Vitre',
    category: 'nettoyants',
    categoryLabel: 'Nettoyants',
    description: 'Des vitres cristallines sans effort. Notre formule anti-traces sèche rapidement et laisse vos fenêtres et miroirs parfaitement transparents.',
    image: '/images/products/gel-1.jpg',
    features: ['Anti-traces', 'Séchage rapide', 'Vitres & miroirs', 'Sans ammoniaque'],
    color: '#3498DB',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
