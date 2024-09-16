import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCreateReport = ({
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
      d="M6.5 20.182h11.818V3.818H6.5v16.364ZM19.227 22H5.591a.91.91 0 0 1-.91-.91V2.91a.91.91 0 0 1 .91-.91h13.636a.91.91 0 0 1 .91.91v18.18a.91.91 0 0 1-.91.91Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.41 15.636c.564 0 1.022-.392 1.022-.876v-2.192h2.192c.484 0 .876-.458.876-1.022 0-.565-.392-1.023-.876-1.023h-2.192V8.33c0-.484-.458-.876-1.023-.876-.564 0-1.022.392-1.022.876v2.192H9.195c-.484 0-.877.458-.877 1.023 0 .564.393 1.022.877 1.022h2.192v2.192c0 .484.458.876 1.022.876Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCreateReport;
