import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShieldWhite = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0v13.715c0 5.12 2.777 6.246 5.002 7.544 1.373.8 4.872 2.674 4.998 2.741V0H2Z"
      fill="#fff"
    />
    <path
      opacity={0.703}
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 23.998.004.002s3.6-2.057 4.997-2.928C19.224 19.686 22 18.485 22 13.018V10H12v13.998Z"
      fill="#fff"
    />
    <path
      opacity={0.847}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10h10V0H12v10Z"
      fill="#fff"
    />
  </svg>
);

export default SvgShieldWhite;
