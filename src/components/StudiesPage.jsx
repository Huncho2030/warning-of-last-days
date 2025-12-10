import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Play, Clock, Search, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StudiesPage() {
  const [searchParams] = useSearchParams();
  const topicParam = searchParams.get('topic');
  const [selectedTopic, setSelectedTopic] = useState(topicParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const topics = [
    { id: 'all', name: 'All Topics', color: 'blue' },
    { id: 'state of the dead', name: 'State of the dead', color: 'blue' },
    { id: 'baptism', name: 'True Baptism', color: 'blue' },
    { id: 'faith', name: ' Faith', color: 'blue' },
    { id: 'prophecy', name: 'Prophecy', color: 'blue' },
  ];

  const prophecyCategories = [
    { id: 'daniel', name: ' Daniel', icon: '📖' },
    { id: 'revelation', name: 'Revelation', icon: '🔮' },
    { id: 'end-times', name: 'End Times', icon: '⏰' },
  ];

  const videos = [
    {
      id: 1,
      title: 'State of the Dead - Part 1',
      topic: 'state of the dead',
      category: 'doctrine',
      duration: '45:20',
      description:
        'Understanding what the Bible truly teaches about the state of the dead. Examining key scriptures.',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'State of the Dead - Part 2',
      topic: 'state of the dead',
      category: 'doctrine',
      duration: '42:15',
      description:
        'Continued study on death and resurrection, debunking common misconceptions.',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: "Daniel's Vision of the Four Kingdoms",
      topic: 'prophecy',
      category: 'daniel',
      duration: '52:30',
      description:
        "Exploring the prophecy of Nebuchadnezzar's dream and the kingdoms of this world.",
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Daniel 7 - The Four Beasts',
      topic: 'prophecy',
      category: 'daniel',
      duration: '48:45',
      description:
        'Understanding the four beasts and their significance in prophetic history.',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'True Baptism - Biblical Insights',
      topic: 'baptism',
      category: 'doctrine',
      duration: '38:20',
      description: 'Biblical teaching on the true mode and meaning of baptism.',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'True Faith',
      topic: 'faith',
      category: 'doctrine',
      duration: '41:15',
      description:
        'Exploring justification by faith and righteousness by faith.',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Revelation 13 - The Two Beasts',
      topic: 'prophecy',
      category: 'revelation',
      duration: '55:40',
      description:
        'Identifying the two beasts of Revelation 13 and their role in end times.',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      title: "Revelation 14 - The Three Angels' Messages",
      topic: 'prophecy',
      category: 'revelation',
      duration: '50:25',
      description:
        "The three angels' messages and their importance for our time.",
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesTopic =
      selectedTopic === 'all' || video.topic === selectedTopic;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Bible Studies</h1>
            <p className="text-xl text-blue-100">
              Explore deep biblical truths and prophecy through our
              comprehensive video lessons
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="text-slate-900">Filter by Topic</h3>
              </div>

              <div className="space-y-2 mb-8">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedTopic === topic.id
                        ? `bg-${topic.color}-600 text-white`
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {topic.name}
                  </button>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="text-slate-900 mb-4">Prophecy Categories</h4>
                <div className="space-y-2">
                  {prophecyCategories.map((cat) => (
                    <div
                      key={cat.id}
                      className="flex items-center gap-2 text-slate-600 text-sm"
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Video Gallery */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-slate-900">
                {selectedTopic === 'all'
                  ? 'All Studies'
                  : topics.find((t) => t.id === selectedTopic)?.name}
              </h2>
              <p className="text-slate-600">
                {filteredVideos.length} lessons found
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play
                          className="w-8 h-8 text-blue-600 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-600">
                  No lessons found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
