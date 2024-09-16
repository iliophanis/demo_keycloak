import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRoundedPause = ({
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
    <circle cx={24} cy={24} r={23} stroke="currentColor" strokeWidth={2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.453 15.875h1.93c1.065 0 1.93.91 1.93 2.031v12.188c0 1.121-.865 2.031-1.93 2.031h-1.93c-1.065 0-1.93-.91-1.93-2.031V17.906c0-1.121.865-2.031 1.93-2.031Zm-8.836 0h1.93c1.065 0 1.93.91 1.93 2.031v12.188c0 1.121-.865 2.031-1.93 2.031h-1.93c-1.065 0-1.93-.91-1.93-2.031V17.906c0-1.121.865-2.031 1.93-2.031Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRoundedPause;
