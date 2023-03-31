import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

  
  const itemcatagory = [
    {
      itemcatagory: "Electronic",
      item_type: "001",
      item_number:"E12",
      item_image:
        "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg",
    },
    {
      itemcatagory: "Electronic",
      item_type: "001",
      item_number:"E13",
      item_image:
        "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg",
    },
    {
      itemcatagory: "Electronic",
      item_type: "001",
      item_number:"E14",
      item_image:
        "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg",
    },
    {
      itemcatagory: "Electronic",
      item_type: "001",
      item_number:"E15",
      item_image:
        "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg",
    },
  ];
  export default function DisplayItems(props){
      const navi= useNavigate();
  console.log(itemcatagory)
  console.log(props.item_type)
      
  const handleadditem=(item)=>{
      console.log("This is handle item",item.item_type);
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
         
          {/* using map function */}
        {itemcatagory.map((item,index)=>(
          // <h1>item</h1>
          <div key={index}>
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