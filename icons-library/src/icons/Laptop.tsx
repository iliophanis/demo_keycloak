import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLaptop = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 16H4V6h16v10ZM3 18h19V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h1Zm11 2c.5 0 1-.5 1-1h9v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h9c0 .5.5 1 1 1h4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLaptop;
