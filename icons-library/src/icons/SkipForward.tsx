import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSkipForward = ({
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
      d="M20.427 9.86V7.573a.574.574 0 0 1 .956-.426l3.434 3.434c.12.11.189.263.189.425-.001.162-.07.317-.19.425l-3.436 3.43a.567.567 0 0 1-.616.097.57.57 0 0 1-.34-.522V12.5H20c-5.523 0-9.5 3.977-9.5 9.5s3.977 9.5 9.5 9.5 9.5-3.977 9.5-9.5c0-2 2.5-2 2.5 0 0 6.627-5.373 12-12 12S8 28.627 8 22s5.373-12 12-12h.427v-.14Z"
      fill="currentColor"
    />
    <path
      d="M14.017 27v-1.536h1.92V20.1h.876l-2.592 1.512V19.86l2.256-1.32h1.332v6.924h1.8V27h-5.592Zm9.583.132c-.376 0-.748-.04-1.116-.12a5.762 5.762 0 0 1-1.032-.324 3.14 3.14 0 0 1-.804-.504l.588-1.392c.36.256.736.452 1.128.588.392.136.792.204 1.2.204.464 0 .824-.108 1.08-.324.264-.224.396-.528.396-.912s-.124-.692-.372-.924c-.248-.232-.588-.348-1.02-.348-.304 0-.588.056-.852.168a2.024 2.024 0 0 0-.696.516h-1.2v-5.22h5.4v1.524h-3.636v2.292h-.432c.2-.248.464-.44.792-.576a2.858 2.858 0 0 1 1.104-.204c.544 0 1.016.116 1.416.348.408.224.724.54.948.948.224.4.336.872.336 1.416 0 .56-.132 1.056-.396 1.488a2.61 2.61 0 0 1-1.116.996c-.48.24-1.052.36-1.716.36Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSkipForward;
