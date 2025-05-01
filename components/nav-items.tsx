import { cn } from "lib/utils";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "Shyam",
    email: "mern.shyam@gamil.com",
    imageUrl: "/assets/images/david.webp",
  };

  const handleLogout = () => {
    console.log("logged out!");
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        {/* <h1>Tourvisto</h1> */}
        <h1>Traverse Co.</h1>
      </Link>
      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink key={id} to={href}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  role="button"
                  tabIndex={0}
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "John Doe"}
          />
          <article>
            <h2>{user?.name || "John Doe"}</h2>
            <p>{user?.email || "j@j.com"}</p>
          </article>
          <button onClick={handleLogout} className="cursor-pointer">
            <img
              src="/assets/icons/logout.svg"
              alt="Logout"
              className="cursor-pointer size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
