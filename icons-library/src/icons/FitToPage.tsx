import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFitToPage = ({
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
      d="M7 18.301h10.135V5H7v13.301Zm11.135 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.135a1 1 0 0 1 1 1v15.301a1 1 0 0 1-1 1Zm-5.524-9.932v-.973c0-.042-.014-.079-.023-.119l.496.001a.501.501 0 0 0 .353-.853l-1.06-1.062a.5.5 0 0 0-.707 0l-1.062 1.062a.499.499 0 0 0 .355.853h.672c-.009.04-.024.076-.024.118v.973a.502.502 0 0 0 .5.5.5.5 0 0 0 .5-.5Zm.783.782h.972c.042 0 .08.015.119.024v-.496a.501.501 0 0 1 .853-.354l1.06 1.06a.5.5 0 0 1 0 .708l-1.06 1.06a.5.5 0 0 1-.853-.353v-.672c-.04.009-.077.023-.12.023h-.971a.499.499 0 0 1-.5-.5.5.5 0 0 1 .5-.5Zm-2.653 1H9.77c-.042 0-.08-.014-.119-.023v.496a.5.5 0 0 1-.853.353l-1.06-1.06a.5.5 0 0 1 0-.707l1.06-1.062a.5.5 0 0 1 .853.355v.672c.04-.01.077-.024.12-.024h.971a.499.499 0 0 1 .5.5.5.5 0 0 1-.5.5Zm.782.782v.972c0 .042.014.08.023.119h-.496a.5.5 0 0 0-.353.853l1.06 1.06a.5.5 0 0 0 .707 0l1.061-1.06a.497.497 0 0 0 0-.707.503.503 0 0 0-.354-.146H12.5c.01-.04.024-.077.024-.12v-.971a.502.502 0 0 0-1 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFitToPage;
