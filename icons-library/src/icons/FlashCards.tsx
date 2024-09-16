import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlashCards = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 26a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v17.995a1 1 0 0 0 1 1L23 26Zm-13-2.004L22 24V8H10v15.996ZM20 14a1 1 0 0 1-1 1l-6-.001a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3Zm0 3.5a.5.5 0 0 1-.5.5h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 .5.5Zm0 2a.5.5 0 0 1-.5.5h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 .5.5Zm-3 2a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5ZM3.999 23.997 7 24v-2l-2-.003V10h2V8H4a1 1 0 0 0-1 1v13.997a1 1 0 0 0 .999 1ZM29 22.999a1 1 0 0 1-1.001 1L25 23.996v-1.999L27 22V10h-2V8h3a1 1 0 0 1 1 1v13.999Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFlashCards;
