"use client";
export default function footer() {
  return (
    <>
      <div className="relative w-full h-[480px] px-[70px] bg-blue bg-fixed overflow-hidden">
        <div className="grid grid-cols-3 w-full h-[350px] justify-center">
          <div className="flex flex-col static w-[250px] h-auto px-5 py-12">
            <img
              className="absolute w-[60px] h-[60px]"
              src="/image/logo_white.png"
              alt="Logo_footer"
            ></img>
            <h1 className="font-Gilroy_sb text-white text-5xl text-sp ml-[70px] py-[16px]">
              Literia
            </h1>
            <p className="font-Gilroy_md w-auto h-[100px] text-white text-1xl test-sp leading-5 py-[40px]">
              Explore a universe of literature and knowledge in the palm of your
              hand with our library app – where stories and information await,
              ready to inspire and educate.
            </p>
          </div>

          <div className="flex flex-col static w-[250px] h-[400px] px-5 py-[73px]">
            <h1 className="font-Gilroy_sb text-white text-4xl w-full h-[40px]">
              About
            </h1>
            <div className="col-span-3 flex gap-y-3 flex-col w-auto h-[200px] py-[30px]">
              <h2 className="font-Gilroy_md text-white text-2xl">Careers</h2>
              <h2 className="font-Gilroy_md text-white text-2xl">Privacy</h2>
              <h2 className="font-Gilroy_md text-white text-2xl">Help</h2>
            </div>
          </div>
          <div className="flex flex-col static w-[250px] h-auto px-5 py-[73px]">
            <h1 className="font-Gilroy_sb text-white text-4xl w-full h-[40px]">
              Contact us
            </h1>
            <div className="row-span-3 flex flex-row gap-x-10 w-full h-[50px] py-5">
              <span className="object-cover w-auto h-auto bg-transparent border-none">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_57_248)">
                    <path
                      d="M24.5356 0.194824C11.2809 0.194824 0.535645 10.9401 0.535645 24.1948C0.535645 35.4499 8.28476 44.8943 18.7382 47.4883V31.5292H13.7894V24.1948H18.7382V21.0345C18.7382 12.8659 22.4352 9.07962 30.455 9.07962C31.9756 9.07962 34.5993 9.37818 35.6726 9.67578V16.3238C35.1062 16.2643 34.1222 16.2345 32.9001 16.2345C28.9651 16.2345 27.4444 17.7254 27.4444 21.6009V24.1948H35.2838L33.9369 31.5292H27.4444V48.0191C39.3283 46.5839 48.5366 36.4655 48.5366 24.1948C48.5356 10.9401 37.7904 0.194824 24.5356 0.194824Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_57_248">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0.535645 0.194824)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="object-cover w-auto h-auto bg-transparent border-none">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.1882 4.00244H43.9352L29.1951 20.8494L46.5356 43.7744H32.9581L22.3237 29.8705L10.1555 43.7744H3.40451L19.1705 25.7546L2.53564 4.00244H16.4579L26.0704 16.7111L37.1882 4.00244ZM34.8203 39.736H38.5588L14.4264 7.82871H10.4146L34.8203 39.736Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="object-cover w-auto h-auto bg-transparent border-none">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_57_246)">
                    <path
                      d="M24.5356 4.5167C30.9481 4.5167 31.7075 4.54482 34.2294 4.65732C36.5731 4.76045 37.8388 5.1542 38.6825 5.48232C39.7981 5.91357 40.6044 6.43857 41.4388 7.27295C42.2825 8.1167 42.7981 8.91357 43.2294 10.0292C43.5575 10.8729 43.9513 12.1479 44.0544 14.4823C44.1669 17.0136 44.195 17.7729 44.195 24.1761C44.195 30.5886 44.1669 31.348 44.0544 33.8698C43.9513 36.2136 43.5575 37.4792 43.2294 38.323C42.7981 39.4386 42.2731 40.2448 41.4388 41.0792C40.595 41.923 39.7981 42.4386 38.6825 42.8698C37.8388 43.198 36.5638 43.5917 34.2294 43.6948C31.6981 43.8073 30.9388 43.8354 24.5356 43.8354C18.1231 43.8354 17.3638 43.8073 14.8419 43.6948C12.4981 43.5917 11.2325 43.198 10.3888 42.8698C9.27314 42.4386 8.46689 41.9136 7.63252 41.0792C6.78877 40.2355 6.27314 39.4386 5.84189 38.323C5.51377 37.4792 5.12002 36.2042 5.01689 33.8698C4.90439 31.3386 4.87627 30.5792 4.87627 24.1761C4.87627 17.7636 4.90439 17.0042 5.01689 14.4823C5.12002 12.1386 5.51377 10.8729 5.84189 10.0292C6.27314 8.91357 6.79814 8.10732 7.63252 7.27295C8.47627 6.4292 9.27314 5.91357 10.3888 5.48232C11.2325 5.1542 12.5075 4.76045 14.8419 4.65732C17.3638 4.54482 18.1231 4.5167 24.5356 4.5167ZM24.5356 0.194824C18.02 0.194824 17.2044 0.222949 14.645 0.335449C12.095 0.447949 10.3419 0.860449 8.82314 1.45107C7.23877 2.06982 5.89815 2.88545 4.5669 4.22607C3.22627 5.55732 2.41064 6.89795 1.79189 8.47295C1.20127 10.0011 0.78877 11.7448 0.67627 14.2948C0.56377 16.8636 0.535645 17.6792 0.535645 24.1948C0.535645 30.7104 0.56377 31.5261 0.67627 34.0854C0.78877 36.6354 1.20127 38.3886 1.79189 39.9073C2.41064 41.4917 3.22627 42.8323 4.5669 44.1636C5.89815 45.4948 7.23877 46.3198 8.81377 46.9292C10.3419 47.5198 12.0856 47.9323 14.6356 48.0448C17.195 48.1573 18.0106 48.1854 24.5263 48.1854C31.0419 48.1854 31.8575 48.1573 34.4169 48.0448C36.9669 47.9323 38.72 47.5198 40.2388 46.9292C41.8138 46.3198 43.1544 45.4948 44.4856 44.1636C45.8169 42.8323 46.6419 41.4917 47.2513 39.9167C47.8419 38.3886 48.2544 36.6448 48.3669 34.0948C48.4794 31.5354 48.5075 30.7198 48.5075 24.2042C48.5075 17.6886 48.4794 16.8729 48.3669 14.3136C48.2544 11.7636 47.8419 10.0104 47.2513 8.4917C46.6606 6.89795 45.845 5.55732 44.5044 4.22607C43.1731 2.89482 41.8325 2.06982 40.2575 1.46045C38.7294 0.869824 36.9856 0.457324 34.4356 0.344824C31.8669 0.222949 31.0513 0.194824 24.5356 0.194824Z"
                      fill="white"
                    />
                    <path
                      d="M24.5356 11.8667C17.7294 11.8667 12.2075 17.3886 12.2075 24.1948C12.2075 31.0011 17.7294 36.5229 24.5356 36.5229C31.3419 36.5229 36.8638 31.0011 36.8638 24.1948C36.8638 17.3886 31.3419 11.8667 24.5356 11.8667ZM24.5356 32.1917C20.12 32.1917 16.5388 28.6104 16.5388 24.1948C16.5388 19.7792 20.12 16.1979 24.5356 16.1979C28.9513 16.1979 32.5325 19.7792 32.5325 24.1948C32.5325 28.6104 28.9513 32.1917 24.5356 32.1917Z"
                      fill="white"
                    />
                    <path
                      d="M40.2294 11.3791C40.2294 12.9729 38.9356 14.2572 37.3513 14.2572C35.7575 14.2572 34.4731 12.9635 34.4731 11.3791C34.4731 9.78535 35.7669 8.50098 37.3513 8.50098C38.9356 8.50098 40.2294 9.79473 40.2294 11.3791Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_57_246">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0.535645 0.194824)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>

            <div className="col-span-2 flex gap-y-3 flex-col w-auto h-auto py-[10px]">
              <h2 className="font-Gilroy_md text-white text-xl">
                Email: Literia@literia.com
              </h2>
              <h2 className="font-Gilroy_md text-white text-xl">
                Phone: +09 999 999 999
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-auto transform scale-100 md:scale-25">
          <svg
            width="80%"
            height="3"
            viewBox="0 0 1798 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.311157 1.28174L1797.9 1.28158"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="relative w-auto h-auto py-[40px]">
          <p className="font-Gilroy_sb text-white text-sp">
            Access number: 200
          </p>
        </div>
      </div>
    </>
  );
}
