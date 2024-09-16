import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrimary = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 17c1.672 0 2.606-.976 2.895-1.553a.983.983 0 0 0-.425-1.306c-.471-.259-1.073-.079-1.349.383-.029.048-.308.476-1.121.476-.408 0-1-.779-1-2s.592-2 1-2c.795 0 1.079.409 1.119.473a1.001 1.001 0 0 0 1.776-.92C25.606 9.976 24.672 9 23 9c-1.682 0-3 1.757-3 4 0 2.243 1.318 4 3 4M9 11c.408 0 1 .779 1 2s-.592 2-1 2c-.408 0-1-.779-1-2s.592-2 1-2m0 6a2.42 2.42 0 0 0 1.248-.359A.985.985 0 0 0 11 17a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1 .985.985 0 0 0-.752.359A2.42 2.42 0 0 0 9 9c-1.682 0-3 1.757-3 4 0 2.243 1.318 4 3 4M16 15c-.408 0-1-.779-1-2s.592-2 1-2c.408 0 1 .779 1 2s-.592 2-1 2m0-6c-.354 0-.687.093-1 .237V6a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1 .984.984 0 0 0 .751-.359c.379.226.799.359 1.249.359 1.682 0 3-1.757 3-4 0-2.243-1.318-4-3-4M11.5 25h-1v-5a1.002 1.002 0 0 0-1.707-.707l-2 2a.999.999 0 1 0 1.414 1.414l.293-.293V25h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2M18 25h-1.306c.493-.5.946-1.044 1.201-1.553.79-1.578.515-2.621.147-3.217-.483-.782-1.41-1.23-2.542-1.23-1.277 0-2.106.976-2.395 1.553a.993.993 0 0 0 .438 1.327c.486.251 1.086.06 1.345-.421.003-.004.258-.459.612-.459.411 0 .733.108.84.281.107.174.102.599-.235 1.272-.38.761-1.855 2.024-2.696 2.64A1 1 0 0 0 14 27h4a1 1 0 0 0 0-2M24.598 21.816l1.109-1.109A.998.998 0 0 0 25 19h-4a1 1 0 1 0 0 2h1.586l-.293.293a1 1 0 0 0 .259 1.6c.657.331 1.377.902 1.448 1.107 0 .448-.551 1-1 1-.391 0-1.005-.424-1.293-.707a.999.999 0 1 0-1.414 1.414C20.426 25.84 21.626 27 23 27c1.542 0 3-1.458 3-3 0-.904-.708-1.66-1.402-2.184"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrimary;
