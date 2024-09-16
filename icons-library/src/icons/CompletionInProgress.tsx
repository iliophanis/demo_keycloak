import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCompletionInProgress = ({
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
    <mask
      id="CompletionInProgress_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={6}
      width={12}
      height={12}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="url(#CompletionInProgress_svg__a)"
      />
    </mask>
    <g mask="url(#CompletionInProgress_svg__b)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <radialGradient
        id="CompletionInProgress_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(6 0 0 6 12 12)"
      >
        <stop offset={0.75} stopColor="#006DFF" stopOpacity={0.01} />
        <stop offset={0.75} stopColor="currentColor" />
      </radialGradient>
    </defs>
  </svg>
);

export default SvgCompletionInProgress;
