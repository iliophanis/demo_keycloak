import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTeacherDevelopment = ({
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
      d="M1 3h22a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H13l-1-1 1-1h9V5H2v11.5L0 18V4a1 1 0 0 1 1-1Zm9.854 9.854 2.646-2.646 1.646 1.646a.5.5 0 0 0 .707 0l4-4a.5.5 0 0 0-.707-.708L15.5 10.793l-1.646-1.646a.5.5 0 0 0-.707 0l-3 3a.5.5 0 0 0 .707.707ZM6.004 11c-.506 0-1 .105-1 1.355 0 .83.495 1.645 1 1.645s1-.815 1-1.645c0-1.25-.494-1.355-1-1.355Zm0-2c1.878 0 3 1.254 3 3.355 0 1.753-1.147 3.645-3 3.645s-3-1.892-3-3.645c0-2.101 1.122-3.355 3-3.355Zm0 11h3c-.589-.688-1.541-1-3-1v-.001L6.002 19c-1.459 0-2.411.312-3 1h3.002Zm6.85-5.146-3.271 3.27A8.094 8.094 0 0 1 11.504 20c.81 1.09.618 2-.5 2h-5v-.004L6.002 22h-5c-1.118 0-1.31-.91-.5-2 1.497-2.015 3.438-3 5.5-3l.002.003V17a6.2 6.2 0 0 1 2.676.613l3.467-3.467a.5.5 0 0 1 .707.708Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTeacherDevelopment;
