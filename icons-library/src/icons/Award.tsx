import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAward = ({
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
      d="M19 10h-1V6h1c1.103 0 2 .897 2 2s-.897 2-2 2Zm-7 4c-2.206 0-4-1.794-4-4V7h8v3c0 2.206-1.794 4-4 4Zm-7-4c-1.103 0-2-.897-2-2s.897-2 2-2h1v4H5Zm3-4h8V4H8v2Zm7.131 14H8.869l.666-1h4.93l.666 1ZM19 4h-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H5C2.794 4 1 5.794 1 8s1.794 4 4 4h1.35A6.01 6.01 0 0 0 11 15.91V17H9c-.334 0-.646.167-.832.445l-2 3A1 1 0 0 0 7 22h10a1 1 0 0 0 .832-1.555l-2-3A1.001 1.001 0 0 0 15 17h-2v-1.09A6.01 6.01 0 0 0 17.65 12H19c2.206 0 4-1.794 4-4s-1.794-4-4-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAward;
