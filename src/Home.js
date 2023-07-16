import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2017/Acquisition/OandO/Weblab/SlashPVtop/C/1078329_apv_slashpv_desktop_watchnow_1500x300.jpg"
          //src="https://media.gettyimages.com/photos/amazon-prime-showing-the-match-live-via-the-internet-during-the-picture-id1186691900?k=6&m=1186691900&s=612x612&w=0&h=aDg08z2GvKd46jt-pBhmM9_2BFnf6rVreA5YAgkza28="
        />
        <div className="home_subcontainer">
          <div className="home_row">
            <Product
              id={122324324}
              title="iPhone 11 64 GB"
              price={70000}
              image="https://fdn.gsmarena.com/imgroot/reviews/19/apple-iphone-11/lifestyle/-1024w2/gsmarena_002.jpg"
              rating={5}
            />
            <Product
              id={122324322}
              title="Lenovo Legion Y540 9th Gen Intel core i7 15.6 inch FHD Gaming Laptop (16GB/1TB SSD/Windows 10/MS Office/6GB NVIDIA RTX2060 Graphics/Black/2.3Kg)81SX00G6IN"
              price={178000}
              image="https://www.gizbot.com/images/2019-10/lenovo-legion-y540_1571479823110.jpg"
              rating={4}
            />
          </div>

          <div className="home_row">
            <Product
              id={12232432676}
              title="Solimo Water Resistant Cotton Mattress Protector 78'x72' - King Size, Grey"
              price={1800}
              image="data:image/jpeg;base64,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"
              rating={3}
            />
            <Product
              id={1223243243223}
              title="Solimo 12-inch Wall Clock - Different Strokes (Step Movement, Black Frame)"
              price={629}
              image="https://img.looksgud.com/upload/item-image/1335/smn9/smn9-amazon-brand-solimo-12-inch-wall-clock-different-strokes_500x500_0.jpg"
              rating={2}
            />
            <Product
              id={1223324324}
              title="Apple AirPods Pro"
              price={20000}
              image="https://image.shutterstock.com/image-photo/ipoh-perak-malaysia-20-april-260nw-1710490879.jpg"
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              id={123234324}
              title="Apple Smart Keyboard Folio (for 12.9-inch iPad Pro - 3rd Generation) - US English"
              price={"Currently Unavailable"}
              image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXNL2LL?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1585083392946"
              rating={4}
            />
            <Product
              id={1223898324}
              title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
              price={1999}
              image="https://www.gizbot.com/images/2020-04/oneplus-bullets-wireless-z_1586954408100.jpg"
              ratig={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;