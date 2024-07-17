import React from 'react';


function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a href="#" className="flex items-center justify-center mb-5 text-5xl font-semibold text-gray-900 dark:text-white">
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-Orange-600 Intern">I</span>ntern 
              <span className="text-green-500">I</span>ndia
            </span> 
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2023-24 Intern India™. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;