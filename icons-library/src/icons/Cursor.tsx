import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCursor = ({
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
      d="M8 7.153V16.9l3.082-3.302a1 1 0 0 1 .731-.317h3.451L8 7.152ZM7 20.438a.995.995 0 0 1-1-1V5a1.002 1.002 0 0 1 1.645-.765l11 9.28A1 1 0 0 1 18 15.282h-5.753l-4.516 4.84c-.193.206-.46.317-.731.317Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCursor;
