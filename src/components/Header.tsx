import { Link } from "react-router-dom";
import { Palette, Moon, Sun, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Palette className="h-6 w-6" />
          <span className="text-xl font-bold">Swatch</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/balub/swatch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
