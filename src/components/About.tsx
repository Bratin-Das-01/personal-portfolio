import { Music, Brain, Sparkles } from 'lucide-react';

const About = () => {
  const hobbies = [
    { icon: Music, text: 'Music Enthusiast' },
    { icon: Brain, text: 'Psychology Explorer' },
    { icon: Sparkles, text: 'AI Experiments' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#3444F0] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-[#3444F0] to-purple-500 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#3444F0] to-purple-500 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">BD</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Profile Photo
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3444F0]/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-[#3444F0]">Brand Strategist & Designer</span> extending into UX/UI with <span className="font-semibold">4 years of experience</span>. As the founder of <span className="font-semibold text-[#3444F0]">AMEG</span>, a design studio based in Bengaluru, I create world-class design solutions for tech and consumer brands.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing <span className="font-semibold">B.Tech in Computer Science</span> at JAIN University, I blend technical knowledge with creative expertise to deliver impactful design experiences.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Beyond Design
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <hobby.icon className="w-6 h-6 text-[#3444F0]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {hobby.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
