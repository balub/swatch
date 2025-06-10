
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6" />
          <span className="text-xl font-bold">FilamentHub</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
