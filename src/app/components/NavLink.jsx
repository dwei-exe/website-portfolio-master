import Link from "next/link";


export default function NavLink(props) {
  const { href, title } = props;
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#d0dce5] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
