import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgReflect = ({
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
      d="M19.1 19.087a.979.979 0 0 0-.339.24c-.042.046-.06.102-.092.154A6.474 6.474 0 0 1 14.5 21 6.508 6.508 0 0 1 8 14.5C8 10.916 10.916 8 14.5 8s6.5 2.916 6.5 6.5a6.478 6.478 0 0 1-1.9 4.587m6.573 5.173-4.696-4.269A8.457 8.457 0 0 0 23 14.5C23 9.813 19.187 6 14.5 6 9.813 6 6 9.813 6 14.5c0 4.687 3.813 8.5 8.5 8.5a8.446 8.446 0 0 0 5.005-1.645l4.823 4.384a.997.997 0 0 0 1.412-.067.998.998 0 0 0-.067-1.412M17.13 13.279c0-2.053-.986-3.279-2.637-3.279-1.65 0-2.636 1.226-2.636 3.279 0 1.713 1.008 3.562 2.636 3.562 1.629 0 2.637-1.849 2.637-3.562Zm-3.955-.057c0-1.71.651-1.854 1.318-1.854.668 0 1.319.144 1.319 1.854 0 1.136-.653 2.25-1.319 2.25-.665 0-1.318-1.114-1.318-2.25Zm1.32 4.987c1.065 0 1.983.657 2.4 1.601.152.346 1.278-.042 1.082-.54-.59-1.507-1.58-2.429-3.481-2.429-1.892 0-2.886.88-3.471 2.355-.204.515.906 1.026 1.035.703.396-.991 1.339-1.69 2.436-1.69Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReflect;
