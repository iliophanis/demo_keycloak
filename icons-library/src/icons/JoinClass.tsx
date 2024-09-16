import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgJoinClass = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 73 56"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.105 0h-54a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h28.15s2-2 6-4H4.105V4h54V2a2 2 0 0 0-2-2Zm.012 8c-4.73 0-7.626 3.224-7.938 8.634 1.596.494 2.972 1.286 4.11 2.362a8.997 8.997 0 0 1-.16-1.576c0-5.002 1.976-5.42 4-5.42s4 .418 4 5.42c0 3.32-1.98 6.58-4 6.58a2.1 2.1 0 0 1-.837-.196c.404 1.25.612 2.672.712 4.18.02 0 .038.004.056.008.018.004.036.008.056.008 4.943 0 8-5.406 8-10.414 0-6.002-2.99-9.586-8-9.586Zm-12 32c4.941 0 8-5.406 8-10.414 0-6.002-2.99-9.586-8-9.586-5.009 0-8 3.584-8 9.586 0 5.008 3.057 10.414 8 10.414Zm24.138-4c-3.532-2.906-7.29-4-12.13-4v.012l-.01-.012c-.038 0-.073.003-.109.007-.035.003-.07.007-.109.007-.22 1.396-.654 2.754-1.204 4.052A18.7 18.7 0 0 1 56.115 36l.01-.004V36c2.672 0 7.878.688 9.718 4H52.105c4 2 6 4 6 4h10.15c7.29 0 2.43-6 0-8Zm-20.127-6.58c0-5.002-1.976-5.42-4-5.42s-4 .418-4 5.42c0 3.32 1.98 6.58 4 6.58s4-3.26 4-6.58ZM56.255 56c7.29 0 2.43-6 0-8-3.53-2.906-7.29-4-12.13-4v.012l-.01-.012c-4.87 0-8.59 1.124-12.158 4-2.456 1.978-7.29 8 0 8h24.298Zm-12.13-4H53.845c-1.842-3.312-7.048-4-9.72-4v-.004l-.01.004c-2.8 0-7.83.75-9.72 4h9.73ZM12.033 21.37a1 1 0 0 1-1.856-.742l4-10c.304-.762 1.552-.762 1.856 0l4 10a.997.997 0 0 1-.928 1.37 1 1 0 0 1-.928-.628l-.958-2.394-.042.01a.266.266 0 0 1-.072.012h-4c-.024 0-.046-.006-.068-.011-.015-.004-.03-.008-.046-.01l-.958 2.393Zm3.072-7.678L16.43 17h-2.646l1.322-3.306Zm6 4.307c0 2.242 1.318 4 3 4 .506 0 .98-.16 1.394-.444.304.326.81.444 1.607.444a1 1 0 0 0 0-2v-5a1 1 0 0 0-1.758-.653A2.42 2.42 0 0 0 24.105 14c-1.682 0-3 1.758-3 4Zm3-2c-.398 0-1 .796-1 2s.602 2 1 2 1-.796 1-2-.602-2-1-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgJoinClass;
