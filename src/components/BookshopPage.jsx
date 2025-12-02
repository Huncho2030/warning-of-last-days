import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BookshopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Books' },
    { id: 'bible', name: 'Bibles' },
    { id: 'sop', name: 'Spirit of Prophecy' },
    { id: 'pioneers', name: 'Pioneer Works' },
    { id: 'children', name: "Children's Books" },
    { id: 'church', name: 'Church Resources' },
  ];

  const books = [
    {
      id: 1,
      title: 'The Great Controversy',
      author: 'Ellen G. White',
      price: 1500,
      category: 'sop',
      description:
        'The epic story of the conflict between good and evil from the destruction of Jerusalem to the end of time.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Ministry of Healing',
      author: 'Ellen G. White',
      price: 1200,
      category: 'sop',
      description:
        'Practical guidance on physical, mental, and spiritual health.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Steps to Christ',
      author: 'Ellen G. White',
      price: 800,
      category: 'sop',
      description:
        'A guide to finding a personal relationship with Jesus Christ.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Daniel and Revelation',
      author: 'Uriah Smith',
      price: 1800,
      category: 'pioneers',
      description:
        'Comprehensive verse-by-verse study of Daniel and Revelation prophecies.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Swahili Bible',
      author: 'Bible Society',
      price: 2500,
      category: 'bible',
      description: 'Complete Swahili Bible translation with study notes.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Bible Stories for Children',
      author: 'Various Authors',
      price: 1000,
      category: 'children',
      description: 'Beautiful illustrated Bible stories for young readers.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Desire of Ages',
      author: 'Ellen G. White',
      price: 1600,
      category: 'sop',
      description:
        'The life and ministry of Jesus Christ beautifully portrayed.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      title: 'Education',
      author: 'Ellen G. White',
      price: 1100,
      category: 'sop',
      description:
        'Principles of true education for this life and the life to come.',
      image:
        'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjM0ODc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === 'all' || book.category === selectedCategory;

    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === book.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="py-16">
      {/* HEADER */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Bookshop</h1>
            <p className="text-xl text-blue-100">
              Discover truth through inspired literature and biblical resources
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* SEARCH + CART */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* BOOK CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-slate-900 mb-1">{book.title}</h3>
                <p className="text-slate-500 text-sm mb-3">{book.author}</p>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {book.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600">
                    Ksh {book.price.toLocaleString()}
                  </span>

                  <button
                    onClick={() => addToCart(book)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CART SIDEBAR */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCartOpen(false)}
          ></div>

          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-slate-900">Shopping Cart</h2>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-slate-50 p-4 rounded-xl"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-slate-900 mb-2">{item.title}</h3>

                        <p className="text-blue-600 mb-2">
                          Ksh {item.price.toLocaleString()}
                        </p>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 bg-white border border-slate-300 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>

                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 bg-white border border-slate-300 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-600 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-6 bg-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-700">Total:</span>
                  <span className="text-2xl text-blue-600">
                    Ksh {cartTotal.toLocaleString()}
                  </span>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
