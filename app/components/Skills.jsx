// components/Skills.jsx
"use client";
import React, { useEffect, useState, useRef } from 'react';

const skillsData = [
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 70 },
  { name: 'Python', level: 80 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'C++', level: 75 },
  { name: 'IoT', level: 65 },
];

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation khi section hiển thị trong viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Ngừng quan sát sau khi đã vào view
        }
      },
      { threshold: 0.3 } // Khi 30% section hiển thị
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Tiêu đề phần (Giống thiết kế) */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 relative pb-4">
          Kỹ Năng
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-600 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                <span className="text-lg font-medium text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: inView ? `${skill.level}%` : '0%' }} // Animation khi vào view
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;