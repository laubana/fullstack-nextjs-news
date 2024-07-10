import Link from "next/link";
import Navigation from "@components/Navigation/Navigation";

const navigations = [
  { children: "News", href: "/news" },
  { children: "Archive", href: "/archive" },
];

export default () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          {navigations.map((navigation, index) => (
            <Navigation href={navigation.href} key={index}>
              {navigation.children}
            </Navigation>
          ))}
        </ul>
      </nav>
    </header>
  );
};
