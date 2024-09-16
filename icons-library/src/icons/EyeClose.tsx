import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEyeClose = ({
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
      d="M4.153 12C4.956 10.696 7.62 7 12 7c1.103 0 2.094.237 2.975.61l-.95.951A3.948 3.948 0 0 0 12 8.001a4 4 0 0 0-4 4c0 .741.209 1.43.56 2.024l-1.33 1.331C5.642 14.197 4.6 12.73 4.153 12ZM12 16a4 4 0 0 0 4-4c0-.014-.002-.027-.004-.04-.002-.012-.004-.024-.004-.036l-4.068 4.068c.012 0 .024.002.035.004.014.002.027.004.041.004Zm6.293-11.707a.999.999 0 1 1 1.414 1.414l-14 14a.999.999 0 1 1-1.413-1.414l1.496-1.496c-2.386-1.839-3.603-4.188-3.684-4.35a.998.998 0 0 1 0-.894C2.24 11.285 5.458 5 12 5a9.72 9.72 0 0 1 4.49 1.095l1.803-1.802Zm1.248 4.082c1.508 1.538 2.29 3.05 2.353 3.178a1 1 0 0 1 0 .895C21.76 12.715 18.542 19 12 19a9.663 9.663 0 0 1-2.693-.39l1.685-1.684c.326.044.66.074 1.008.074 4.38 0 7.043-3.695 7.847-5a12.806 12.806 0 0 0-1.729-2.202l1.423-1.423Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEyeClose;
