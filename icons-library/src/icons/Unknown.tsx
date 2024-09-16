import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUnknown = ({
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
      d="M5 5H3V3h2v2Zm0 4H3V7h2v2Zm0 4H3v-2h2v2Zm0 4H3v-2h2v2Zm-2 4h2v-2H3v2Zm0 4h2v-2H3v2ZM23 5h2V3h-2v2Zm-2 0h-2V3h2v2ZM11 5h2V3h-2v2ZM9.001 5H7V3h2.001v2ZM15 5h2.001V3H15v2Zm14 0h-2V3h2v2Zm-2 16h2v-2h-2v2Zm2 4h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V7h2v2Zm-2 4h2v-2h-2v2Zm-1.875 4h-2v-2h2v2Zm-18 0h2v-2h-2v2Zm8 0v-2h2v2.005h-2V17Zm-4 0h2v-2h-2v2Zm10 0h-2v-2h2v2Zm-6 8.125h2v-2h-2v2Zm2-16h-2v-2h2v2Zm-2 12h2v-2h-2v2Zm2-8h-2v-2h2v2ZM3 28.625h26v-2H3v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnknown;
