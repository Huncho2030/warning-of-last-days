import {
  Leaf,
  Droplet as DropletIcon,
  Sun as SunIcon,
  Heart as HeartIcon,
  Wind,
  Apple as AppleIcon,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MedicalMissionaryPage() {
  const colorMap = {
    green: {
      light: "from-green-50",
      border: "border-green-100",
      circle: "from-green-500 to-green-600",
      text: "text-green-900",
    },
    blue: {
      light: "from-blue-50",
      border: "border-blue-100",
      circle: "from-blue-500 to-blue-600",
      text: "text-blue-900",
    },
    amber: {
      light: "from-amber-50",
      border: "border-amber-100",
      circle: "from-amber-500 to-amber-600",
      text: "text-amber-900",
    },
    cyan: {
      light: "from-cyan-50",
      border: "border-cyan-100",
      circle: "from-cyan-500 to-cyan-600",
      text: "text-cyan-900",
    },
    red: {
      light: "from-red-50",
      border: "border-red-100",
      circle: "from-red-500 to-red-600",
      text: "text-red-900",
    },
    pink: {
      light: "from-pink-50",
      border: "border-pink-100",
      circle: "from-pink-500 to-pink-600",
      text: "text-pink-900",
    },
  };
  const remedyCategories = [
    {
      icon: Leaf,
      title: 'Herbal Remedies',
      description: 'Natural healing using medicinal plants',
      color: 'green',
    },
    {
      icon: DropletIcon,
      title: 'Hydrotherapy',
      description: 'Water treatments for healing',
      color: 'blue',
    },
    {
      icon: SunIcon,
      title: 'Sunshine Therapy',
      description: 'Benefits of natural sunlight',
      color: 'amber',
    },
    {
      icon: Wind,
      title: 'Fresh Air',
      description: 'Importance of clean air',
      color: 'cyan',
    },
    {
      icon: AppleIcon,
      title: 'Nutrition',
      description: 'Plant-based diet principles',
      color: 'red',
    },
    {
      icon: HeartIcon,
      title: 'Lifestyle Medicine',
      description: 'Preventive health practices',
      color: 'pink',
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'Charcoal: The Universal Antidote',
      category: 'Natural Remedies',
      excerpt:
        'Discover the amazing healing properties of activated charcoal and how to use it for various ailments including poisoning, digestive issues, and infections.',
      image:
        'https://images.unsplash.com/photo-1707915317391-2d9e56a93541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcmVtZWRpZXMlMjBoZXJic3xlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Hot and Cold Fomentations',
      category: 'Hydrotherapy',
      excerpt:
        'Learn the proper technique for applying hot and cold treatments to boost circulation, reduce inflammation, and promote healing.',
      image:
        'https://images.unsplash.com/photo-1707915317391-2d9e56a93541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcmVtZWRpZXMlMjBoZXJic3xlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '10 min read',
    },
    {
      id: 3,
      title: "Garlic: Nature's Antibiotic",
      category: 'Herbal Medicine',
      excerpt:
        'Explore the powerful antimicrobial properties of garlic and how to use it effectively for infections, heart health, and immune support.',
      image:
        'https://images.unsplash.com/photo-1707915317391-2d9e56a93541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcmVtZWRpZXMlMjBoZXJic3xlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'The Eight Laws of Health',
      category: 'Lifestyle',
      excerpt:
        'Understanding NEWSTART principles: Nutrition, Exercise, Water, Sunlight, Temperance, Air, Rest, and Trust in God.',
      image:
        'https://images.unsplash.com/photo-1707915317391-2d9e56a93541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcmVtZWRpZXMlMjBoZXJic3xlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '12 min read',
    },
    {
      id: 5,
      title: 'Eucalyptus Steam Inhalation',
      category: 'Respiratory Health',
      excerpt:
        'A simple yet effective remedy for respiratory conditions, congestion, and sinus problems using eucalyptus leaves.',
      image:
        'https://images.unsplash.com/photo-1707915317391-2d9e56a93541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcmVtZWRpZXMlMjBoZXJic3xlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'Healing Clay Poultices',
      category: 'Natural Remedies',
      excerpt:
        'How to prepare and apply clay poultices for wound healing, inflammation, and drawing out toxins from the body.',
      image:
        'https://images.unsplash.com/photo-1707915317391-2d9e56a93541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcmVtZWRpZXMlMjBoZXJic3xlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '9 min read',
    },
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-900 to-green-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Medical Missionary Work</h1>
            <p className="text-xl text-green-100">
              Healing body, mind, and soul through God&apos;s natural remedies
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 mb-12">
              <h2 className="text-green-900 mb-6">Philosophy & Approach</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Medical missionary work is the right arm of the gospel. It
                  opens doors for the proclamation of present truth and
                  demonstrates God&apos;s love in practical ways. Through simple,
                  natural remedies, we can help people experience the healing
                  power that God has placed in nature.
                </p>
                <p>
                  The work of health reform is the Lord&apos;s means for lessening
                  suffering in our world... It is to prepare a people for the
                  coming of the Lord.
                  <span className="text-green-600 italic block mt-2">
                    — Ellen G. White, Testimonies, Vol. 7, p. 136
                  </span>
                </p>
                <p>
                  We teach and practice natural remedies based on the eight laws
                  of health (NEWSTART), using herbs, water treatments, proper
                  nutrition, and lifestyle changes that align with biblical
                  principles. These methods are safe, effective, and accessible
                  to all.
                </p>
              </div>
            </div>

            {/* Remedy Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {remedyCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-${category.color}-50 to-white p-6 rounded-xl border border-${category.color}-100 hover:shadow-lg transition-shadow cursor-pointer group`}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-${category.color}-900 mb-2`}>
                      {category.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Articles & Remedies */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-green-900 mb-4">
                Natural Remedies & Articles
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-4"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore our collection of articles on natural healing methods
                and practical health guidance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600">
                        Read Full Article →
                      </span>
                      <span className="text-slate-500">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Learn Medical Missionary Skills</h2>
            <p className="text-green-100 text-lg mb-8">
              Join our training programs to learn how to use natural remedies
              and become a medical missionary in your community.
            </p>
            <button className="bg-white text-green-900 px-8 py-3 rounded-xl hover:bg-green-50 transition-colors">
              Contact Us for Training
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
