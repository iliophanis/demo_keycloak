import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgListening = ({
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
      d="M26.05 7.097A11.173 11.173 0 0 0 21.206 6C15.592 6 10 9.622 10 15.8c0 3.823 1.137 6.175 3.598 8.725l.534.537.338.333.484.477c.546.546.965.834 1.277 1.05.506.349.733.505.768 1.25l.005.228c0 3.093 2.51 5.6 5.604 5.6a5.602 5.602 0 0 0 5.603-5.6 1.4 1.4 0 0 0-2.792-.163l-.01.163a2.8 2.8 0 0 1-5.603 0c0-1.755-.48-2.205-1.532-3.19-.298-.279-.642-.6-1.034-1.007l-.305-.31c-.086-.087-.303-.3-.52-.513-.217-.214-.435-.428-.521-.515-2.198-2.196-3.092-3.924-3.092-7.065 0-4.164 4.202-7 8.405-7a8.37 8.37 0 0 1 3.63.822c.792.379 1.646.967 2.452 1.655a1.401 1.401 0 0 0 1.82-2.129c-.976-.833-2.024-1.554-3.06-2.05Zm.76 10.103c0-3.093-2.508-5.6-5.603-5.6a5.602 5.602 0 0 0-5.604 5.6 1.4 1.4 0 0 0 2.802 0c0-1.157.703-2.15 1.704-2.575.326 2.18-.24 2.978-.79 3.752-.418.587-.825 1.162-.825 2.318 0 1.507.692 2.374 1.376 3.232.669.838 1.33 1.666 1.33 3.073 0 .049.004.091.013.127A1.4 1.4 0 0 0 24.009 27l.01-.163c.055-.484.358-.892.78-1.098.228-.087.436-.139.61-.139a1.4 1.4 0 0 0 .164-2.79l-.163-.01c-1.548 0-2.802-.558-2.802-2.105 0-1.546 1.254-2.095 2.802-2.095l.163-.01a1.4 1.4 0 0 0 1.237-1.39Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgListening;
