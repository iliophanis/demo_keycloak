import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShareAndPresent = ({
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
      d="M27 6H5a1 1 0 0 0-1 1v14l2-1.5V8h20v12h-9l-1 1 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-16.996 9c.506 0 1 .104 1 1.355 0 .83-.495 1.645-1 1.645s-1-.814-1-1.645c0-1.25.494-1.354 1-1.354Zm-3 1.355c0-2.101 1.122-3.354 3-3.354s3 1.253 3 3.354c0 1.753-1.147 3.645-3 3.645s-3-1.892-3-3.645Zm3 7.645h3c-.589-.687-1.541-1-3.002-1-1.459 0-2.411.313-3 1h3.002Zm2.676-2.387A6.215 6.215 0 0 0 10.004 21c-2.064 0-4.005.985-5.502 3-.81 1.09-.618 2 .5 2h10.002c1.118 0 1.31-.91.5-2a8.113 8.113 0 0 0-1.921-1.876l-.903-.511ZM23.45 11c.304 0 .55-.224.55-.5s-.246-.5-.55-.5h-9.9c-.304 0-.55.224-.55.5s.246.5.55.5h9.9Zm.15 3c.22 0 .4-.224.4-.5s-.18-.5-.4-.5h-7.2c-.22 0-.4.224-.4.5s.18.5.4.5h7.2Zm0 3c.22 0 .4-.224.4-.5s-.18-.5-.4-.5h-7.2c-.22 0-.4.224-.4.5s.18.5.4.5h7.2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShareAndPresent;
