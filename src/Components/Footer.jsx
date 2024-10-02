const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b pb-8">
            <div className="md:col-span-5">
              <h3 className="font-semibold text-lg mb-4">Inspiration for future getaways</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Canmore</a>
                  <p className="text-sm text-gray-500">Pet-friendly rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Benalmádena</a>
                  <p className="text-sm text-gray-500">Beach house rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Marbella</a>
                  <p className="text-sm text-gray-500">Flat rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Mijas</a>
                  <p className="text-sm text-gray-500">House rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Prescott</a>
                  <p className="text-sm text-gray-500">Cabin rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Tucson</a>
                  <p className="text-sm text-gray-500">Apartment rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Jasper</a>
                  <p className="text-sm text-gray-500">Cabin rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Mountain View</a>
                  <p className="text-sm text-gray-500">Cabin rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Devonport</a>
                  <p className="text-sm text-gray-500">Cottage rentals</p>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">Mallacoota</a>
                  <p className="text-sm text-gray-500">Pet-friendly rentals</p>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Help Centre</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">AirCover</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Anti-discrimination</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Disability support</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Cancellation options</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Report neighbourhood concern</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-semibold mb-4">Hosting</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Airbnb your home</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">AirCover for Hosts</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Hosting resources</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Community forum</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Hosting responsibly</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Join a free Hosting class</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-semibold mb-4">Airbnb</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Newsroom</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">New features</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Investors</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Airbnb.org emergency stays</a></li>
              </ul>
            </div>
          </div>
  
          <div className="text-sm text-gray-500 text-center mt-8">
            <p>&copy; 2024 Airbnb, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  