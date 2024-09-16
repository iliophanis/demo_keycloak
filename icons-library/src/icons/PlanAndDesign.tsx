import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlanAndDesign = ({
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
      d="M4 7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v4l-2-2V8H6v15H4V7Zm22 14v-5l2-2v8a1 1 0 0 1-1 1H14v-2h12ZM7 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V13Zm1 0h4v12H8v-1h1.5a.5.5 0 0 0 0-1H8v-2h1.5a.5.5 0 0 0 0-1H8v-2h1.5a.5.5 0 0 0 0-1H8v-2h1.5a.5.5 0 0 0 0-1H8v-1Zm14.073 4.22-2.293-2.293 2.897-2.897 2.293 2.293-2.897 2.897ZM19 18l.432-2.715 2.283 2.283L19 18Zm8.854-5.853-3-3a.5.5 0 0 0-.708 0l-5.5 5.5a.5.5 0 0 0-.12.195l-.5 3.5a.5.5 0 0 0 .632.632l3.5-.5a.505.505 0 0 0 .196-.12l5.5-5.5a.5.5 0 0 0 0-.707Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlanAndDesign;
