import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgClass2 = ({
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
      d="M27 7H5a1 1 0 0 0-1 1v14l2-1.5V9h20v12h-9l-1 1 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM9.004 16.355c0-1.25.494-1.354 1-1.354s1 .104 1 1.354c0 .83-.495 1.645-1 1.645s-1-.814-1-1.645Zm1-3.354c1.878 0 3 1.253 3 3.354 0 1.753-1.147 3.645-3 3.645s-3-1.892-3-3.645c0-2.101 1.122-3.354 3-3.354Zm0 10.999h3c-.589-.687-1.541-1-3-1v-.001l-.002.001c-1.459 0-2.411.313-3 1h3.002Zm3.579-1.876 3.271-3.27a.5.5 0 0 0-.707-.708l-3.467 3.467A6.215 6.215 0 0 0 10.004 21v.003L10.002 21c-2.062 0-4.003.985-5.5 3-.81 1.09-.618 2 .5 2h5l.002-.004V26h5c1.118 0 1.31-.91.5-2a8.113 8.113 0 0 0-1.921-1.876Zm3.917-9.306.662 1.652h-1.323l.661-1.652Zm-1.536 3.838a.5.5 0 1 1-.928-.37l2-5c.152-.382.776-.382.928 0l2 5a.5.5 0 1 1-.928.37l-.479-1.196-.023.005a.134.134 0 0 1-.034.005h-2c-.011 0-.022-.002-.032-.005l-.025-.005-.479 1.196Zm5.16-.685H22v-.445c-.264-.067-.556-.088-.671.015a.636.636 0 0 0-.205.43ZM23 14.15c0-.48-.232-.862-.636-1.053-.502-.238-1.21-.131-1.681.256a.501.501 0 0 0-.07.705c.176.21.49.244.704.068.183-.15.482-.191.619-.125.029.012.064.03.064.149v.357c-.419-.068-.939-.058-1.329.279-.463.405-.667 1.098-.474 1.614.132.35.439.57.803.57h1.5a.5.5 0 0 0 .5-.5v-2.32Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClass2;
