import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgReading = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.5 7.75A1.75 1.75 0 0 0 25.75 6H20.5l-.839.01c-4.71.11-8.684 1.14-11.945 2.807-2.123 1.085-3.526 2.2-4.26 3.004a1.75 1.75 0 1 0 2.587 2.358l.138-.137c.063-.06.142-.13.238-.213l.338-.279a15.344 15.344 0 0 1 2.553-1.617C12.275 10.417 15.983 9.5 20.5 9.5h5.25l.204-.012A1.75 1.75 0 0 0 27.5 7.75Zm-7 5.25c8.75 0 14.472 4.514 17.5 10.5C34.972 29.486 29.25 34 20.5 34S6.028 29.486 3 23.5C6.028 17.514 11.75 13 20.5 13Zm0 3.5a6.99 6.99 0 0 0-7 7c0 3.873 3.127 7 7 7s7-3.127 7-7-3.127-7-7-7Zm3.976 3.567A5.236 5.236 0 0 0 20.5 18.25a5.243 5.243 0 0 0-5.25 5.25 5.243 5.243 0 0 0 5.25 5.25 5.243 5.243 0 0 0 5.25-5.25c0-.383-.04-.757-.118-1.115A1.745 1.745 0 0 1 24 23.5c-.97 0-1.75-.78-1.75-1.75a1.745 1.745 0 0 1 2.226-1.683ZM11.16 18.69l-.044.026C9.088 19.95 7.644 21.616 6.5 23.5c1.152 1.898 2.61 3.575 4.66 4.81A10.466 10.466 0 0 1 10 23.5c0-1.735.418-3.37 1.16-4.81Zm18.704.046-.025-.047c2.052 1.236 3.509 2.913 4.661 4.811-1.152 1.898-2.61 3.575-4.66 4.81A10.477 10.477 0 0 0 31 23.5c0-1.717-.41-3.335-1.136-4.764ZM21.375 23.5a.873.873 0 0 0-.875.875c0 .485.39.875.875.875s.875-.39.875-.875a.873.873 0 0 0-.875-.875Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReading;
