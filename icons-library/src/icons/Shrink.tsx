import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShrink = ({
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
      d="m15.53 18.53.97-.97 2.47 2.47.07.063a.75.75 0 0 0 .99-1.123l-2.47-2.47.97-.97a.75.75 0 0 0-.53-1.28h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.28.53Zm-7.06 0-.97-.97-2.47 2.47-.07.063a.75.75 0 0 1-.99-1.123l2.47-2.47-.97-.97A.75.75 0 0 1 6 14.25h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.28.53ZM4.96 3.907a.75.75 0 0 0-.99 1.123L6.44 7.5l-.97.97A.75.75 0 0 0 6 9.75h3A.75.75 0 0 0 9.75 9V6a.75.75 0 0 0-1.28-.53l-.97.97-2.47-2.47-.07-.063Zm15.07.063a.75.75 0 0 0-.99-.063l-.07.063-2.47 2.47-.97-.97a.75.75 0 0 0-1.28.53v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .53-1.28l-.97-.97 2.47-2.47a.75.75 0 0 0 0-1.06Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShrink;
