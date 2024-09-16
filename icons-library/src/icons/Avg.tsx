import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAvg = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 42 26"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 .5A.5.5 0 0 1 .5 0h40.7a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H.5A.5.5 0 0 1 0 19V.5Zm20.85 19 5.212 6.5H15.637l5.213-6.5Zm-5.213-3.25v-13h-5.212v13h1.303v-4.875h2.606v4.875h1.303ZM14.334 4.875V9.75h-2.606V4.875h2.606ZM29.972 9.75h-1.303v1.625h1.303v3.25h-2.606v-9.75h2.606V6.5h1.303V3.25h-5.212v13h5.212v-6.5h-1.303Zm-7.819-6.5h1.303V8.129l-1.303 8.121h-2.606l-1.043-6.5h-.26v-6.5h1.303v4.875l1.042 6.5h.522l1.042-6.5V3.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAvg;
