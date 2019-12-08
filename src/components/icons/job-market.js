import React from "react";

const JobMarket = props => {
  return (
    <svg {...props}>
      <path
        fill="#00b68c"
        stroke="#fff"
        strokeWidth="2px"
        d="M60.954 19.033H49.011V15.59A8.306 8.306 0 0 0 40.72 7.3h-9.7a8.306 8.306 0 0 0-8.29 8.29v3.443H10.79a8.306 8.306 0 0 0-8.29 8.29V38a4.071 4.071 0 0 0 3.3 4c.211.07.422.07.632.141V59.01a8.306 8.306 0 0 0 8.29 8.29h42.3a8.306 8.306 0 0 0 8.29-8.29V42.148c.211-.07.422-.07.632-.141a4.071 4.071 0 0 0 3.3-4V27.323a8.306 8.306 0 0 0-8.29-8.29zM28.285 15.59a2.669 2.669 0 0 1 2.67-2.67h9.765a2.669 2.669 0 0 1 2.67 2.67v3.443H28.285zM8.05 27.323a2.669 2.669 0 0 1 2.67-2.67h50.164a2.669 2.669 0 0 1 2.67 2.67v9.415a157.629 157.629 0 0 1-19.04 1.967v-1.194a4.558 4.558 0 0 0-4.567-4.567h-8.22a4.558 4.558 0 0 0-4.567 4.567v1.194a145.741 145.741 0 0 1-19.11-1.967zm30.984 11.242v6.253h-6.253v-6.253h6.253zM59.69 59.01a2.669 2.669 0 0 1-2.67 2.67h-42.3a2.669 2.669 0 0 1-2.67-2.67V43.061c4.637.632 9.836 1.054 15.176 1.265v1.546a4.558 4.558 0 0 0 4.574 4.566h8.29a4.558 4.558 0 0 0 4.567-4.567v-1.545c5.34-.211 10.4-.632 15.105-1.265V59.01z"
        transform="translate(-1.5 -6.3)"
      />
    </svg>
  );
};

JobMarket.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "68",
  height: "62",
  viewBox: "0 0 69 61"
};

export default JobMarket;