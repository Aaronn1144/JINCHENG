
import React from 'react';
import { Mail, Phone, MapPin, Plane } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-gray-400 pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center text-white mb-4">
              <Plane className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-xl font-bold uppercase tracking-wider">金成航空</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              致力于为全球客户提供卓越的无人机系统与行业应用解决方案。
              创新、可靠、极致是我们永恒的追求。
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">WX</div>
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">WB</div>
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">IN</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">快速导航</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => document.getElementById('drones')?.scrollIntoView()} className="hover:text-blue-500 transition-colors">无人机产品</button></li>
              <li><button onClick={() => document.getElementById('airframes')?.scrollIntoView()} className="hover:text-blue-500 transition-colors">机架技术</button></li>
              <li><button onClick={() => document.getElementById('leasing')?.scrollIntoView()} className="hover:text-blue-500 transition-colors">租赁服务</button></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">关于我们</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">联系方式</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>中国 · 石家庄市<br/>光谷金成科技园</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>198 3313 7881</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>1052438570@qq.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} JinCheng Aviation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;