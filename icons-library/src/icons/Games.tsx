import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGames = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8h2v2h3a1 1 0 0 1 .316.051l3 1a1 1 0 0 1 .598.543l4 9a1 1 0 0 1-.207 1.113l-3 3a1 1 0 0 1-1.154.187L19.763 23h-7.527l-3.789 1.894a1 1 0 0 1-1.154-.187l-3-3a1 1 0 0 1-.207-1.113l4-9a1 1 0 0 1 .598-.543l3-1A1 1 0 0 1 12 10h3V8ZM6.193 20.779l2.004 2.004 3.356-1.677A1 1 0 0 1 12 21h8a1 1 0 0 1 .447.106l3.355 1.677 2.005-2.005-3.542-7.969L19.838 12h-7.676l-2.427.81-3.542 7.969ZM20 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm1 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm1-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-3 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-6-3h-2v2H9v2h2v2h2v-2h2v-2h-2v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGames;
