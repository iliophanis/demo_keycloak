import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWithKey = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v14c0 .345-.044.68-.126 1H61V11H3v16h26.143L28 28.5l1.143 1.5H4a4 4 0 0 1-4-4V12Zm11 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm11-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10.423-4.77a3 3 0 1 0-3.363 4.62A12.957 12.957 0 0 0 33 27c0 5.784 3.778 10.686 9 12.373v18.09a1 1 0 0 0 .283.697l4.445 4.574a.5.5 0 0 0 .589.095l3.14-1.63a.5.5 0 0 0 .27-.444v-4.297a.5.5 0 0 0-.15-.358l-1.14-1.118a.5.5 0 0 1-.019-.695l4.272-4.652a.5.5 0 0 0 0-.676l-4.272-4.652a.5.5 0 0 1 .019-.695l1.14-1.119a.5.5 0 0 0 .15-.357v-3.022C55.57 37.223 59 32.512 59 27c0-7.18-5.82-13-13-13a12.95 12.95 0 0 0-8.577 3.23Zm13.95 5.639a1.047 1.047 0 0 0-1.56 0l-5.366 5.982-2.26-2.52a1.047 1.047 0 1 0-1.56 1.398l3.052 3.402a1.047 1.047 0 0 0 1.672-.15l.004-.005 6.018-6.708c.357-.398.357-1.001 0-1.399Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWithKey;
