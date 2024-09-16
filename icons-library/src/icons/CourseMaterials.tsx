import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCourseMaterials = ({
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
      d="M7.196 6.02A1 1 0 0 0 6 7v13.96a1 1 0 0 0 .804.98L16 23.78H5v-16H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1h-1v16H16l9.196-1.84a1 1 0 0 0 .804-.98V7a1 1 0 0 0-1.196-.98L16 7.78 7.196 6.02ZM15.5 10 8 8.28v12L15.5 22V10ZM14 11.78l-5-1v1l5 1v-1Zm4 0 5-1v1l-5 1v-1Zm5 1-5 1v1l5-1v-1Zm-9 1-5-1v1l5 1v-1Zm9 1-5 1v1l5-1v-1Zm-9 1-5-1v1l5 1v-1Zm9 1-5 1v1l5-1v-1Zm-9 1-5-1v1l5 1v-1Zm10-9.5L16.5 10v12l7.5-1.72v-12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCourseMaterials;
