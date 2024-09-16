import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPositionRight = ({
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
      d="m6.54 9.552 3.273 2.084A.43.43 0 0 1 10 12a.43.43 0 0 1-.187.364L6.54 14.447a.333.333 0 0 1-.176.053.329.329 0 0 1-.185-.058.43.43 0 0 1-.179-.359V9.916a.43.43 0 0 1 .18-.359.328.328 0 0 1 .36-.005ZM16 19a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v14Z"
      fill="currentColor"
    />
    <mask
      id="PositionRight_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={4}
      width={12}
      height={16}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m6.54 9.552 3.273 2.084A.43.43 0 0 1 10 12a.43.43 0 0 1-.187.364L6.54 14.447a.333.333 0 0 1-.176.053.329.329 0 0 1-.185-.058.43.43 0 0 1-.179-.359V9.916a.43.43 0 0 1 .18-.359.328.328 0 0 1 .36-.005ZM16 19a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v14Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgPositionRight;
