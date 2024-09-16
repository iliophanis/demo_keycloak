import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSelectArea = ({
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
      d="M4.5 3H5a.5.5 0 0 1 0 1 .5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5Zm0 5.136a.5.5 0 0 0 .5-.5v-.91a.5.5 0 1 0-1 0v.91a.5.5 0 0 0 .5.5Zm7.71 1.654a3.41 3.41 0 0 0-3.406 3.406 3.41 3.41 0 0 0 3.406 3.405 3.41 3.41 0 0 0 3.406-3.405A3.41 3.41 0 0 0 12.21 9.79Zm4.534 6.34 2.755 2.753a1 1 0 1 1-1.414 1.415l-2.72-2.72A5.377 5.377 0 0 1 12.21 18.6a5.412 5.412 0 0 1-5.406-5.405A5.412 5.412 0 0 1 12.21 7.79a5.412 5.412 0 0 1 5.406 5.406 5.371 5.371 0 0 1-.872 2.933Zm-6.94-2.934c0-1.379 1.12-2.5 2.5-2.5a.5.5 0 0 1 0 1c-.827 0-1.5.673-1.5 1.5a.5.5 0 0 1-1 0ZM5 14a.5.5 0 0 0-1 0v.5a.5.5 0 0 0 .5.5H5a.5.5 0 0 0 0-1Zm0-2.728a.5.5 0 0 1-1 0v-.909a.5.5 0 1 1 1 0v.91ZM10.727 4h.818a.5.5 0 1 0 0-1h-.818a.5.5 0 0 0 0 1ZM8.272 4h-.818a.5.5 0 0 1 0-1h.818a.5.5 0 1 1 0 1ZM14 4a.5.5 0 0 0 1 0v-.5a.5.5 0 0 0-.5-.5H14a.5.5 0 0 0 0 1Zm0 2.394a.5.5 0 0 1 1 0v.5a.5.5 0 0 1-1 0v-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSelectArea;
