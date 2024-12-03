'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaPortrait, FaProjectDiagram, FaFileDownload } from 'react-icons/fa';

const backgroundImages = [
  'url("/background1.jpeg")',
  // 'url("/gradient2.jpg")',
  // 'url("/gradient3.jpg")',
];

export default function Profile() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat transition-all duration-1000`}
      style={{ backgroundImage: backgroundImages[bgIndex] }}
    >
      <div className="bg-transparent rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <div className="text-gray-600 mb-6 text-center text-white">
            Pre-final IT Student | Coding My Way to a Tech-Driven Future 🚀
          </div>
          <div className="grid grid-cols-1 gap-4 w-full">
            <a
              href="https://www.linkedin.com/in/profile-praveen/"
              target="_blank"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaLinkedin className="mr-2" />
              <span className="mx-auto">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Silversoul-07"
              target="_blank"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaGithub className="mr-2" />
              <span className="mx-auto">GitHub</span>
            </a>
            <a
              href="/portfolio"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaPortrait className="mr-2" />
              <span className="mx-auto">Portfolio</span>
            </a>
            <a
              href="/projects"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaProjectDiagram className="mr-2" />
              <span className="mx-auto">Projects</span>
            </a>
            <a
              href="/resume.pdf"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaFileDownload className="mr-2" />
              <span className="mx-auto">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}