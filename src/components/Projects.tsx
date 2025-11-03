import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AMEG Studio',
      description:
        'Complete brand identity and website design for a modern design studio. Focus on minimalism and bold typography.',
      category: 'Brand Design',
      link: 'https://ameg.super.site/',
    },
    {
      title: 'FLOW™ Podcast',
      description:
        'Visual identity and promotional materials for a psychology and creativity podcast series.',
      category: 'Visual Design',
      link: 'https://www.behance.net/bratindas',
    },
    {
      title: 'UX Research Project',
      description:
        'Comprehensive user research and interface design for a fintech mobile application.',
      category: 'UX/UI Design',
      link: 'https://www.behance.net/bratindas',
    },
    {
      title: 'Personal Experiments',
      description:
        'Collection of design experiments exploring AI-generated art, typography, and motion design.',
      category: 'Creative Exploration',
      link: 'https://www.behance.net/bratindas',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#3444F0] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work in brand strategy, visual design, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-[#3444F0]/10 text-[#3444F0] text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#3444F0] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3444F0] font-semibold hover:gap-3 transition-all duration-300 group/link"
              >
                View Case Study
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.behance.net/bratindas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3444F0] text-white rounded-lg hover:bg-[#2a38c8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Projects on Behance
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
