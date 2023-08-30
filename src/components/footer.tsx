'use client';

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col-reverse items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top text-gray-500 sm:flex-row sm:justify-between sm:text-xs">
      <div className="mr-0 sm:mr-4">
        Copyright © 2023
        <span aria-label="rocket emoji">🚀</span>
        Isaac Almanza
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-4 sm:items-center">
        <p>Follow me on</p>
        <ul className="flex flex-1 items-center justify-center gap-x-4 sm:flex-initial">
          <li>
            <a
              className="sm:hover:text-link inline-block p-2"
              href="https://github.com/ialmanzaj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a
              className="sm:hover:text-link inline-block p-2"
              href="https://twitter.com/ialmanzaj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          {/* <li>
			<a
				class="inline-block p-2 sm:hover:text-link"
				href="..."
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					class="h-6 w-6"
					aria-hidden="true"
					focusable="false"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<circle cx="9" cy="12" r="1"></circle>
					<circle cx="15" cy="12" r="1"></circle>
					<path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
					<path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
					<path
						d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"
					>
					</path>
					<path
						d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"
					>
					</path>
				</svg>
				<span class="sr-only">Discord</span>
			</a>
		</li> */}
          <li>
            <a
              className="sm:hover:text-link inline-block p-2"
              href="mailto:hello@ialmanza.com"
            >
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
