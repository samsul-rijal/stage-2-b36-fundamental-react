import React from "react";

//Import Components
import List from "./components/list";
import CompInput from "./components/Input";

const data = [
  {
    name: 'Hilal',
    address: 'Tangerang',
    image: "https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?k=20&m=1361394182&s=612x612&w=0&h=veRQ9_S8xcC54nBcJ8rNS4BqHVx4oBcfagohNNnF4Sw="
  },
  {
    name: 'Acep',
    address: 'Jakarta',
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: 'Jaen',
    address: 'Bandung',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
]

  console.log(data);

function Props() {
  return (
    // Code Inside div
    <div>

      <CompInput label="Name" placeholder="Isikan name" />
      <CompInput label="Address" placeholder="Isikan address" />
      <CompInput label="Gender" placeholder="Isikan gender" />


      {data.map((item, index) => {
        return(
          <div key={index}>
            <ul>
              <li><List name={item.name} address={item.address} image={item.image} /></li>
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Props;
