import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Users, Sparkles, BookOpen, Music } from 'lucide-react';

export function Ministries() {
  const ministries = [
    {
      title: 'Youth Ministry',
      description:
        'Empowering young people to grow in faith and make a difference in their world.',
      image:
        'https://images.unsplash.com/photo-1593896385987-16bcbf9451e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMG1pbmlzdHJ5fGVufDF8fHx8MTc2MjAyMDQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Sparkles,
    },
    {
      title: "Children's Ministry",
      description:
        "Creating a fun and safe environment where children can learn about God's love.",
      image:
        'https://images.unsplash.com/photo-1491439996916-067ed99cba60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjaHVyY2h8ZW58MXx8fHwxNzYyMDIwNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Users,
    },
    {
      title: 'Bible Study',
      description:
        'Small group studies that help deepen your understanding of Scripture.',
      image:
        'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYxOTg5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: BookOpen,
    },
    {
      title: 'Music Ministry',
      description:
        'Using the gift of music to worship God and bless our congregation.',
      image:
        'https://images.unsplash.com/photo-1579975096649-e773152b04cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwfGVufDF8fHx8MTc2MTk2NTc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Music,
    },
  ];

  return (
    <section id="ministries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Our Ministries</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get involved and find your place in our church family. We have
            ministries for all ages and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-900" size={20} />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{ministry.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
