{/*NAVIGATION LINKS OBJECT*/}
const navLinks = [
  
  {href: "#about", label:"About"},
  {href: "#experience", label:"Experience"},
  {href: "#projects", label:"Projects"},
  {href: "#testimonials", label:"Testimonials"},
  
];

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="#">
          BNA <span>.</span>
        </a>
        {/*DESKTOP NAVIGATION LINKS*/}
        <div>
          <div>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar