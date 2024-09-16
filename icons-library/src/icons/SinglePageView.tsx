import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSinglePageView = ({
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
      d="M16.348 17.047H8V6h8.348v11.047ZM7 4h10.348a1 1 0 0 1 1 1v13.047a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm2.46 5h5.429a.5.5 0 0 0 0-1H9.46a.5.5 0 0 0 0 1Zm0 2h5.429a.5.5 0 0 0 0-1H9.46a.5.5 0 0 0 0 1Zm5.429 2H9.46a.5.5 0 0 1 0-1h5.429a.5.5 0 0 1 0 1ZM9.46 15h3.5a.5.5 0 0 0 0-1h-3.5a.5.5 0 0 0 0 1Z"
      fill="currentColor"
    />
    <mask
      id="SinglePageView_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={4}
      width={13}
      height={16}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.348 17.047H8V6h8.348v11.047ZM7 4h10.348a1 1 0 0 1 1 1v13.047a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm2.46 5h5.429a.5.5 0 0 0 0-1H9.46a.5.5 0 0 0 0 1Zm0 2h5.429a.5.5 0 0 0 0-1H9.46a.5.5 0 0 0 0 1Zm5.429 2H9.46a.5.5 0 0 1 0-1h5.429a.5.5 0 0 1 0 1ZM9.46 15h3.5a.5.5 0 0 0 0-1h-3.5a.5.5 0 0 0 0 1Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgSinglePageView;
