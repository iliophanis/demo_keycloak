import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTranscriptOff = ({
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
      d="M3.111 0A1.1 1.1 0 0 0 2 1.09v21.82A1.1 1.1 0 0 0 3.111 24H20.89A1.1 1.1 0 0 0 22 22.91V1.09A1.1 1.1 0 0 0 20.889 0H3.11ZM4.5 21.5h15v-19h-15v19ZM18 4H6v2h12V4ZM6 7h12v2H6V7Zm0 8v2h12v-2H6Zm0-5h6v2H6v-2Zm6 8H6v2h6v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTranscriptOff;
