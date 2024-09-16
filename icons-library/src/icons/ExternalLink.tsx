import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExternalLink = ({
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
      d="M11 14a.999.999 0 0 1-.707-1.707L18.586 4H15a1 1 0 1 1 0-2h5.978A1 1 0 0 1 22 3.022V9a1 1 0 1 1-2 0V5.414l-8.293 8.293A.997.997 0 0 1 11 14Zm8 8H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4v14h14v-7a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExternalLink;
