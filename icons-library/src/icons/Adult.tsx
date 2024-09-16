import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAdult = ({
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
      d="M5 6c-.551 0-1 .448-1 1v18c0 .551.449 1 1 1h22c.552 0 1-.449 1-1V7a1 1 0 0 0-1-1H5Zm1 18h20V8H6v16Zm2.5-14a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 2a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm4.5 5c0 .389.081.759.215 1.101-.022.016-.048.025-.069.045l-2 2A.5.5 0 0 0 11.5 21h.5v.5a.5.5 0 0 0 .309.462.501.501 0 0 0 .545-.108l2-2c.02-.021.029-.047.044-.07.343.136.712.216 1.102.216.389 0 .759-.08 1.101-.216.016.023.025.049.045.07l2 2A.5.5 0 0 0 19.5 22a.5.5 0 0 0 .5-.5V21h.5a.5.5 0 0 0 .354-.854l-2-2c-.021-.02-.047-.029-.07-.045A2.97 2.97 0 0 0 19 17c0-1.654-1.347-3-3-3-1.654 0-3 1.346-3 3Zm1 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAdult;
