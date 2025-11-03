import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'AMEG',
      role: 'Founder',
      period: 'Jan 2024 – Present',
      description:
        'Creating world-class design solutions for tech and consumer brands. Leading brand strategy, visual identity, and user experience design projects.',
      current: true,
    },
    {
      company: 'Notorius Gaming',
      role: 'Group CEO',
      period: 'Dec 2022 – Mar 2023',
      description:
        'Co-founded and launched BGMI gaming events. Led strategic planning, team management, and event execution.',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-[#3444F0] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3444F0] to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-5 top-2 w-7 h-7 rounded-full bg-[#3444F0] border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center">
                    <Briefcase className="w-3.5 h-3.5 text-white" />
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-[#3444F0] font-semibold mt-1">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
