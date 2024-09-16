import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgReturn = ({
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
      d="M11.573 1.573v2.441A9 9 0 0 1 21 13.005a1 1 0 1 1-2 0 7 7 0 0 0-7-7c-.16 0-.301-.002-.425-.008v.152l.001 2.287a.57.57 0 0 1-.572.573.581.581 0 0 1-.384-.148l-3.436-3.43a.578.578 0 0 1-.19-.425c0-.162.07-.316.189-.425l3.434-3.434a.573.573 0 0 1 .956.426Zm4.848 20.866V19.997a9 9 0 0 1-9.427-8.991 1 1 0 1 1 2 0 7 7 0 0 0 7 7c.16 0 .302.003.425.008V15.576a.57.57 0 0 1 .572-.573c.138.001.276.051.383.147l3.437 3.43a.577.577 0 0 1 .001.85l-3.434 3.434a.573.573 0 0 1-.956-.426Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReturn;
