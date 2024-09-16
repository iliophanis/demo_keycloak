import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChecklist = ({
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
      d="M24 26.667 8 26.66V5.333h16v21.334Zm1.333-24H6.667c-.736 0-1.334.597-1.334 1.333v23.995c0 .737.598 1.333 1.334 1.333L24 29.333c.353 0 2.027-.14 2.276-.39.25-.25.39-.588.39-.943V4c0-.736-.597-1.333-1.333-1.333Zm-14 16h9.334a.667.667 0 0 0 0-1.334h-9.334a.667.667 0 0 0 0 1.334Zm0 2.666h9.334a.667.667 0 0 0 0-1.333h-9.334a.667.667 0 0 0 0 1.333Zm0 2.667h9.334a.667.667 0 0 0 0-1.333h-9.334a.667.667 0 0 0 0 1.333Zm3.529-9.529a.664.664 0 0 0 .943 0l5.333-5.333a.667.667 0 0 0-.943-.943l-4.861 4.862-2.196-2.195a.667.667 0 0 0-.943.943l2.667 2.666Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChecklist;
