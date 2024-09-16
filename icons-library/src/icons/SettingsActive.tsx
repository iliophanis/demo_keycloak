import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSettingsActive = ({
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
      d="M10.5 23h3a1 1 0 0 0 .965-.736l.81-2.972a7.981 7.981 0 0 0 1.63-.982l3.267 1.134a1 1 0 0 0 1.223-.497l1.5-3a1 1 0 0 0-.3-1.251l-2.633-1.951a7.29 7.29 0 0 0 0-1.49l2.634-1.951a1 1 0 0 0 .299-1.251l-1.5-3a1.001 1.001 0 0 0-1.18-.512L16.75 5.567a7.937 7.937 0 0 0-1.474-.859l-.811-2.972A1 1 0 0 0 13.5 1h-3c-.45 0-.846.302-.965.736l-.81 2.972a7.954 7.954 0 0 0-1.63.982L3.828 4.556a1 1 0 0 0-1.222.497l-1.5 3a1 1 0 0 0 .303 1.253l2.63 1.933c-.025.259-.04.511-.04.761s.015.502.04.761l-2.63 1.933a1 1 0 0 0-.303 1.253l1.5 3a1 1 0 0 0 1.222.497l3.267-1.134c.502.391 1.047.72 1.63.982l.81 2.972c.119.434.515.736.965.736ZM12 10c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Zm0 6c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSettingsActive;
