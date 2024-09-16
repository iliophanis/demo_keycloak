import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInprogress = ({
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
      d="M11.92 4a1.94 1.94 0 1 0 0 3.88 1.94 1.94 0 0 0 0-3.88ZM7.353 6.222c-.892 0-1.617.725-1.617 1.616a1.618 1.618 0 0 0 3.232 0c0-.891-.724-1.616-1.615-1.616Zm9.13.97a.648.648 0 0 0 0 1.293.648.648 0 0 0 0-1.293ZM5.455 10.95a1.455 1.455 0 1 0 .001 2.91 1.455 1.455 0 0 0 0-2.91Zm12.93.646a.807.807 0 1 0-.002 1.614.807.807 0 0 0 .002-1.614Zm-11.03 4.08a1.292 1.292 0 1 0-.002 2.585 1.292 1.292 0 0 0 .002-2.584Zm9.13.324a.97.97 0 1 0 .001 1.94.97.97 0 0 0 0-1.94Zm-4.565 1.737a1.133 1.133 0 0 0 0 2.263c.624 0 1.131-.508 1.131-1.131 0-.624-.507-1.132-1.13-1.132Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInprogress;
