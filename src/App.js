import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import Checkout from './views/Checkout';
import CategoryDetail from './views/CategoryDetail';
import Order from './views/Order';

const products = [
  {
    id: 1,
    name: 'Whey Protein',
    description: 'Muscle building: Muscles love protein, especially complete proteins like whey. Wound healing: The amino acids in whey protein help repair skin and tissues from wounds or surgery. Weight gain and nutritional boost: People who need to gain weight can benefit from whey protein.',
    price: 23.59,
    img: 'whey-protein.png',
    category: ['muscle-mass', 'weight-loss']
  },
  {
    id: 2,
    name: 'Creatine Monohydrate',
    description: 'One of the most highly researched forms of creatine in the world — our hard-hitting creatine monohydrate powder is scientifically proven to increase physical performance,1 by improving overall power',
    price: 14.99,
    img: 'whey-protein.png',
    category: ['muscle-mass']
  },
  {
    id: 3,
    name: 'Carnitine',
    description: 'Carnitine is created in the body from the amino acids lysine and methionine. Whatever your fitness goal, these tablets have been formulated to promote energy to help you even in your toughest workouts, as well as support a balanced diet.',
    price: 8.99,
    img: 'whey-protein.png',
    category: ['health-wellbeing', 'weight-maintenance']
  },
  {
    id: 4,
    name: 'Instant Oats',
    description: 'Easy way to make mass gainer shaker, full of calories and plenty of nutrients',
    price: 18.89,
    img: 'whey-protein.png',
    category: ['muscle-mass', 'weight-maintenance']
  },
  {
    id: 5,
    name: 'Potassium',
    description: 'Potassium is necessary for the normal functioning of all cells. It regulates the heartbeat, ensures proper function of the muscles and nerves, and is vital for synthesizing protein and metabolizing carbohydrates.',
    price: 6.99,
    img: 'whey-protein.png',
    category: ['vitamins-minerals']
  },
  {
    id: 6,
    name: 'Beta-Alanine',
    description: 'Beta-alanine enhances performance by increasing exercise capacity and decreasing muscle fatigue. It also has antioxidant, immune-enhancing and anti-aging properties. You can get beta-alanine from foods that contain carnosine or through supplements. The recommended dose is 2/5 grams daily',
    price: 21.85,
    img: 'whey-protein.png',
    category: ['muscle-mass']
  },
  {
    id: 7,
    name: 'Multivitamin',
    description: 'Our ultra formula of essential vitamins and minerals including calcium, vitamin D, selenium, vitamin B5, biotin, as well as energizing natural extracts3 — boosting your everyday wellbeing while training hard, and dealing with the stresses and strains of a busy lifestyle.',
    price: 21.85,
    img: 'whey-protein.png',
    category: ['vitamins-minerals']
  },
  {
    id: 8,
    name: 'Isolate Whey Protein',
    description: 'Muscle building: Muscles love protein, especially complete proteins like whey. Wound healing: The amino acids in whey protein help repair skin and tissues from wounds or surgery. Weight gain and nutritional boost: People who need to gain weight can benefit from whey protein.',
    price: 35.99,
    img: 'whey-protein.png',
    category: ['muscle-mass', 'weight-loss', 'weight-maintenance']
  },
  {
    id: 9,
    name: 'Omega 3',
    description: 'Omega 3 is an essential fatty acid that your body can’t make itself, so you have to get from your diet. It’s found naturally in oily fish, such as salmon and mackerel, meaning it can be expensive to get enough from what you eat alone.',
    price: 16.99,
    img: 'whey-protein.png',
    category: ['healt-wellbeing']
  },
  {
    id: 10,
    name: 'Post Workout Mass Gainer',
    description: 'With specifically chosen ingredients to help you achieve those all-important gains, our Mass Gainer is perfect for anyone looking to bulk up.',
    price: 55.99,
    img: 'whey-protein.png',
    category: ['muscle-mass']
  },
  {
    id: 11,
    name: 'Weight Loss Powder',
    description: 'Perfect solution as a meal substitute with low calories and plenty of nutrients.',
    price: 28.99,
    img: 'whey-protein.png',
    category: ['weight-loss']
  },
  {
    id: 12,
    name: 'L-Glutamine',
    description: 'Arguably the most popular of the 20 amino acids and naturally occurring in protein, which helps to build and repair new muscle1 — it’s important for all fitness goals.',
    price: 16.99,
    img: 'whey-protein.png',
    category: ['muscle-mass', 'weight-loss', 'health-wellbeing']
  },
  {
    id: 13,
    name: 'BCAA',
    description: 'An everyday blend of the essential amino acids — leucine, isoleucine, and valine, these naturally occur in protein, which helps to build and repair new muscle1 — making sure your body’s prepared to tackle your next training session.',
    price: 16.99,
    img: 'whey-protein.png',
    category: ['muscle-mass', 'weight-loss', 'health-wellbeing', 'weight-maintenance']
  }
]

function App() {
  return (
        <Routes>
          <Route path="/" exact element={<Home products={products}/>}/>
          <Route path="/categories/:category" element={<CategoryDetail products={products}/>}/>
          <Route path="/products/:productId" element={<ProductDetail products={products}/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order-completed" element={<Order/>}/>
        </Routes>
  );
}

export default App;
