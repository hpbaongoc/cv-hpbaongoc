// components/Hero.jsx
"use client";
import React from 'react';

// Icon Avatar (thay thế cho avatar thật)
const AvatarIcon = () => (
  <svg className="w-24 h-24 text-white/70" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const Hero = () => {
  // Hàm cuộn mượt (giữ lại từ code của bạn)
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Nền gradient tím mới
    <section 
      id="home" 
      className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white min-h-screen flex flex-col justify-center items-center pt-24 pb-12"
    >
      <div className="container mx-auto px-6 text-center">
        
        {/* 1. Avatar */}
        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
          <AvatarIcon />
        </div>

        {/* 2. Tên */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Huỳnh Phan Bảo Ngọc
        </h1>

        {/* 3. Subtitle 1 (Thích nghiên cứu) */}
        <p className="text-xl md:text-2xl mb-8 text-white/80 font-light">
          Thích nghiên cứu
        </p>
        
        {/* 4. Subtitle 2 (Mô tả) */}
        <p className="text-lg mb-12 text-white/90 max-w-2xl mx-auto">
          Chào mừng đến với trang cá nhân của tôi! Tôi là một sinh viên đam mê công nghệ, 
          luôn tìm kiếm những giải pháp sáng tạo và hiệu quả.
        </p>

        {/* 5. Các nút bấm (sử dụng class CSS mới) */}
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => scrollToSection('#projects')}
            className="btn-hero-primary" // Class mới
          >
            Xem Dự Án
          </button>
          <button 
            onClick={() => scrollToSection('#contact')}
            className="btn-hero-secondary" // Class mới
          >
            Liên hệ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;