import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgData = ({
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
      d="M17 20v-9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V20h2a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h2v-7.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V20h3v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V20h3ZM18.586 4.91a.993.993 0 0 0 .806.01l3.309 2.48a.499.499 0 1 0 .599-.8l-3.307-2.48A1.002 1.002 0 0 0 19 3a1.002 1.002 0 0 0-.995 1.097l-5.59 3.993a.993.993 0 0 0-1.014.11L5.993 5.882A1.002 1.002 0 0 0 5 5a1.002 1.002 0 0 0-.993 1.12L.701 8.6a.5.5 0 0 0 .599.8l3.307-2.48a.993.993 0 0 0 .992-.12l5.408 2.318c.058.496.482.882.993.882a1.002 1.002 0 0 0 .995-1.096l5.591-3.994Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgData;
