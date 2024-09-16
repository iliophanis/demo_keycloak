import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHome = ({
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
      d="M21 13a.999.999 0 0 1-.665-.252L20 12.45V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7.55l-.335.298a1.002 1.002 0 0 1-1.33-1.496l9-8c.38-.336.95-.336 1.33 0l9 8A1.001 1.001 0 0 1 20.998 13Zm-9-7.662 6 5.334V19h-4v-4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V19H6v-8.328l6-5.334Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHome;
