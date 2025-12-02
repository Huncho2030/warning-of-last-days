import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Play, Download } from 'lucide-react';

export function Sermons() {
  const sermons = [
    {
      title: 'Walking by Faith',
      speaker: 'Pastor James Wilson',
      date: 'October 25, 2025',
      scripture: '2 Corinthians 5:7',
      duration: '42 min',
    },
    {
      title: 'The Power of Prayer',
      speaker: 'Sister Sarah Chen',
      date: 'October 18, 2025',
      scripture: 'Matthew 21:22',
      duration: '38 min',
    },
    {
      title: 'Living in Hope',
      speaker: 'Pastor James Wilson',
      date: 'October 11, 2025',
      scripture: 'Romans 15:13',
      duration: '45 min',
    },
  ];

  return (
    <section id="sermons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Recent Sermons</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Catch up on messages you may have missed or revisit your favorites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {sermons.map((sermon, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{sermon.title}</CardTitle>
                <CardDescription>
                  <div className="mt-2 space-y-1">
                    <div>{sermon.speaker}</div>
                    <div>{sermon.date}</div>
                    <div className="text-blue-900">{sermon.scripture}</div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-gray-600">{sermon.duration}</div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-900 hover:bg-blue-800">
                    <Play size={16} className="mr-2" />
                    Watch
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Sermons
          </Button>
        </div>
      </div>
    </section>
  );
}
