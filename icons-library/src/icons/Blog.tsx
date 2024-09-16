import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBlog = ({
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
      d="M4 20h16V8H4v12ZM4 7h16V4H4v3Zm17-5H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 11h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1Zm0 2h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm0 1h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Zm-2 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1ZM17.047 13.246l-1.293-1.293.746-.746 1.293 1.293-.746.746ZM12.293 18H11v-1.293l4.047-4.047 1.293 1.293L12.293 18Zm4.56-7.854a.5.5 0 0 0-.706 0l-6 6A.5.5 0 0 0 10 16.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .354-.147l6-6a.5.5 0 0 0 0-.707l-2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBlog;
