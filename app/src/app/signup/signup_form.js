"use client"; // This is a client component 👈🏽

import { useState } from "react";

export default function signup_form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, repeatPassword] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("username: ", username);
    console.log("password: ", password);
    console.log("repeatpassword: ", repeatpassword);

    const res = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const { msg } = await res.json();
    console.log("message", msg);
    setNotification("abc");
  };

  return (
    <>
      <div class="relative w-screen h-screen bg-registerbg bg-fixed">
        <div class="absolute  -bottom-20 -right-20  w-[300px] h-[300px]">
          <img
            class="object-contain w-full h-full  "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div class="absolute bottom-[20px] left-[120px]  w-[120px] h-[150px]">
          <img
            class="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div class="absolute top-[60px] right-[120px]  w-[80px] h-[80px]">
          <img
            class="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div class="grid grid-flow-col grid-cols-3 grid-rows-none absolute top-0 left-0 right-0 bottom-0  w-2/3 h-3/4 m-auto rounded-[40px] bg-white/70 backdrop-blur-sm">
          <div class=" col-span-1 flex flex-col px-10 py-20 w-auto h-full bg-white">
            <img
              class="object-scale-down w-full h-1/2 "
              src="/image/reg_img1.png"
            ></img>
            <h1 class="font-Gilroy_bd text-blue text-sp leading-10">
              Welcome to<br></br> Literia{" "}
            </h1>
            <h3 class="font-Gilroy_sb text-blue text-sm">
              Hundred of book to choose
            </h3>
          </div>
          <div class="col-span-2 flex flex-col  justify-center items-center w-auto h-full ">
            <h1 class="font-Gilroy_bd text-blue text-sp -ml-[280px]">
              Sign Up
            </h1>
            <div class="flex flex-col w-max h-max">
              <div>
                <form
                  onSubmit={handleSubmit}
                  class="grid grid-cols-none grid-row-4"
                >
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    id="username"
                    placeholder="Username"
                    class="row-span-1 w-[380px] h-[38px] my-2   "
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    placeholder="Password"
                    className="row-span-1 w-[380px] h-[38px] my-2  "
                  />
                   <input
                    type="password"
                    onChange={(e) => repeatPassword(e.target.value)}
                    value={repeatpassword}
                    id="repeatpassword"
                    placeholder="Confirm Password"
                    className="row-span-1 w-[380px] h-[38px] my-2  "
                  />
                  <p class="items-end ml-auto font-Gilroy_md text-red text-sm">
                    Already have an account? Sign in
                  </p>
                  <button
                    className=" w-[380px] h-[60px] my-5 bg-blue p-3 rounded-[12px] border-none text-white text-xl font-Gilroy_bd"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
