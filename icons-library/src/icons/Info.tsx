import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInfo = ({
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
      d="M12 19.949a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.999-4H11v-4h1.999v4Zm5.001-4a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-5.001-2H11v-2h1.999v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInfo;
