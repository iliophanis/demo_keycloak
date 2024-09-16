import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChat = ({
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
      d="M12 20a7.973 7.973 0 0 1-4.269-1.243.996.996 0 0 0-.852-.104l-2.298.766.766-2.298a1 1 0 0 0-.104-.852A7.973 7.973 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8m0-18C6.486 2 2 6.486 2 12c0 1.727.45 3.419 1.304 4.924l-1.253 3.76a1.001 1.001 0 0 0 1.265 1.265l3.76-1.253A9.967 9.967 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2m3.5 7h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm0 2h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm0 2h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm-3 2h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChat;
