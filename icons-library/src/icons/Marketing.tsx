import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMarketing = ({
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
      d="M17 17h-1V6h1v11ZM14 5.22V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.22l-.844-.21A3.983 3.983 0 0 1 9.5 20c-2.206 0-4-1.795-4-4 0-.113.006-.226.017-.34l-2.4-.6-1.67.835a1.005 1.005 0 0 1-.973-.044A1.003 1.003 0 0 1 0 15V8c0-.347.18-.668.474-.851.295-.182.664-.198.973-.044l1.67.835L14 5.22Zm-7.051 8.736L4 13.22V9.781l10-2.5v8.438l-1.29-.322-.014-.004-5.723-1.43a1.078 1.078 0 0 0-.024-.007ZM9.5 18a2.002 2.002 0 0 1-1.994-1.843l3.66.916c-.354.56-.973.927-1.666.927Zm11-11a.5.5 0 0 1-.258-.929l2.5-1.5a.5.5 0 0 1 .515.858l-2.5 1.5A.504.504 0 0 1 20.5 7Zm0 5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Zm2.242 6.429a.498.498 0 0 0 .686-.172.5.5 0 0 0-.17-.686l-2.5-1.5a.5.5 0 0 0-.515.858l2.5 1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMarketing;
