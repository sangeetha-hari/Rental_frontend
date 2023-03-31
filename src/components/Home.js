import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import {itemcatagory} from "../global.js";

const itemcatagory = [
  {
    itemcatagory: "Electronic",
    item_type: "001",
    item_image:
      "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg",
  },
  {
    itemcatagory: "Furniture",
    item_type:"002",
    item_image:
      "https://sc04.alicdn.com/kf/He5ebb863a95144348ef2c21fba7d1d421.jpg",
  },
  {
    itemcatagory: "Bicycles",
    item_type: "003",
    item_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbt4nfFRcsNmIpxH3IMbA72ZzL4rJlwGoWcDKg-ahkixKJzdP2Za4XO3gDhTFbz6-brfdyb8ThDSE&usqp=CAU&ec=48600113",
  },
];
// const itemcatagory=[ {
//       itemcatagory: "Electronic",
//       item_type: "001",
//       item_image:
//         "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg",
//     }, "b","c","d"];

export default function Home(){
    const navi= useNavigate();
console.log(itemcatagory)
    
const handleadditem=(item)=>{
    console.log("This is handle item",item.item_type);
    // if(item.item_type===001){console.log("Electronic item")}
    // else if(item.item_type===002){console.log("furniture item")}
    // else{console.log("others")}

    item.item_type==="001"?console.log("Electronic item"):
    item.item_type==="002"?console.log("furniture item"):
    console.log("others")
}
// const handleAddFBuser=()=>{
//   console.log("handle Add FB")
// //   navi("/myaccount/addfbuser")
// }
// const handleAddFBPage=()=>{
//   console.log("handle Add FB page")
// //   navi("/myaccount/addfbpage")
// }
    return(
        <div>
           <h3>Wecome to Rental APP</h3>
      <div className="flex">
        {/* .............Facebook................. */}
        {/* <div>
            <button>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Electronic Items"
              height="140"
              image="https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Electronic Items
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can add and update your Facebook account details and the
                notification
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  onClick={handleAddFBuser}>shop now</Button>
              
            </CardActions>
          </Card>
          </button>
        </div> */}
        {/*................ Twitter.............. */}
        {/* <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Furniture"
              height="140"
              image="https://sc04.alicdn.com/kf/He5ebb863a95144348ef2c21fba7d1d421.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Furniture
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can add and update your Facebook account details and the
                notification
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">shop now</Button>
              
            </CardActions>
          </Card>
        </div> */}
        {/*.................. Instagram............ */}
        {/* <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Bicycles"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbt4nfFRcsNmIpxH3IMbA72ZzL4rJlwGoWcDKg-ahkixKJzdP2Za4XO3gDhTFbz6-brfdyb8ThDSE&usqp=CAU&ec=48600113"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Bicycles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can add and update your Facebook account details and the
                notification
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleaddinsta}>ADD</Button>
              <Button size="small">UPDATE</Button>
            </CardActions>
          </Card>
        </div> */}

        {/* using map function */}
      {itemcatagory.map((item)=>(
        // <h1>item</h1>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Bicycles"
              height="140"
              image={item.item_image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {item.itemcatagory}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can add and update your Facebook account details and the
                notification
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>{handleadditem(item)}}>SHOP NOW{item.item_type}</Button>
            </CardActions>
          </Card>
        </div>
      ))}

      </div>

        </div>
    )
}