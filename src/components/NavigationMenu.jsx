import React from "react";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./NavigationMenu.css";

const NavigationMenu2 = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Some <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/fire">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="/emblacarousel" title="EmblaCarousel">
                carousel exprience
              </ListItem>
              <ListItem href="/emblacarousel2" title="Carousel2">
                auto moving some tech snap shot
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Samples <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem>
                <Link className="NavigationMenuLink" to="tryshader">
                  Yellow Particle
                </Link>
                one experiment yellow color particles
              </ListItem>
              <ListItem>
                <Link className="NavigationMenuLink" to="/particles1">
                  Particles 1
                </Link>
                another particle renderin Primitives.
              </ListItem>
              <ListItem>
                <Link className="NavigationMenuLink" to="/terraz">
                  Terraz
                </Link>
                background and reflection react 3 fiber
              </ListItem>
              <ListItem>
                <Link className="NavigationMenuLink" to="/waterpool">
                  Waterpool
                </Link>
                babylon import glb pool
              </ListItem>
              <ListItem>
                <Link className="NavigationMenuLink" to="/waving">
                  Instanced Meshes
                </Link>
                instanced a lot of with glowing effect
              </ListItem>
              <ListItem>
                {/* <NavigationMenu.Link>Sectionpin</NavigationMenu.Link> */}
                <Link className="NavigationMenuLink" to="/mix">
                  Mix
                </Link>
                some effects along with particle and fire
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* <NavigationMenu.Link className="NavigationMenuLink" href="/horizontal"> */}
          <Link className="NavigationMenuLink" to="/horizontal">
            LINKS DOWN
          </Link>
          {/* </NavigationMenu.Link> */}
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenu2;
