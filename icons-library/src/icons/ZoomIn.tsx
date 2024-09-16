import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgZoomIn = ({
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
      d="M10.5 17a6.474 6.474 0 0 0 4.169-1.519c.032-.052.431-.394.431-.394A6.478 6.478 0 0 0 17 10.5C17 6.916 14.084 4 10.5 4A6.508 6.508 0 0 0 4 10.5c0 3.584 2.916 6.5 6.5 6.5Zm8.5-6.5a8.457 8.457 0 0 1-2.023 5.491l4.696 4.269A.998.998 0 0 1 21 22a.991.991 0 0 1-.672-.261l-4.823-4.384A8.446 8.446 0 0 1 10.5 19C5.813 19 2 15.187 2 10.5 2 5.813 5.813 2 10.5 2c4.687 0 8.5 3.813 8.5 8.5ZM10.5 7a.75.75 0 0 1 .743.648l.007.102v2h2a.75.75 0 0 1 .102 1.493l-.102.007h-2v2a.75.75 0 0 1-1.493.102l-.007-.102v-2h-2a.75.75 0 0 1-.102-1.493l.102-.007h2v-2A.75.75 0 0 1 10.5 7Z"
      fill="currentColor"
    />
    <mask
      id="ZoomIn_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={21}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 17a6.474 6.474 0 0 0 4.169-1.519c.032-.052.431-.394.431-.394A6.478 6.478 0 0 0 17 10.5C17 6.916 14.084 4 10.5 4A6.508 6.508 0 0 0 4 10.5c0 3.584 2.916 6.5 6.5 6.5Zm8.5-6.5a8.457 8.457 0 0 1-2.023 5.491l4.696 4.269A.998.998 0 0 1 21 22a.991.991 0 0 1-.672-.261l-4.823-4.384A8.446 8.446 0 0 1 10.5 19C5.813 19 2 15.187 2 10.5 2 5.813 5.813 2 10.5 2c4.687 0 8.5 3.813 8.5 8.5ZM10.5 7a.75.75 0 0 1 .743.648l.007.102v2h2a.75.75 0 0 1 .102 1.493l-.102.007h-2v2a.75.75 0 0 1-1.493.102l-.007-.102v-2h-2a.75.75 0 0 1-.102-1.493l.102-.007h2v-2A.75.75 0 0 1 10.5 7Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgZoomIn;
