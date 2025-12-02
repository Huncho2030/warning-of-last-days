import { Calendar, ArrowRight } from 'lucide-react';

export function NewsPanel() {
  const news = [
    {
      id: 1,
      title: 'New Prophecy Series: Understanding Daniel 2',
      date: '2024-11-15',
      excerpt:
        "Join us as we dive deep into the prophecies of Daniel, uncovering the timeline of world events leading to Christ's return.",
      category: 'Studies',
    },
    {
      id: 2,
      title: 'Health Seminar: Natural Remedies Workshop',
      date: '2024-11-10',
      excerpt:
        'Learn practical natural remedies for common ailments using herbs, hydrotherapy, and proper nutrition.',
      category: 'Health',
    },
    {
      id: 3,
      title: 'School Registration Now Open',
      date: '2024-11-05',
      excerpt:
        'Enroll your children in our Christ-centered education program. Limited spaces available for the new semester.',
      category: 'Education',
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Studies':
        return 'bg-blue-100 text-blue-700';
      case 'Health':
        return 'bg-green-100 text-green-700';
      case 'Education':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Latest News & Updates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(item.category)}`}
                  >
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <h3 className="text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-sm">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
