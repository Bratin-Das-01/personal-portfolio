const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            &copy; 2025 Bratin Das. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Designed & built with{' '}
            <span className="text-red-500 animate-pulse">❤️</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
