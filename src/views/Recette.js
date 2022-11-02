import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


const Recette = () => {

  const [Recette, setRecette] = useState(null);


  async function fetchData() {
    console.log("aaaaaaa");

    axios
      .get(`http://localhost:8095/recette`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res.data.results.bindings);
        setRecette(res.data.results.bindings);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
        <div class="col-lg-12 grid-margin stretch-card ">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Liste de Recettes</h4>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Temps</th>
                 
                  </tr>
                </thead>
                <tbody>
                {Recette?.map((item) => (
                  <tr>
                    <td>{item.nom.value}</td>
                    <td>{item.temps.value}</td>


                  </tr>
               
               ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recette