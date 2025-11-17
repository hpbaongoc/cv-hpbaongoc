// components/Contact.jsx
"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logic gửi form thực tế (dùng fetch/Axios đến backend API) sẽ được đặt ở đây.
    console.log("Form data submitted:", formData);

    // Giả lập gửi form thành công
    setFormMessage({
      text: `Cảm ơn ${formData.name}! Tin nhắn của bạn đã được gửi thành công.`,
      type: 'success'
    });

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setFormMessage({ text: '', type: '' });
    }, 5000);
  };

  // SVG Icons cho phần thông tin
  const InfoIcon = {
    email: <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
    phone: <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"></path></svg>,
    location: <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Tiêu đề phần (Giống thiết kế) */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 relative pb-4">
          Liên Hệ
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-600 rounded-full"></span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-xl shadow-2xl p-8 lg:p-12">
          {/* Cột trái: Thông tin liên hệ */}
          <div className="lg:w-1/3 space-y-8 p-6 bg-purple-50 rounded-lg lg:rounded-l-xl lg:rounded-r-none">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Thông Tin</h3>
            
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">{InfoIcon.email}</div>
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <a href="mailto:your.email@example.com" className="text-purple-600 hover:underline">your.email@example.com</a>
              </div>
            </div>

            {/* Điện thoại */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">{InfoIcon.phone}</div>
              <div>
                <p className="font-semibold text-gray-700">Điện thoại</p>
                <span className="text-gray-600">(+84) 901 234 567</span>
              </div>
            </div>

            {/* Địa chỉ */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">{InfoIcon.location}</div>
              <div>
                <p className="font-semibold text-gray-700">Địa chỉ</p>
                <span className="text-gray-600">Thủ Đức, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Cột phải: Form liên hệ */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Gửi tin nhắn cho tôi</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Họ tên</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  // SỬA: Dùng style input bo tròn, có shadow nhẹ
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tin nhắn</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                ></textarea>
              </div>
              <button 
                type="submit" 
                // SỬA: Dùng nút Primary (màu tím) với kích thước đầy đủ
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
              >
                Gửi Tin Nhắn
              </button>
            </form>
            {/* Hiển thị thông báo */}
            {formMessage.text && (
              <div className={`mt-4 p-4 rounded-lg text-sm font-medium ${
                formMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {formMessage.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;