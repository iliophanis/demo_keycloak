import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrePrimary = ({
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
      d="M21.5 8.5c1.378 0 2.5 1.12 2.5 2.5 0 1.379-1.122 2.5-2.5 2.5A2.503 2.503 0 0 1 19 11c0-1.38 1.122-2.5 2.5-2.5m0 7c2.481 0 4.5-2.02 4.5-4.5 0-2.481-2.019-4.5-4.5-4.5A4.506 4.506 0 0 0 17 11c0 2.48 2.02 4.5 4.5 4.5M12.284 11.407a1 1 0 0 0-.27.859l.14.863-.67-.37a1.006 1.006 0 0 0-.968 0l-.67.37.141-.863a1.002 1.002 0 0 0-.27-.859l-.642-.656.84-.129a.999.999 0 0 0 .754-.564L11 9.354l.33.704a1 1 0 0 0 .755.564l.84.129-.64.656Zm2.867-2.34-2.237-.342-1.009-2.15a.998.998 0 0 0-1.81 0l-1.01 2.15-2.236.342a1 1 0 0 0-.565 1.687l1.647 1.688-.39 2.397a.998.998 0 0 0 1.471 1.036L11 14.776l1.988 1.099a.995.995 0 0 0 1.06-.058.999.999 0 0 0 .411-.978l-.39-2.397 1.647-1.688a1.002 1.002 0 0 0-.565-1.687ZM9 24h4v-4H9v4Zm5-6H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM19.618 24l1.882-4 1.882 4h-3.764Zm2.776-6.49c-.338-.68-1.45-.68-1.789 0l-3.5 7.036c-.154.31-.138.68.044.976A.999.999 0 0 0 18 26h7a1.006 1.006 0 0 0 .894-1.454l-3.5-7.035Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrePrimary;
