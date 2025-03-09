
const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-lg font-medium">Reed Innovate</p>
            <p className="text-gray-500 text-sm">Product Marketing Consulting</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Reed Innovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
