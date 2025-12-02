import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: 'Community Outreach Day',
      date: 'November 15, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Church Campus',
      description:
        'Join us as we serve our community with food, clothing, and health services.',
    },
    {
      title: 'Youth Camp Registration',
      date: 'December 20-27, 2025',
      time: 'All Week',
      location: 'Mountain Retreat Center',
      description:
        'A week of fun, fellowship, and spiritual growth for ages 12-18.',
    },
    {
      title: 'Christmas Cantata',
      date: 'December 20, 2025',
      time: '6:00 PM',
      location: 'Main Sanctuary',
      description:
        'Celebrate the birth of Christ with beautiful music and worship.',
    },
    {
      title: 'New Year Prayer Service',
      date: 'December 31, 2025',
      time: '9:00 PM - 12:30 AM',
      location: 'Main Sanctuary',
      description:
        'End the year in prayer and welcome the new year with thanksgiving.',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these special gatherings and opportunities to connect
            with our church family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
