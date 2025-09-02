import indianFlag from "@/assets/indian-flag.png";

const Footer = () => {
  return (
    <footer className="bg-government text-government-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={indianFlag} alt="Indian Flag" className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">PM Internship Platform</h3>
                <p className="text-sm opacity-80">Ministry of Corporate Affairs</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Empowering India's youth through AI-driven internship opportunities under the visionary leadership of Hon'ble Prime Minister Narendra Modi.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Students</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Registration Guide</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Eligibility Criteria</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Application Process</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Companies</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Partnership Program</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Posting Guidelines</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Benefits & Incentives</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Government</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Policy Framework</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Implementation Guide</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Reports</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-government-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 Government of India | Ministry of Corporate Affairs | All rights reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;