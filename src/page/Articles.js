import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import image2 from "../images/2.png";
import { useParams } from "react-router-dom";

function Articles() {
  //pour recuperer le parametre passé a lURL
  const params = useParams();

  const [article, SetArticle] = useState(null);

  //recuperer les articles au lancement de la page
  useEffect(() => {
    //la fonction qui recupere nos articles
    const getarticle = () => {
      axios.get("http://localhost:8080/posts/" + params.id).then((res) => {
        SetArticle(res.data);
      });
    };
    getarticle();
  }, [params.id]);

  return (
    <div>
      <div className=" ml-32 text-lg font-bold text-red-400 uppercase mt-8">
        {article && <p>{article.title}</p>}
      </div>
      <div
        style={{ width: "800px" }}
        className="mx-auto flex  flex-col justify-center bg-white rounded-2xl shadow-xl mt-4"
      >
        {/* verification si le tableau article n'est pas vide */}
        {article && (
          <div>
            <img
              className="aspect-video w-full  rounded-t-2xl object-cover object-center"
              src={image2}
              alt="sabc"
            />

            <div className="p-4">
              <small className="text-blue-400 text-2xl">{article.title}</small>
              <div className="text-xs font-medium text-slate-600 pb-2 flex flex-row">
                {article.produits.map((list, index) => (
                  <div key={index} className=" w-full my-4 text-xl">
                    {list}
                  </div>
                ))}
              </div>
              <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                Dodge is an American brand of automobiles and a division of
                Stellantis, based in Auburn Hills, Michigan..
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Articles;
