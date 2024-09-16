import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPositionLeft = ({
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
      d="m17.46 14.448-3.273-2.084A.43.43 0 0 1 14 12a.43.43 0 0 1 .187-.364l3.273-2.083a.333.333 0 0 1 .176-.053c.064 0 .128.02.185.058a.43.43 0 0 1 .179.359v4.167a.43.43 0 0 1-.18.359.328.328 0 0 1-.36.005ZM8 5a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0V5Z"
      fill="currentColor"
    />
    <mask
      id="PositionLeft_svg__a"
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
        d="m17.46 14.448-3.273-2.084A.43.43 0 0 1 14 12a.43.43 0 0 1 .187-.364l3.273-2.083a.333.333 0 0 1 .176-.053c.064 0 .128.02.185.058a.43.43 0 0 1 .179.359v4.167a.43.43 0 0 1-.18.359.328.328 0 0 1-.36.005ZM8 5a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0V5Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgPositionLeft;
