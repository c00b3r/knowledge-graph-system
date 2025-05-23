function LowercaseIcon() {
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
          d='M7.5 18q-1.275 0-2.025-.687t-.75-1.813q0-1.1.862-1.812.863-.713 2.213-.713.574 0 1.125.1.55.1.95.275v-.3q0-.725-.513-1.175T8 11.425q-.576 0-1.05.237a2.4 2.4 0 0 0-.825.688l-1.175-.875q.6-.725 1.362-1.075t1.713-.35q1.725 0 2.575.813t.85 2.437v4.45H9.875v-.925h-.1a2.3 2.3 0 0 1-.95.875q-.6.3-1.325.3m.3-1.35q.875 0 1.487-.6t.613-1.4a3 3 0 0 0-.838-.312 4.3 4.3 0 0 0-.962-.113q-.8 0-1.25.35t-.45.925q0 .5.4.825t1 .325M17.5 18l-4-4 1.4-1.4 1.6 1.6V8h2v6.2l1.6-1.6 1.4 1.4z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default LowercaseIcon;
