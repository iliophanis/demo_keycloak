import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMobile = ({
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
      d="M15.997 20H8V4h8l-.003 16ZM16 2H8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h8c1.102 0 2-.897 2-2V4c0-1.103-.898-2-2-2Zm-4 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM10.5 6h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMobile;
