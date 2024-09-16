import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTips = ({
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
      d="M14.1 16c.229-1.172.824-2.071 1.409-2.942.767-1.141 1.49-2.22 1.49-4.058 0-2.756-2.242-5-5-5-2.756 0-5 2.244-5 5 0 1.839.725 2.917 1.492 4.058.586.87 1.18 1.77 1.408 2.942H14.1ZM5 9c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.449-1.015 3.96-1.831 5.174-.653.97-1.17 1.739-1.17 2.826a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1c0-1.087-.514-1.855-1.168-2.826l-.003-.004C6.014 12.957 5 11.446 5 9Zm5.5 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm4-2h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1Zm4-15a.502.502 0 0 0 .354-.146l1-1a.502.502 0 0 0-.708-.708l-1 1A.502.502 0 0 0 18.5 4ZM5.146 3.853a.498.498 0 0 0 .708 0 .5.5 0 0 0 0-.707l-1-1a.5.5 0 0 0-.708.707l1 1Zm13 12a.5.5 0 0 1 .707-.707l1 1a.5.5 0 0 1-.707.707l-1-1Zm-13-.707-1 1a.5.5 0 0 0 .708.707l1-1a.5.5 0 0 0-.708-.707ZM20.5 9h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-17 0h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTips;
