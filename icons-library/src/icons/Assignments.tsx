import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAssignments = ({
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
      d="M25.333 2.667h-6.666v2.666H24v21.334L8 26.66V5.333h5.375V2.667H6.667c-.736 0-1.334.596-1.334 1.333v23.995c0 .737.598 1.333 1.334 1.333l15.634.005h3.366a1 1 0 0 0 1-1V4c0-.737-.598-1.333-1.334-1.333Zm-5.333 8-4 4-4-4h3.333V3.333a.667.667 0 0 1 1.334 0v7.334H20Zm-8.667 6.666h9.334a.667.667 0 0 1 0 1.334h-9.334a.667.667 0 0 1 0-1.334Zm0 2.667h9.334a.667.667 0 0 1 0 1.333h-9.334a.667.667 0 0 1 0-1.333Zm9.334 2.667h-9.334a.667.667 0 0 0 0 1.333h9.334a.667.667 0 0 0 0-1.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAssignments;
