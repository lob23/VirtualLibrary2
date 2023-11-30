"use client"; // This is a client component 👈🏽

import { useState } from "react";
import "./index.css"

export default function search_form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, repeatPassword] = useState("");
  const [notification, setNotification] = useState("");
  const searchBar ={
    marginInline: 50,
    fontSize: 20,
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("username: ", username);
    console.log("password: ", password);
    console.log("repeatpassword: ", repeatpassword);

    const res = await fetch("api/search", {
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
      <div class="relative w-screen h-screen bg-fixed bg-white">
        <div class="row row-cols-lg-auto absolute top-[20px] left-[80px]">
          <button style={searchBar} class="btn btn-primary font-Gilroy_md fs-1 text-blue text-md bg-transparent text-wrap border-transparent">
            Home  
          </button>
          <button style={searchBar} class="btn btn-primary font-Gilroy_md fs-1 text-blue text-md bg-transparent text-wrap border-transparent">
            Library  
          </button>
          <button style={searchBar} class="btn btn-primary font-Gilroy_md fs-1 text-blue text-md bg-transparent text-wrap border-transparent">
            Creator  
          </button>
        </div>
        <div class="row row-cols-lg-auto flex flex-col items-center w-auto h-full">
          <div class="row row-cols-lg-auto absolute w-max h-max top-[70px]">
            <div>
              <form onSubmit={handleSubmit} class="float-left flex flex-col items-center">
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id="username"
                  placeholder="Search your book here"
                  class="row-span-1 w-[380px] h-[38px]"
                />
              </form>
              <button 
                  style={{marginInline: 10}}
                  class="btn btn-primary float-left w-[100px] h-[40px] p-3 rounded-[12px] bg-yellow border-none text-white text-md font-Gilroy_bd"
                >
                  Search
                </button>
            </div>
          </div>
        </div>
        <div class="row row-cols-lg-auto absolute top-[130px] left-[80px]">
          <h1 style={{fontSize: 30}} class="font-Gilroy_md text-blue text-xl leading-10">
                New & Trending
          </h1>
        </div>      
        <div class="row row-cols-lg-auto absolute top-[400px] left-[80px]">
          <h1 style={{fontSize: 30}} class="font-Gilroy_md text-blue text-xl leading-10">
                Your list
          </h1>
        </div>      
      </div>
    </>
  );
}
