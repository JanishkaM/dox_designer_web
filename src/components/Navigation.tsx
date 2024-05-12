import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";

const menuLinks = [
  { name: "Home", path: "/", type: "link" },
  { name: "Contact Us", path: "/contact", type: "link" },
  { name: "Other Services", path: "/other", type: "link" },
];

export default function Navigation() {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return !isDesktop ? (
    <nav className="bg-secondary">
      <div className="container items-center mx-auto px-2 py-4 flex justify-between">
        <div className="w-40 h-auto">
          <img src="/images/logo.png" alt="DoxDesigner Logo" />
        </div>
        <ul className="flex items-center">
          {menuLinks.map((menuLink, index) =>
            menuLink.type === "link" ? (
              <li key={index}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#2CAB5B" : "",
                  })}
                  className="font-semibold mr-4 hover:text-primary"
                  to={menuLink.path}
                >
                  {menuLink.name}
                </NavLink>
              </li>
            ) : (
              <Button key={index} className="mr-4">
                <NavLink to={menuLink.path}>{menuLink.name}</NavLink>
              </Button>
            )
          )}
        </ul>
      </div>
    </nav>
  ) : (
    <nav className="bg-secondary">
      <div className="container px-4 py-4 mx-auto flex justify-between">
        <div className="w-36">
          <Link to={menuLinks[0].path}>
            <img src="/images/logo.png" alt="DoxDesigner Logo" />
          </Link>
        </div>
        <Drawer>
          <DrawerTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </DrawerTrigger>
          <DrawerContent>
            <ul className="flex flex-col items-stretch">
              {menuLinks.map((menuLink, index) =>
                menuLink.type === "link" ? (
                  <li
                    key={index}
                    className="font-semibold hover:bg-primary hover:text-slate-100"
                  >
                    <NavLink
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? "#2CAB5B" : "",
                      })}
                      className="block w-full h-full p-4 "
                      to={menuLink.path}
                    >
                      {menuLink.name}
                    </NavLink>
                  </li>
                ) : (
                  <Button
                    key={index}
                    className="flex p-4 m-4 text-secondary rounded-sm"
                  >
                    <Link to={menuLink.path} className="block w-full">
                      {menuLink.name}
                    </Link>
                  </Button>
                )
              )}
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
