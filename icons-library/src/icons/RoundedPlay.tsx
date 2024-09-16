import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRoundedPlay = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx={24}
      cy={24}
      r={23}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="RoundedPlay_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={48}
      height={48}
    >
      <circle
        cx={24}
        cy={24}
        r={23}
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
      />
    </mask>
    <g mask="url(#RoundedPlay_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.696 15.25a1.466 1.466 0 0 0-1.467.018c-.45.267-.729.756-.729 1.282v14.896c0 .528.278 1.017.73 1.285a1.468 1.468 0 0 0 1.466.018L32.99 25.3c.47-.262.76-.76.76-1.301 0-.542-.29-1.04-.76-1.303L19.696 15.25Z"
        fill="#fff"
      />
      <mask
        id="RoundedPlay_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={17}
        y={15}
        width={17}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.696 15.25a1.466 1.466 0 0 0-1.467.018c-.45.267-.729.756-.729 1.282v14.896c0 .528.278 1.017.73 1.285a1.468 1.468 0 0 0 1.466.018L32.99 25.3c.47-.262.76-.76.76-1.301 0-.542-.29-1.04-.76-1.303L19.696 15.25Z"
          fill="#fff"
        />
      </mask>
    </g>
  </svg>
);

export default SvgRoundedPlay;
