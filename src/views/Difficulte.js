import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


const Difficulte = () => {

  const [Diff, setDiff] = useState(null);


  async function fetchData() {
    console.log("aaaaaaa");

    axios
      .get(`http://localhost:8095/difficulte`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res.data.results.bindings);
        setDiff(res.data.results.bindings);
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
            <h4 class="card-title">Les types de difficultés</h4>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Type</th>
                 
                  </tr>
                </thead>
                <tbody>
                {Diff?.map((item) => (
                  <tr>
                    <td>{item.type.value}</td>


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

export default Difficulte