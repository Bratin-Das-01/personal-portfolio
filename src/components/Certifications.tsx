import { CheckCircle } from 'lucide-react';

const Certifications = () => {
  const MicrosoftLogo = () => (
    <svg className="w-12 h-12" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="9" height="9" fill="url(#microsoftBlue)"/>
      <rect x="13" y="1" width="9" height="9" fill="url(#microsoftGreen)"/>
      <rect x="1" y="13" width="9" height="9" fill="url(#microsoftRed)"/>
      <rect x="13" y="13" width="9" height="9" fill="url(#microsoftYellow)"/>
      <defs>
        <linearGradient id="microsoftBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0078D4"/>
          <stop offset="100%" stopColor="#0063B1"/>
        </linearGradient>
        <linearGradient id="microsoftGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#107C10"/>
          <stop offset="100%" stopColor="#005A9E"/>
        </linearGradient>
        <linearGradient id="microsoftRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D83B01"/>
          <stop offset="100%" stopColor="#A4373A"/>
        </linearGradient>
        <linearGradient id="microsoftYellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB900"/>
          <stop offset="100%" stopColor="#F7630C"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const LinkedInLogo = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="url(#linkedinGradient)"/>
      <path d="M5 8C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8Z" fill="white"/>
      <path d="M4 9H6V19H4V9Z" fill="white"/>
      <path d="M8 9H10V10.5C10.3 9.5 11.5 8.8 13.5 8.8C17 8.8 17.8 10.8 17.8 14V19H15.8V14.5C15.8 12.5 15.2 11.5 14 11.5C12.5 11.5 11.8 12.5 11.8 14.5V19H10V9H8Z" fill="white"/>
      <defs>
        <linearGradient id="linkedinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A66C2"/>
          <stop offset="100%" stopColor="#005E96"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const AtlassianLogo = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="url(#atlassianGradient)"/>
      <path d="M6 6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8C6.55228 8 7 7.55228 7 7C7 6.44772 6.55228 6 6 6Z" fill="white"/>
      <path d="M10 6C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V7C11 6.44772 10.5523 6 10 6Z" fill="white"/>
      <path d="M14 10C13.4477 10 13 10.4477 13 11V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V11C15 10.4477 14.5523 10 14 10Z" fill="white"/>
      <path d="M18 13C17.4477 13 17 13.4477 17 14V17C17 17.5523 17.4477 18 18 18C18.5523 18 19 17.5523 19 17V14C19 13.4477 18.5523 13 18 13Z" fill="white"/>
      <defs>
        <linearGradient id="atlassianGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#003399"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const certifications = [
    {
      title: 'Career Essentials in Project Management',
      issuer: 'Microsoft & LinkedIn',
      logo: MicrosoftLogo,
      borderColor: 'border-blue-500',
    },
    {
      title: 'Atlassian Agile Project Management',
      issuer: 'Atlassian',
      logo: AtlassianLogo,
      borderColor: 'border-blue-600',
    },
    {
      title: 'Advanced Business Development: Communication and Negotiation',
      issuer: 'LinkedIn Learning',
      logo: LinkedInLogo,
      borderColor: 'border-blue-500',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-[#3444F0] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${cert.borderColor}`}
            >
              <div className="flex justify-center mb-6">
                <cert.logo />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight text-center">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                {cert.issuer}
              </p>
              <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
