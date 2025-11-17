// components/About.jsx
"use client";
import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Dữ liệu mẫu (có thể thay đổi)
  const aboutTextShort = `
    Tôi là sinh viên năm 4 chuyên ngành Công nghệ Vật lý Điện tử và Tin học.
    Với niềm đam mê công nghệ, tôi luôn tìm tòi và học hỏi những kiến thức mới
    trong lĩnh vực lập trình và phát triển phần mềm.
  `;
  const aboutTextLong = `
    Tôi là sinh viên năm 4 chuyên ngành Công nghệ Vật lý Điện tử và Tin học.
    Với niềm đam mê công nghệ, tôi luôn tìm tòi và học hỏi những kiến thức mới
    trong lĩnh vực lập trình và phát triển phần mềm.

    Hiện tại, tôi đang tập trung phát triển kỹ năng lập trình web và ứng dụng
    di động, đồng thời nghiên cứu về các công nghệ IoT và AI.
  `;

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Tiêu đề phần (Giống thiết kế) */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 relative pb-4">
          Giới Thiệu
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-600 rounded-full"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Cột trái: Về Tôi & Kỹ năng chung */}
          <div className="md:w-3/5">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Về Tôi</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {isExpanded ? aboutTextLong : aboutTextShort}
            </p>
            {/* Nếu bạn muốn nút "Đọc thêm" */}
            {/*
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 hover:underline font-medium mt-2"
            >
              {isExpanded ? 'Thu gọn' : 'Đọc thêm →'}
            </button>
            */}

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Kỹ năng tổng quan</h4>
              <div className="flex flex-wrap gap-3">
                <span className="skill-badge-purple">JavaScript</span>
                <span className="skill-badge-purple">React</span>
                <span className="skill-badge-purple">Python</span>
                <span className="skill-badge-purple">IoT</span>
                {/* Thêm các kỹ năng khác */}
              </div>
            </div>
          </div>

          {/* Cột phải: Thông tin cá nhân */}
          <div className="md:w-2/5 space-y-8">
            {/* Vị trí */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-purple-600 text-2xl mr-3">📍</span>
                <h4 className="text-xl font-semibold text-gray-800">Vị trí</h4>
              </div>
              <p className="text-gray-700 ml-9">Hồ Chí Minh, Việt Nam</p>
            </div>

            {/* Học vấn */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-purple-600 text-2xl mr-3">🎓</span>
                <h4 className="text-xl font-semibold text-gray-800">Học vấn</h4>
              </div>
              <p className="text-gray-700 ml-9">Công nghệ Vật lý Điện tử và Tin học</p>
            </div>
            
            {/* Mục tiêu */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-purple-600 text-2xl mr-3">🎯</span>
                <h4 className="text-xl font-semibold text-gray-800">Mục tiêu</h4>
              </div>
              <p className="text-gray-700 ml-9">Trở thành Full-stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;