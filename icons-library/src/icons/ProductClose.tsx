import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgProductClose = ({
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
      d="M7 11H6v10h12V11H7ZM6 9V8c0-3.309 2.691-6 6-6s6 2.691 6 6v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h1Zm10 0V8c0-2.206-1.794-4-4-4S8 5.794 8 8v1h8Zm-6 7.732A2.001 2.001 0 0 1 11 13a2.001 2.001 0 0 1 1 3.732V18a1 1 0 0 1-2 0v-1.268Zm6 2.768a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0v7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgProductClose;
