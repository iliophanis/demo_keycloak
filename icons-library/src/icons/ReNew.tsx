import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgReNew = ({
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
      d="M12 7V5.644c0-.634.412-.834.916-.445l2.707 2.093c.503.39.503 1.026 0 1.416L12.916 10.8c-.504.389-.916.189-.916-.445V9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4a1 1 0 0 1 2 0c0 3.309-2.691 6-6 6s-6-2.691-6-6c0-3.31 2.691-6 6-6"
      fill="currentColor"
    />
  </svg>
);

export default SvgReNew;
