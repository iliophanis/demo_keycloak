import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgProject = ({
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
      d="m12.874 13.54-1.293 3.879 3.879-1.293L21.586 10 19 7.414l-6.126 6.126ZM10 20a.997.997 0 0 1-.948-1.316l2-6a1.01 1.01 0 0 1 .241-.391l7-7a.999.999 0 0 1 1.414 0l4 4a.999.999 0 0 1 0 1.414l-7 7a.999.999 0 0 1-.391.242l-6 2A1.014 1.014 0 0 1 10 20Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 17a.502.502 0 0 1-.354-.146l-4-4a.502.502 0 0 1 .708-.708l4 4A.502.502 0 0 1 16.5 17M22 12a.997.997 0 0 1-.707-.293l-4-4a.999.999 0 1 1 1.414-1.414l4 4A.999.999 0 0 1 22 12"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5 12.5a.997.997 0 0 1-.707-.293l-4-4a.999.999 0 1 1 1.414-1.414l4 4A.999.999 0 0 1 21.5 12.5M7 24a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h6ZM6 8v2H4.5a.5.5 0 0 0 0 1H6v2H4.5a.5.5 0 0 0 0 1H6v2H4.5a.5.5 0 0 0 0 1H6v2H4.5a.5.5 0 0 0 0 1H6v2H2V2h4v2H4.5a.5.5 0 0 0 0 1H6v2H4.5a.5.5 0 0 0 0 1H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgProject;
