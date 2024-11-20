export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
      />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className={props.className}>
      <svg
        width="41"
        height="77"
        viewBox="0 0 41 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.41229"
          y="44.0449"
          width="13.6197"
          height="41.9191"
          rx="6.80984"
          transform="rotate(-42.0121 1.41229 44.0449)"
          fill="#B8004D"
          stroke="#B8004D"
          stroke-width="2"
        />
        <rect
          x="22.4686"
          y="21.2476"
          width="13.6197"
          height="51.0975"
          rx="6.80984"
          transform="rotate(-0.680858 22.4686 21.2476)"
          fill="#B8004D"
          stroke="#B8004D"
          stroke-width="2"
        />
        <circle
          cx="29.9433"
          cy="7.94251"
          r="6.17613"
          transform="rotate(-6.50186 29.9433 7.94251)"
          fill="#B8004D"
          stroke="#B8004D"
          stroke-width="2"
        />
      </svg>
    </div>
  )
}
