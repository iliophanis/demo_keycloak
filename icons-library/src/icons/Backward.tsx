import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBackward = ({
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
    <g clipPath="url(#Backward_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7V5.64c0-.63-.41-.83-.92-.44l-2.7 2.09a.85.85 0 0 0 0 1.42l2.7 2.09c.51.39.92.19.92-.44V9a4 4 0 1 1-4 4 1 1 0 0 0-2 0 6 6 0 1 0 6-6Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="Backward_svg__a">
        <path fill="#fff" transform="translate(6 5)" d="M0 0h12v14H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBackward;
