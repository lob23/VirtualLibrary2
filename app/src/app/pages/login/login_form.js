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

    if (username == "" || password == "") {
      toast.error("Please enter username and password !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
    } else {
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
        toast.error("Invalid Email or Password !", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        });

      } else {
        if (user){
          if (user.User_authenticationLevel == 1)
            router.push("/pages/homeReader?uid=" + user._id);
          else if (user.User_authenticationLevel == 2)
            router.push("/pages/homeAuthor?uid=" + user._id);
          else router.push("/pages/homeLiberian?uid=" + user._id);
        }
      }
      setNotification("abc");
    }
  };

  return (
    <>
      <div className="relative w-screen h-screen bg-registerbg bg-fixed overflow-hidden">
        
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
        <div className="grid grid-flow-col grid-cols-3 grid-rows-none absolute top-0 left-0 right-0 bottom-0  w-2/3 h-3/4 m-auto rounded-[40px] bg-white/70 backdrop-blur-sm overflow-hidden">
          <div className="col-span-1 flex flex-col px-10 py-20 w-auto h-full bg-white">
            <img
              className="object-scale-down w-full h-1/2 "
              src="/image/reg_img1.png"
            ></img>
            <h1 className="font-Gilroy_bd text-blue text-[40px] mt-[10px] leading-10">
              Welcome to<br></br> Literia{" "}
            </h1>
            <h3 className="font-Gilroy_sb text-blue text-[20px] mt-[10px]">
              Hundred of book to choose
            </h3>
          </div>
          <div className="col-span-2 flex flex-col  justify-center items-center ">
            <h1 className="w-full h-fit font-Gilroy_bd text-blue text-[40px]">
              Sign In
            </h1>
            <div className="flex flex-col w-full h-full">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full h-full"
                >
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    id="username"
                    placeholder="Username"
                    className=" w-full h-[38px]  "
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    placeholder="Password"
                    className=" w-full h-[38px] "
                  />
                  <p className="ml-auto font-Gilroy_md text-red text-sm">
                    Forgot password?
                  </p>
                  <div className="w-full h-[40px] flex flex-wrap items-center justify-center text-center">
                   
                    <button
                      type="submit"
                      className="w-full h-full  bg-blue p-4 rounded-[12px] border-none text-white text-xl font-Gilroy_bd text-center"
                    >
                      Sign In
                    </button>
                    
               
                  
                  </div>
                </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
