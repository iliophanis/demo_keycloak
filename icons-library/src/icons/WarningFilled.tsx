import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWarningFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 25"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.029 4.912 4.147 20.97l16-.117-8.118-15.941Zm-.927 10.007 2-.015-.029-4-2 .015.03 4Zm.022 3 2-.014-.014-2-2 .014.014 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWarningFilled;
