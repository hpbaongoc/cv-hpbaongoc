import React from 'react'; 

const Projects = () => {
  const projects = [
    {
      title: 'Website Cá Nhân',
      description: 'Trang web cá nhân giới thiệu bản thân và các dự án đã thực hiện.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      gradient: 'from-blue-400 to-purple-500',
      // SỬA: Icon đã được áp dụng lớp icon-md (w-12 h-12) qua CSS
      icon: (
        <svg className="icon-md text-white" fill="currentColor" viewBox="0 0 24 24">
          {/* Star Icon */}
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: 'Ứng dụng Quản lý Học tập',
      description: 'Ứng dụng giúp quản lý thời gian học tập và theo dõi tiến độ.',
      technologies: ['Python', 'Tkinter', 'SQLite'],
      gradient: 'from-green-400 to-blue-500',
      icon: (
        <svg className="icon-md text-white" fill="currentColor" viewBox="0 0 24 24">
          {/* Clipboard Icon */}
          <path d="M15 3h2a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h2m4 0V1h-2v2m4 0v2H7v-2h4zM7 8h10M7 12h10M7 16h6"/>
        </svg>
      )
    },
    {
      title: 'Hệ thống IoT Giám sát',
      description: 'Hệ thống giám sát môi trường và thu thập dữ liệu qua cảm biến.',
      technologies: ['C++', 'Arduino', 'MQTT', 'Node-RED'],
      gradient: 'from-red-400 to-yellow-500',
      icon: (
        <svg className="icon-md text-white" fill="currentColor" viewBox="0 0 24 24">
          {/* Chip Icon */}
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-3-3h6v-6H9v6zm2-4h2v2h-2v-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      {/* SỬA: Dùng lớp section-container */}
      <div className="section-container">
        <div className="text-center mb-16">
          {/* SỬA: Dùng lớp section-heading */}
          <h2 className="section-heading">Dự Án</h2>
          {/* SỬA: Dùng lớp section-divider */}
          <div className="section-divider"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // SỬA: Thêm shadow-xl để nổi bật hơn, giữ lại card-hover
              className="bg-white rounded-2xl overflow-hidden card-hover shadow-xl" 
            >
              <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      // SỬA: Thẻ tag mượt mà hơn với bo tròn lớn hơn (rounded-full)
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Xem chi tiết →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;