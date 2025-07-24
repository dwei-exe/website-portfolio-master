import Link from "next/link";

export default function NavLink({ href, title, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick(e);
  };

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#d0dce5] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={handleClick}
    >
      {title}
    </Link>
  );
}