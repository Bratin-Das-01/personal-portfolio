import { Palette, Wrench, Code, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: 'Design',
      skills: ['Brand Strategy', 'Visual Design', 'UX Research', 'UI Design'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Figma', 'Illustrator', 'Photoshop'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'No-Code',
      skills: ['Wix', 'Framer', 'Notion'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Communication', 'Team Leadership'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[#3444F0] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-[#3444F0] rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
