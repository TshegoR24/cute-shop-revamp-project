import React from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Dreamy Pillow Plush",
    price: "$19.99",
    image: "/DSC08764.jpg",
    description: "Ultra-soft memory foam pillow for the perfect night's sleep",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Starry Night Blanket",
    price: "$29.99",
    image: "/DSC08794.jpg",
    description: "Cozy weighted blanket with celestial design",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Cloud Soft Pajamas",
    price: "$24.99",
    image: "/DSC08890.jpg",
    description: "Breathable cotton pajamas for ultimate comfort",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Moonlight Cushion",
    price: "$34.99",
    image: "/DSC08910.jpg",
    description: "Lavender-scented pillow for relaxation",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Dream Catcher Mobile",
    price: "$39.99",
    image: "/DSC09183.jpg",
    description: "Handcrafted dream catcher for peaceful dreams",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Sleepy Time Tea Set",
    price: "$27.99",
    image: "/placeholder.svg",
    description: "Herbal tea blend for bedtime relaxation",
    rating: 4.5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#E5E7EB" />
          </linearGradient>
        </defs>
        <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default function SweetDreamCollection() {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50" id="sweet-dream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sweet Dream Collection
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our enchanting collection of sleep essentials designed to make your dreams come true
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-semibold text-pink-600">
                  {product.rating} ★
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-center mb-3">
                  <StarRating rating={product.rating} />
                </div>
                <p className="text-2xl font-bold text-pink-500 mb-4">{product.price}</p>
                <button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Sleep Essentials
          </button>
        </div>
      </div>
    </section>
  );
} 