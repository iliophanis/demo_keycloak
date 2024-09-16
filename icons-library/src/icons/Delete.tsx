import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDelete = ({
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
      d="M13.5 7h-3V6h3v1Zm2 0H19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h3.5V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2Zm.5 4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v7h8v-7Zm-5 5.5v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0Zm3-5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDelete;
