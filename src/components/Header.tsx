import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Image_logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";

export const Logo = () => {
  return (
    <Image
      src={Image_logo}
      alt={siteConfig.title}
      width={50}
      height={50}
      priority
    />
  );
};

export const Header = () => {
  const pathName = usePathname();
  const getNavItems = () => {
    return siteConfig.navItems.map(({ href, label }) => (
      <NavbarItem key={href + label}>
        <Link
          color={"foreground"}
          href={href}
          className={`
                px-3 py-1
                hover:text-blue-300 hover:border
                hover:border-blue-300 hover:rounded-md
                ${pathName === href ? "text-blue-400  " : "text-foreground"}
                transition-colors
                transition-border
                duration-200
                `}
        >
          {label}
        </Link>
      </NavbarItem>
    ));
  };

  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"} className="flex gap-1 items-center">
          <Logo />
          <p className="font-bold text-inherit ">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Логин</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
