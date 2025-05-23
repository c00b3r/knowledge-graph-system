function UppercaseIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='a'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path fill='#D9D9D9' d='M0 0h24v24H0z' />
      </mask>
      <g mask='url(#a)'>
        <path
          d='M16.5 18v-6.2l-1.6 1.6-1.4-1.4 4-4 4 4-1.4 1.4-1.6-1.6V18zM3 18 7.125 7H9.1l4.125 11h-1.9l-.975-2.825H5.9L4.9 18zm3.475-4.425H9.75l-1.625-4.55h-.1z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default UppercaseIcon;
