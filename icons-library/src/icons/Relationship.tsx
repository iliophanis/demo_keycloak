import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRelationship = ({
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
      d="M5.997 2c.506 0 1 .104 1 1.355 0 .83-.495 1.645-1 1.645s-1-.815-1-1.645c0-1.251.494-1.355 1-1.355Zm0 5c1.853 0 3-1.892 3-3.645 0-2.101-1.122-3.355-3-3.355s-3 1.254-3 3.355c0 1.753 1.147 3.645 3 3.645Zm-3.001 4c.589-.688 1.541-1 3-1l.002-.001V10c1.459 0 2.411.312 3 1H2.996Zm3.002 1.996V13h5c1.118 0 1.31-.91.5-2-1.496-2.015-3.439-3-5.5-3v.003L5.996 8c-2.062 0-4.004.985-5.5 3-.81 1.09-.618 2 .5 2h5l.002-.004Zm13 1.359c0 .83-.495 1.645-1 1.645s-1-.815-1-1.645c0-1.25.494-1.355 1-1.355s1 .105 1 1.355Zm-4 0c0 1.753 1.147 3.645 3 3.645s3-1.892 3-3.645c0-2.101-1.122-3.355-3-3.355s-3 1.254-3 3.355ZM18.996 22h-4c.589-.688 1.541-1 3-1l.002-.001V21c1.459 0 2.411.312 3 1h-2.002Zm4.502 0c-1.496-2.015-3.439-3-5.5-3v.003L17.996 19c-2.062 0-4.004.985-5.5 3-.81 1.09-.618 2 .5 2h5l.002-.004V24h5c1.118 0 1.31-.91.5-2ZM14.997 4.5h.5c1.93 0 3.5 1.57 3.5 3.5v.5a.5.5 0 0 0 1 0V8c0-2.481-2.019-4.5-4.5-4.5h-.5V1l-3 3 3 3V4.5Zm-6.5 15h.5V17l3 3-3 3v-2.5h-.5a4.505 4.505 0 0 1-4.5-4.5v-.5a.5.5 0 0 1 1 0v.5c0 1.93 1.57 3.5 3.5 3.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRelationship;
