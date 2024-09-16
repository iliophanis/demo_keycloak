import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgClass1 = ({
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
      d="M4 7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H17l-1-1 1-1h9V8H6v12.5L4 22V7Zm6.004 6c1.878 0 3 1.254 3 3.355 0 1.753-1.147 3.645-3 3.645s-3-1.892-3-3.645c0-2.101 1.122-3.354 3-3.354Zm-1 3.355c0-1.25.494-1.354 1-1.354s1 .104 1 1.354c0 .83-.495 1.645-1 1.645s-1-.814-1-1.645Zm7.85 2.499-3.271 3.27A8.113 8.113 0 0 1 15.504 24c.81 1.09.618 2-.5 2h-5v-.004l-.002.004h-5c-1.118 0-1.31-.91-.5-2 1.497-2.015 3.438-3 5.5-3l.002.003V21c.927 0 1.827.211 2.676.613l3.467-3.467a.5.5 0 0 1 .707.708ZM11.002 24h-4c.589-.687 1.541-1 3-1l.002-.001V23c1.459 0 2.411.313 3 1h-2.002Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClass1;
