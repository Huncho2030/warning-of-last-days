import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function BookshopHighlight() {
  const featuredBooks = [
    {
      id: 1,
      title: 'The Great Controversy',
      author: 'Ellen G. White',
      price: 'Ksh 1,500',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Spirit of Prophecy',
    },
    {
      id: 2,
      title: 'Ministry of Healing',
      author: 'Ellen G. White',
      price: 'Ksh 1,200',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health',
    },
    {
      id: 3,
      title: 'Daniel and Revelation',
      author: 'Uriah Smith',
      price: 'Ksh 1,800',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Prophecy',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Featured Books</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our collection of Spirit of Prophecy books, Bibles, and
            educational materials
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600">{book.price}</span>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/bookshop"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Shop All Books
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
