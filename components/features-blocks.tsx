export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">We are Revolutionizing Banking with Smart Integrated Solutions !!! </h2>
            <p className="text-xl text-gray-600">
            Elevate Your Financial Landscape through Advanced Technology, Comprehensive Reporting, and Streamlined Operations
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-green-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <circle
                      className="stroke-current text-green-300"
                      cx="22"
                      cy="46"
                      r="3"
                    />
                    <circle
                      className="stroke-current text-green-300"
                      cx="42"
                      cy="46"
                      r="3"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M16 16h32M16 16l-3 14h38l-2-10H18"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Credit Department
              </h4>
              <p className="text-gray-600 text-center">
              Streamline credit management and reporting operations, ensuring precision and efficiency in every transaction.
              </p>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-indigo-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <circle
                      className="stroke-current text-indigo-300"
                      cx="32"
                      cy="48"
                      r="4"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M20 20v-4M44 20v-4M16 28h32M24 32h16M24 32l-2 12H18l-2-12"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Operation Department
              </h4>
              <p className="text-gray-600 text-center">
              Manage accounting, conduct comparative analyses, oversee cash transactions, and streamline deposits and withdrawals for seamless operational efficiency.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-orange-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-orange-300"
                      d="M32 10c8.837 0 16 7.163 16 16 0 5.241-2.493 10.293-6.707 13.474C40.154 41.68 36.189 44 32 44s-8.154-2.32-9.293-5.526C18.493 36.293 16 31.241 16 26c0-8.837 7.163-16 16-16zM38 46v5M26 46v5M32 44v5"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M22 26h20M20 34h24M20 42h24"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Internal Audit Department
              </h4>
              <p className="text-gray-600 text-center">
              Elevate transparency and compliance with VVault's internal audit solutions, ensuring airtight financial integrity across all operations.
              </p>
            </div>
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-green-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <circle
                      className="stroke-current text-green-300"
                      cx="22"
                      cy="46"
                      r="3"
                    />
                    <circle
                      className="stroke-current text-green-300"
                      cx="42"
                      cy="46"
                      r="3"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M16 16h32M16 16l-3 14h38l-2-10H18"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              IT Department
              </h4>
              <p className="text-gray-600 text-center">
              Navigate the digital landscape with VVault's cutting-edge IT department, ensuring robust technology infrastructure and innovative solutions for your banking needs.
              </p>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-indigo-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <circle
                      className="stroke-current text-indigo-300"
                      cx="32"
                      cy="48"
                      r="4"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M20 20v-4M44 20v-4M16 28h32M24 32h16M24 32l-2 12H18l-2-12"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Enterprise Wide Risk Department
              </h4>
              <p className="text-gray-600 text-center">
              Mitigate risks and optimize decision-making with our comprehensive enterprise-wide risk department, safeguarding your financial institution from unforeseen challenges.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-orange-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-orange-300"
                      d="M32 10c8.837 0 16 7.163 16 16 0 5.241-2.493 10.293-6.707 13.474C40.154 41.68 36.189 44 32 44s-8.154-2.32-9.293-5.526C18.493 36.293 16 31.241 16 26c0-8.837 7.163-16 16-16zM38 46v5M26 46v5M32 44v5"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M22 26h20M20 34h24M20 42h24"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Administration Department
              </h4>
              <p className="text-gray-600 text-center">
              Optimize administrative processes with VVault's administration department, ensuring smooth coordination and effective management of resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
