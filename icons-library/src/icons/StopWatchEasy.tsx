import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStopWatchEasy = ({
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
      d="M12.015 18.468c-2.757 0-5-2.244-5-5 0-2.758 2.243-5 5-5s5 2.242 5 5c0 2.756-2.243 5-5 5Zm6.707-10.293a.999.999 0 1 0-1.414-1.414L16.2 7.869a6.961 6.961 0 0 0-4.185-1.401c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7c0-1.57-.526-3.017-1.401-4.185l1.108-1.108Zm-6.707 1.293v4h-4c0 2.194 1.806 4 4 4s4-1.806 4-4-1.806-4-4-4Zm-2-4h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStopWatchEasy;
