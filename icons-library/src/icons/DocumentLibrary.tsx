import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDocumentLibrary = ({
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
      d="M19 14V6.02a.997.997 0 0 0-.293-.727l-3-3A.994.994 0 0 0 14.98 2H6a1 1 0 0 0-1 1v9H1a1.001 1.001 0 0 0-.895 1.447l4 8 .01.018a1.008 1.008 0 0 0 .126.186 1 1 0 0 0 .76.35h14c.333 0 .645-.168.831-.446l4-6c.204-.307.223-.7.05-1.027A1.003 1.003 0 0 0 23 14h-4Zm-1.003 2h3.134l-2.666 4H6.618l3-6h3.764l-.277.553A1.001 1.001 0 0 0 14 16h3.997ZM17 14V7h-2a1 1 0 0 1-1-1V4H7v10.764l1.105-2.21c.17-.34.516-.554.895-.554h6a1 1 0 0 1 .894 1.447l-.276.553H17ZM9.5 7h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Zm5 3h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDocumentLibrary;
