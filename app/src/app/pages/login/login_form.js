"use client"; // This is a client component 👈🏽
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function login_form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const user = await res.json().then(result => { return result})
    // console.log("Userrr: ", user)
    // console.log("Userrr: ", user.User_name)

    // console.log("Userrr: ", user.User_email)
    if (user == null){
      toast.error("Try Again !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });

    } else {
      router.push("/pages/home")
    }
    setNotification("abc");
  };

  return (
    <>
      <div className="relative w-screen h-screen bg-registerbg bg-fixed">
        
        <div className="absolute  -bottom-20 -right-20  w-[300px] h-[300px]">
          <img
            className="object-contain w-full h-full  "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div>
          <ToastContainer/>
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
        <div className="grid grid-flow-col grid-cols-3 grid-rows-none absolute top-0 left-0 right-0 bottom-0  w-2/3 h-3/4 m-auto rounded-[40px] bg-white/70 backdrop-blur-sm">
          <div className="col-span-1 flex flex-col px-10 py-20 w-auto h-full bg-white">
            <img
              className="object-scale-down w-full h-1/2 "
              src="/image/reg_img1.png"
            ></img>
            <h1 className="font-Gilroy_bd text-blue text-sp leading-10">
              Welcome to<br></br> Literia{" "}
            </h1>
            <h3 className="font-Gilroy_sb text-blue text-sm">
              Hundred of book to choose
            </h3>
          </div>
          <div className="col-span-2 flex flex-col  justify-center items-center w-auto sc-full ">
            <h1 className="font-Gilroy_bd text-blue text-sp -ml-[280px]">
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
                    placeholder="Username"
                    className="row-span-1 w-[380px] h-[38px] my-2   "
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    placeholder="Password"
                    className="row-span-1 w-[380px] h-[38px] my-2  "
                  />
                  <p className="items-end ml-auto font-Gilroy_md text-red text-sm">
                    Forgot password?
                  </p>
                  <button
                    className=" w-[380px] h-[60px] my-5 bg-blue p-3 rounded-[12px] border-none text-white text-xl font-Gilroy_bd"
                    type="submit"
                  >
                    Sign In
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
