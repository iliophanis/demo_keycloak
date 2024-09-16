import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStarNotStarted = ({
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
      d="M19.951 9.768a1.002 1.002 0 0 0-.837-.688l-3.902-.453L12.87 4.47c-.355-.628-1.387-.628-1.74 0L8.785 8.627l-3.9.453a1.004 1.004 0 0 0-.56 1.735l3.226 2.954-.686 4.06c-.064.38.093.762.405.984a.994.994 0 0 0 1.06.063L12 16.864l3.668 2.012a1 1 0 0 0 1.466-1.046l-.686-4.061 3.227-2.954c.29-.264.397-.673.277-1.047Z"
      fill="#B4B4B4"
    />
    <mask
      id="StarNotStarted_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={4}
      width={16}
      height={15}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.951 9.768a1.002 1.002 0 0 0-.837-.688l-3.902-.453L12.87 4.47c-.355-.628-1.387-.628-1.74 0L8.785 8.627l-3.9.453a1.004 1.004 0 0 0-.56 1.735l3.226 2.954-.686 4.06c-.064.38.093.762.405.984a.994.994 0 0 0 1.06.063L12 16.864l3.668 2.012a1 1 0 0 0 1.466-1.046l-.686-4.061 3.227-2.954c.29-.264.397-.673.277-1.047Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgStarNotStarted;
