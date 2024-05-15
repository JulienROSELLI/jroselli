export const curlyBackets = (position?: "left" | "right", color = "white") =>
  position === "left" ? (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M14 21C12.8954 21 12 20.1046 12 19V15.3255C12 14.8363 12 14.5917 11.9447 14.3615C11.8957 14.1575 11.8149 13.9624 11.7053 13.7834C11.5816 13.5816 11.4086 13.4086 11.0627 13.0627L10 12L11.0627 10.9373C11.4086 10.5914 11.5816 10.4184 11.7053 10.2166C11.8149 10.0376 11.8957 9.84254 11.9447 9.63846C12 9.40829 12 9.1637 12 8.67452V5C12 3.89543 12.8954 3 14 3'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </g>
    </svg>
  ) : (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M10 21C11.1046 21 12 20.1046 12 19V15.3255C12 14.8363 12 14.5917 12.0553 14.3615C12.1043 14.1575 12.1851 13.9624 12.2947 13.7834C12.4184 13.5816 12.5914 13.4086 12.9373 13.0627L14 12L12.9373 10.9373C12.5914 10.5914 12.4184 10.4184 12.2947 10.2166C12.1851 10.0376 12.1043 9.84254 12.0553 9.63846C12 9.40829 12 9.1637 12 8.67452V5C12 3.89543 11.1046 3 10 3'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </g>
    </svg>
  );
