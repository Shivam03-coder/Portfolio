import { Divider, Drawer, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

function Drawers({ selectedPage, setSelectedPage }) {
  const [IsDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div className="lg:hidden ">
      <Drawer
        anchor="left"
        open={IsDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        role="presentation"
      >
        <div
          id="DrawerBar"
          className="w-72 flex flex-col text-2xl 
         bg-black h-full text-[cyan]  space-y-9 text-center pt-11"
          style={{
            fontFamily: "Nova Flat",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Nova Flat",
            }}
            variant="h3"
            component={"div"}
            id="H3NavBAr"
          >
            PORTFOLIO
          </Typography>
          <Divider className="bg-[cyan]" />
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="linkclass"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          >
            HOME
          </Link>
          <Divider className="bg-[cyan]" />

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="linkclass"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          >
            SKILLS
          </Link>
          <Divider className="bg-[cyan]" />

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="linkclass"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          >
            PROJECTS
          </Link>
          <Divider className="bg-[cyan]" />

          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="linkclass"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          >
            CONTACTS
          </Link>
          <Divider className="bg-[cyan]" />
        </div>
      </Drawer>
      <MenuIcon
        fontSize="large"
        className="text-[cyan]"
        onClick={() => setIsDrawerOpen(true)}
      />
    </div>
  );
}

export default Drawers;
