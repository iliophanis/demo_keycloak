import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVideo = ({
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
      d="M12 19c-5.866 0-8.932-1.112-10-1.603V6.604C3.075 6.109 6.14 5 12 5c5.866 0 8.932 1.112 10 1.603v10.793C20.925 17.891 17.86 19 12 19ZM.445 18.832C.578 18.92 3.792 21 12 21s11.422-2.08 11.555-2.168A1 1 0 0 0 24 18V6c0-.334-.167-.646-.445-.832C23.422 5.08 20.208 3 12 3S.578 5.08.445 5.168A1.001 1.001 0 0 0 0 6v12a1 1 0 0 0 .445.832Zm9.5-10.748 5.728 3.333A.673.673 0 0 1 16 12a.673.673 0 0 1-.327.583l-5.728 3.333a.611.611 0 0 1-.631-.008.673.673 0 0 1-.314-.574V8.667c0-.236.119-.455.314-.575a.615.615 0 0 1 .63-.008Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVideo;
