import { Calendar, Heart, BookOpen, Target } from 'lucide-react';

export function IntroductionPage() {
  const timeline = [
    {
      year: '2010',
      event: 'Ministry founded with a vision to spread present truth',
    },
    { year: '2012', event: 'Started video Bible study series in Swahili' },
    { year: '2015', event: 'Opened medical missionary training center' },
    { year: '2018', event: 'Launched Christian education school' },
    { year: '2024', event: 'Expanded online outreach and bookshop' },
  ];

  const news = [
    {
      id: 1,
      title: 'New Prophecy Series Released',
      date: '2024-11-15',
      content:
        'We are excited to announce a comprehensive new series on the prophecies of Daniel and Revelation, exploring end-time events in detail.',
    },
    {
      id: 2,
      title: 'Health Seminar Success',
      date: '2024-11-10',
      content:
        'Over 100 people attended our recent health seminar on natural remedies. Many testimonies of healing were shared.',
    },
    {
      id: 3,
      title: 'School Expansion Plans',
      date: '2024-11-05',
      content:
        'Due to growing demand, we are planning to expand our school facilities to accommodate more students in the coming year.',
    },
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">About Our Ministry</h1>
            <p className="text-xl text-blue-100">
              Dedicated to spreading the three angels&apos; messages through
              education, health, and biblical truth
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Name & Logo */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">SDA</span>
            </div>
            <h2 className="text-blue-900 mb-4">
              Warning of Last days Ministry
            </h2>
            <p className="text-slate-600 text-lg">
              A faithful remnant movement dedicated to present truth
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-blue-900">Our History</h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <p className="text-slate-700 leading-relaxed mb-6">
                Warning of Last days Ministry was established in 2010 with a
                divine calling to restore and proclaim present truth in these
                final days of Earth&apos;s history. Inspired by the counsel found in
                the Spirit of Prophecy and the example of the early Seventh-day
                Adventist pioneers, our ministry combines three essential
                elements: biblical education, health reform, and practical
                missionary work.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                We recognized that many souls were perishing for lack of
                knowledge of God&apos;s truth, especially regarding the state of the
                dead, true Sabbath observance, the sanctuary message, and the
                prophecies that reveal our place in history. At the same time,
                people were suffering from preventable diseases due to ignorance
                of God&apos;s natural laws of health.
              </p>
              <p className="text-slate-700 leading-relaxed">
                What began as small Bible study meetings has grown into a
                comprehensive ministry with video teachings, a Christian school,
                health seminars, and literature distribution. Yet our mission
                remains the same: to prepare a people ready to meet the Lord
                when He returns.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-white">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-md p-6 mt-4">
                    <p className="text-slate-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Aim */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-blue-900">Our Aim & Mission</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
                <h3 className="text-blue-900 mb-4">Mission Statement</h3>
                <p className="text-slate-700 leading-relaxed">
                  To proclaim the everlasting gospel and the three angels&apos;
                  messages, calling people out of Babylon and preparing them for
                  the second coming of Jesus Christ through biblical teaching,
                  health ministry, and Christian education.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
                <h3 className="text-blue-900 mb-4">Vision Statement</h3>
                <p className="text-slate-700 leading-relaxed">
                  To be a faithful remnant ministry that upholds all of God&apos;s
                  commandments and the testimony of Jesus, equipping believers
                  with present truth and practical skills for soul-winning work.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-xl p-8">
              <h3 className="text-white mb-6">Core Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Heart className="w-8 h-8 text-blue-300 mb-3" />
                  <h4 className="text-white mb-2">Love for Souls</h4>
                  <p className="text-blue-200 text-sm">
                    Passionate about winning souls for God&apos;s kingdom
                  </p>
                </div>
                <div>
                  <BookOpen className="w-8 h-8 text-blue-300 mb-3" />
                  <h4 className="text-white mb-2">Biblical Truth</h4>
                  <p className="text-blue-200 text-sm">
                    Unwavering commitment to Scripture and Spirit of Prophecy
                  </p>
                </div>
                <div>
                  <Target className="w-8 h-8 text-blue-300 mb-3" />
                  <h4 className="text-white mb-2">Practical Ministry</h4>
                  <p className="text-blue-200 text-sm">
                    Combining teaching with hands-on medical missionary work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Panel */}
      {/* <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-blue-900">Latest Updates</h2>
            </div>

            <div className="space-y-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-blue-900">{item.title}</h3>
                    <span className="text-slate-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
