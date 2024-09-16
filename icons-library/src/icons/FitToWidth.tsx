import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFitToWidth = ({
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
      d="M7 18.301h10.135V5H7v13.301Zm11.135 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.135a1 1 0 0 1 1 1v15.301a1 1 0 0 1-1 1Zm-4.741-9.15h.972c.042 0 .08.015.119.024v-.497a.5.5 0 0 1 .853-.353l1.06 1.06a.502.502 0 0 1 0 .708l-1.06 1.06a.5.5 0 0 1-.853-.353v-.673c-.04.009-.077.024-.12.024h-.971a.499.499 0 0 1-.5-.5.5.5 0 0 1 .5-.5Zm-2.653 1H9.77c-.043 0-.08-.015-.119-.024v.497a.501.501 0 0 1-.853.353l-1.06-1.061a.5.5 0 0 1 0-.707l1.06-1.061a.5.5 0 0 1 .853.354v.673c.04-.01.076-.024.12-.024h.971a.499.499 0 0 1 .5.5.5.5 0 0 1-.5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFitToWidth;
