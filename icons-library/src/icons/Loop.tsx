import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLoop = ({
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
      d="M15.86 3.62v2.47l.001 2.472v2.472a.617.617 0 0 1-.368.564.611.611 0 0 1-.665-.105l-3.71-3.704a.624.624 0 0 1-.206-.46c0-.174.076-.34.204-.458l3.712-3.712a.62.62 0 0 1 1.033.46ZM8.024 8.5c.608 0 1.102-.56 1.102-1.25S8.631 6 8.023 6c-.61 0-1.103.56-1.103 1.25S7.414 8.5 8.023 8.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLoop;
