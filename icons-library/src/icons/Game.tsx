import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGame = ({
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
    <path d="M16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32Z" fill="currentColor" />
    <path
      d="M16 1.68a14.32 14.32 0 1 1 .02 28.64A14.32 14.32 0 0 1 16 1.68Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.01 7.53v1.75h2.62a.86.86 0 0 1 .28 0l2.62.87a.88.88 0 0 1 .52.48l3.5 7.86a.89.89 0 0 1-.18 1l-2.57 2.64a.87.87 0 0 1-1 .16l-3.31-1.65h-6.64l-3.31 1.65a.86.86 0 0 1-1-.16l-2.62-2.62a.87.87 0 0 1-.18-1l3.49-7.86a.88.88 0 0 1 .52-.48l2.63-.87a.8.8 0 0 1 .27 0h2.62V7.53h1.74Zm2.48 3.49H12.8l-2.12.71-3.09 7 1.75 1.75 2.93-1.47a.89.89 0 0 1 .39-.09h7a.86.86 0 0 1 .39.09l2.94 1.47 1.75-1.75-3.1-7-2.15-.71Zm.14 5.25a.88.88 0 1 1-.87.87.87.87 0 0 1 .87-.87Zm-6.11-3.5v1.75h1.74v1.75h-1.74v1.75H11.8v-1.75h-1.78v-1.75h1.78v-1.75h1.72Zm7.86 1.75a.88.88 0 1 1 .02 1.76.88.88 0 0 1-.02-1.76Zm-3.49 0a.88.88 0 1 1-.88.87.87.87 0 0 1 .88-.87Zm1.74-1.75a.88.88 0 1 1-.87.88.87.87 0 0 1 .87-.88Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGame;
