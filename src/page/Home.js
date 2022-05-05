import axios from "axios";
import React, { useState, useEffect } from "react";
import image1 from "../images/1.jpg";
import { Link } from "react-router-dom";

function Home() {
  //useState pour stocker nos data depuis lApi
  const [data, Setdata] = useState(null);

  useEffect(() => {
    //la fonction qui va recuperer les data
    const getposts = () => {
      axios.get("http://localhost:8080/posts").then((res) => {
        Setdata(res.data);
        console.log(res.data);
      });
    };
    //on on lance la fonction
    getposts();
  }, []);

  return (
    <div className=" mt-6 p-4">
      <p className=" text-center text-5xl font-bold text-red-500 ">Acceuil</p>
      <div className=" flex items-center  justify-center mt-6 space-x-4">
        <button className=" bg-blue-300 px-2 py-2 rounded text-blue-600 font-bold text-xs">
          Recherchez
        </button>
        <input
          className=" border py-1 px-2 outline-none shadow"
          type="text"
          name="search"
        />
      </div>
      <div>
        <p className=" text-3xl mt-2 py-4 ml-6 text-red-400">
          Visitez les Brasseries super Aws
        </p>
        <div className=" flex justify-center">
          {/* verification si c'est le tableau data n'est pas vide */}
          {data &&
            data.map((post) => (
              <Link to={"/" + post.id}>
                <div className="relative flex ml-8" key={post.id}>
                  <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl">
                    <img
                      className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                      src={image1}
                      alt="sabc"
                    />

                    <div className="p-4">
                      <small className="text-blue-400 text-xs">
                        Automobile company
                      </small>
                      <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis ad ducimus cum possimus tempora eos quae
                        impedit? Quae corrupti explicabo maiores cum atque
                        facere nam! Pariatur eveniet sit dicta obcaecati.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
