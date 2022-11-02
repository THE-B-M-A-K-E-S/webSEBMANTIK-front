import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


const Plat = () => {

  const [Plat, setPlat] = useState(null);


  async function fetchData() {
    console.log("aaaaaaa");

    axios
      .get(`http://localhost:8095/plat`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res.data.results.bindings);
        setPlat(res.data.results.bindings);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
        <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Liste de Plats</h4>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Nom</th>
                 
                  </tr>
                </thead>
                <tbody>
                {Plat?.map((item) => (
                  <tr>
                    <td>{item.description.value}</td>
                    <td>{item.nom.value}</td>


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

export default Plat