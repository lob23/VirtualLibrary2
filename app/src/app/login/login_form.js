"use client"; // This is a client component 👈🏽
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { postLogin } from "../_api/login/route";

export default function Login_form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username == "" || password == "") {
      toast.error("Please enter username and password !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
    } else {

      const res = await postLogin({
          username,
          password
        }
      );

      const user = await res.json().then(result => { return result })
      console.log("user", user);

      if (user == null) {
        toast.error("Try Again !", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        });

      } else {
        if (user) {
          if (user.User_authorizationLevel == 1)
            router.push("/homeReader?uid=" + user._id);
          else if (user.User_authorizationLevel == 2)
            router.push("/homeAuthor?uid=" + user._id);
          else router.push("/homeLiberian?uid=" + user._id);
        }
      }
      setNotification("abc");
    };
  }

  const routingToSignup = () =>{
    router.push( "/signup" );
  }

  return (
    <>
      <div className="relative w-screen h-screen bg-registerbg bg-fixed overflow-hidden">
        <div className="w-screen h-screen justify-center items-center ">
          <div className="absolute  -bottom-20 -right-20  w-[300px] h-[300px]">
            <img
              className="object-contain w-full h-full  "
              src="/image/reg_cir.png"
            ></img>
          </div>
          <div>
            <ToastContainer />
          </div>
          <div className="absolute bottom-[20px] left-[120px]  w-[120px] h-[150px]">
            <img
              className="object-contain w-full h-full "
              src="/image/reg_cir.png"
            ></img>
          </div>
          <div className="absolute top-[60px] right-[120px]  w-[80px] h-[80px]">
            <img
              className="object-contain w-full h-full "
              src="/image/reg_cir.png"
            ></img>
          </div>
          <div className="flex flex-wrap w-full h-full justify-center items-center">
            <div className="flex flex-row w-3/4 h-3/4 bg-white/70 backdrop-blur-sm overflow-hidden rounded-[40px] ">
              <div className="flex flex-col w-1/3 h-full bg-white justify-center  px-5">
                <img
                  className="object-scale-down w-full h-1/2  "
                  src="/image/reg_img1.png"
                ></img>
                <h1 className="font-Gilroy_bd text-blue text-[40px] mt-[10px] leading-10">
                  Welcome to<br></br> Literia{" "}
                </h1>
                <h3 className="font-Gilroy_sb text-blue text-[20px] mt-[10px]">
                  Hundred of book to choose
                </h3>
              </div>

              <div className="flex flex-col  justify-center items-center w-2/3 ">
                <h1 className="font-Gilroy_bd text-blue text-[40px] -ml-[260px]">
                  Sign In
                </h1>
                <div className="flex flex-col w-max h-max">
                  <div>
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-none grid-row-4"
                    >
                      <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        id="username"
                        placeholder="Email"
                        className="row-span-1 w-[380px] h-[38px] my-2   "
                      />
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password"
                        placeholder="Password"
                        className="row-span-1 w-[380px] h-[38px] my-2 "
                      />
                      <p className="items-end ml-auto font-Gilroy_md text-red text-sm">
                        Forgot password?
                      </p>
                      <p onClick={() => {routingToSignup()}} className="items-end ml-auto font-Gilroy_md text-red text-sm">
                        You don&apos;t have an account? Sign up now
                      </p>
                      <div className="flex flex-row items-center justify-center">

                        <button
                          type="submit"
                          className=" w-[380px] h-[60px] my-5 bg-blue p-3 rounded-[12px] border-none text-white text-xl font-Gilroy_bd   items-center justify-center text-center"
                        >
                          Sign In
                        </button>



                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>

          </div>



        </div>

      </div>
    </>
  );
}



