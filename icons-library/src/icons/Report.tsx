import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgReport = ({
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
      d="M19 21H6V3h13v18ZM5 23h15a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h1v1a1 1 0 0 0 1 1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.497 12.004H7.493a.5.5 0 0 1-.5-.5c0-1.186.48-2.346 1.32-3.185a4.535 4.535 0 0 1 3.184-1.32.5.5 0 0 1 .5.5v4.005a.5.5 0 0 1-.5.5Zm-3.467-1h2.967V8.037a3.535 3.535 0 0 0-1.977.989 3.536 3.536 0 0 0-.99 1.978ZM13.496 17a3.51 3.51 0 0 1-3.468-3.004h3.468a.5.5 0 0 0 .5-.5v-3.468A3.508 3.508 0 0 1 17 13.496 3.508 3.508 0 0 1 13.496 17Zm-4.504-3.504A4.51 4.51 0 0 0 13.496 18 4.51 4.51 0 0 0 18 13.496a4.51 4.51 0 0 0-4.504-4.504.5.5 0 0 0-.5.5v3.504H9.492a.5.5 0 0 0-.5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReport;
