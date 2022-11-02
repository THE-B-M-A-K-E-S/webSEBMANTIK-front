import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Chaud = () => {
  const [Chaud, setChaud] = useState(null);
  const [Animal, setAnimal] = useState(null);
  const [Liquide, setLiquide] = useState(null);


  async function fetchData() {
    console.log("aaaaaaa");

    axios
      .get(`http://localhost:8095/chaud`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res.data.results.bindings);
        setChaud(res.data.results.bindings);
      });


    axios
    .get(`http://localhost:8095/animal`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      console.log(res.data.results.bindings);
      setAnimal(res.data.results.bindings);
    });


    axios
    .get(`http://localhost:8095/liquide`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      console.log(res.data.results.bindings);
      setLiquide(res.data.results.bindings);
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
            <h4 class="card-title">Les Chauds</h4>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>

                  </tr>
                </thead>
                <tbody>
                {Chaud?.map((item) => (
                  <tr>
                    <td>{item.idProduct.value}</td>
                    <td>{item.name.value}</td>






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

export default Chaud;
