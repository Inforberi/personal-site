interface MotionProps {
  className: string;
}

const Motion = ({ className }: MotionProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 74 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_30284_3672)">
        <path d="M27.6525 0L13.1864 24.9786H0.0078125L11.3025 5.475C13.0542 2.45 17.4239 0 21.0632 0H27.6525ZM59.9703 6.24464C59.9703 2.79643 62.9203 0 66.5596 0C70.1989 0 73.1489 2.79643 73.1489 6.24464C73.1489 9.69286 70.1989 12.4893 66.5596 12.4893C62.9203 12.4893 59.9703 9.69286 59.9703 6.24464ZM30.1239 0H43.3025L28.8364 24.9786H15.6578L30.1239 0ZM45.6882 0H58.8667L47.5721 19.5036C45.8203 22.5268 41.4507 24.9786 37.8114 24.9786H31.2221L45.6882 0Z" />
      </g>
      <defs>
        <clipPath id="clip0_30284_3672">
          <rect width="73.2143" height="25" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Motion;
