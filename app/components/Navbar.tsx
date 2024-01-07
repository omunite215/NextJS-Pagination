import { BookOpenIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="sm:border-b border-none sm:border-primary mb-5 py-4 sm:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-none sm:shadow-primary">
      <nav className="container">
        <section className="flex justify-between items-center">
          <Link href="/">
            <BookOpenIcon />
          </Link>
          <div className="flex justify-end gap-2 items-center">
            <ModeToggle />
            <p>Pagination Demo</p>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
