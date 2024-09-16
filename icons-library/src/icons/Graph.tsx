import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGraph = ({
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
      d="M16 5a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Zm-4 6a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V11Zm-3 2a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Zm-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm19-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-7-8a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0V7Zm4 5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGraph;
