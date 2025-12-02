import { Link } from 'react-router-dom';
import { Play, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FeaturedVideos() {
  const videos = [
    {
      id: 1,
      title: 'The State of the Dead',
      topic: 'Biblical Truth',
      duration: '45:20',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Understanding what the Bible truly teaches about death and the resurrection.',
    },
    {
      id: 2,
      title: "Daniel's Prophecy",
      topic: 'Prophecy',
      duration: '52:15',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        "Exploring the prophetic timeline of world empires and God's eternal kingdom.",
    },
    {
      id: 3,
      title: 'True Baptism',
      topic: 'Doctrine',
      duration: '38:45',
      thumbnail:
        'https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwb3BlbnxlbnwxfHx8fDE3NjM1NTgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Discovering the biblical meaning and practice of baptism.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Featured Video Studies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Watch our latest Bible studies and prophecy teachings
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play
                      className="w-8 h-8 text-blue-600 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>
              <div className="px-2">
                <span className="text-xs text-blue-600 uppercase tracking-wider">
                  {video.topic}
                </span>
                <h3 className="text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/studies"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
