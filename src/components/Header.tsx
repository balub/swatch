import { Link } from "react-router-dom";
import { Palette } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Palette className="h-6 w-6" />
          <span className="text-xl font-bold">Swatch</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
