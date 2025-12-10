import {
  BookOpen,
  Users,
  Heart,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SchoolPage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Biblical Foundation',
      description:
        'The Bible is the foundation of all subjects. Every lesson points students to Jesus Christ and prepares them for eternity.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description:
        'Individual attention ensures each child receives personalized instruction and mentoring in their academic and spiritual growth.',
      color: 'green',
    },
    {
      icon: Heart,
      title: 'Character Development',
      description:
        'Focus on developing Christian character through daily devotions, service projects, and modeling Christ-like behavior.',
      color: 'red',
    },
    {
      icon: Award,
      title: 'Excellence in Education',
      description:
        'High academic standards combined with practical skills training to develop the whole person - body, mind, and spirit.',
      color: 'amber',
    },
  ];

  const gallery = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1655800466797-8ab2598b4274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNTU4MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Our bright and welcoming classrooms',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1655800466797-8ab2598b4274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNTU4MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Students engaged in Bible study',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1655800466797-8ab2598b4274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNTU4MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Outdoor learning and nature study',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1655800466797-8ab2598b4274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNTU4MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Practical skills training',
    },
  ];

  const curriculum = [
    'Bible Studies (Daily)',
    'Language Arts (English & Swahili)',
    'Mathematics',
    'Science & Nature Study',
    'History & Geography',
    'Health & Physical Education',
    'Music & Arts',
    'Practical Life Skills',
    'Agriculture & Gardening',
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-900 to-orange-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">True Christian Education</h1>
            <p className="text-xl text-amber-100">
              Preparing students for service in this life and the life to come
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-amber-900 mb-6">
                Our Educational Philosophy
              </h2>
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100">
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    True education prepares students not just for success in
                    this world, but for eternal life. It develops the physical,
                    mental, and spiritual faculties harmoniously, enabling
                    students to become effective workers for God and society.
                  </p>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                    <p className="text-slate-700 italic">
                      True education means more than the pursual of a certain
                      course of study. It means more than a preparation for the
                      life that now is. It has to do with the whole being, and
                      with the whole period of existence possible to man. It is
                      the harmonious development of the physical, the mental,
                      and the spiritual powers.
                    </p>
                    <p className="text-amber-600 mt-3">— Education, p. 13</p>
                  </div>
                  <p>
                    Our school follows the counsel given in the Spirit of
                    Prophecy, providing a balanced education that combines
                    academic excellence with character development, practical
                    skills, and spiritual growth. We believe that the fear of
                    the Lord is the beginning of wisdom.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-${feature.color}-50 to-white p-8 rounded-xl border border-${feature.color}-100 hover:shadow-lg transition-shadow`}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-full flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-${feature.color}-900 mb-3`}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-amber-900 mb-8 text-center">Our Curriculum</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {curriculum.map((subject, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-slate-700">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-amber-900 mb-8 text-center">School Life</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Registration */}
      <section className="py-16 bg-gradient-to-br from-amber-900 to-orange-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Contact & Registration</h2>
              <p className="text-amber-100 text-lg">
                Enroll your child in a Christ-centered education that prepares
                them for eternity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-100 mb-1">Address</p>
                      <p className="text-white">
                        Gilgal Christian Schools
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-100 mb-1">Phone</p>
                      <p className="text-white">+254 705 982 280</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-100 mb-1">Email</p>
                      <p className="text-white">vincentmoriancho@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-100 mb-1">School Hours</p>
                      <p className="text-white">
                        Monday - Friday: 7:30 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-amber-900 mb-6">Registration Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-slate-700 mb-2">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="+255 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">
                      Child&apos;s Age/Grade
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="e.g., 8 years old / Grade 3"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="Any questions or additional information..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
