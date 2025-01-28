import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">We are a food delivery service bringing you the best meals at your doorstep. Enjoy a variety of cuisines from your favorite restaurants.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Menu</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="text-sm text-gray-400">Email: support@swiggy.com</li>
            <li className="text-sm text-gray-400">Phone: +1 800 123 4567</li>
            <li className="text-sm text-gray-400">Address: 123 Street Name, City</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2025 Swiggy, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
