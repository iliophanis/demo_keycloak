import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDownload = ({
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
      d="M16.293 9.293 13 12.586V3a1 1 0 1 0-2 0v9.586L7.707 9.293a1 1 0 0 0-1.414 1.414l5 5 .007.007a.996.996 0 0 0 .697.286h.006a.997.997 0 0 0 .702-.29l-1.413-.004-.292-3.12h2l-.292 3.12 5-4.999a1 1 0 0 0-1.415-1.414ZM21 15a1 1 0 0 0-1 1v3.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V16a1 1 0 1 0-2 0v3.5A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5V16a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDownload;
