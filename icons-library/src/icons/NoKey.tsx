import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNoKey = ({
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
      d="M4 8a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h25.143L28 28.5l1.143-1.5H3V11h58v16h2.874A4.01 4.01 0 0 0 64 26V12a4 4 0 0 0-4-4H4Zm55 19c0 5.512-3.43 10.223-8.273 12.114v3.023a.5.5 0 0 1-.15.356l-1.14 1.119a.5.5 0 0 0-.019.695l4.272 4.652a.5.5 0 0 1 0 .676l-4.272 4.652a.5.5 0 0 0 .019.695l1.14 1.118a.5.5 0 0 1 .15.358v4.297a.5.5 0 0 1-.27.444l-3.14 1.63a.5.5 0 0 1-.589-.095l-4.445-4.574a1 1 0 0 1-.283-.696V39.373c-5.222-1.687-9-6.589-9-12.373 0-7.18 5.82-13 13-13s13 5.82 13 13Zm-7.058-3.325a5.465 5.465 0 0 0-4.817-4.641 5.54 5.54 0 0 0-4.292 1.36A5.48 5.48 0 0 0 41 24.48h2.619c0-.815.35-1.595.96-2.14a2.872 2.872 0 0 1 2.257-.711 2.85 2.85 0 0 1 2.514 2.418 2.871 2.871 0 0 1-1.638 3.038A4.339 4.339 0 0 0 45.19 31h2.62a1.72 1.72 0 0 1 1.006-1.549 5.463 5.463 0 0 0 3.126-5.776ZM48 33.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8 14a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNoKey;
