import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPortfolio = ({
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
      d="M2 14h14V4H2v10Zm15 2H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Zm6 6H6a1 1 0 0 1 0-2h16V8a1 1 0 0 1 2 0v13a1 1 0 0 1-1 1ZM4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0v11H4a1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPortfolio;
