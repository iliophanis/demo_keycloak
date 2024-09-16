import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCheck = ({
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
      d="M19.065 6.944a1.329 1.329 0 0 0-1.882 0L9.93 14.22l-3.113-3.123a1.329 1.329 0 0 0-1.882 1.876l4.07 4.082a1.329 1.329 0 0 0 2.034-.184l.002-.002 8.024-8.05a1.329 1.329 0 0 0 0-1.876Z"
      fill="currentColor"
    />
    <mask
      id="Check_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={6}
      width={16}
      height={12}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.065 6.944a1.329 1.329 0 0 0-1.882 0L9.93 14.22l-3.113-3.123a1.329 1.329 0 0 0-1.882 1.876l4.07 4.082a1.329 1.329 0 0 0 2.034-.184l.002-.002 8.024-8.05a1.329 1.329 0 0 0 0-1.876Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgCheck;
