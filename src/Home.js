import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <img className="home__image"
			src="https://media.playstation.com/is/image/SCEA/playstation-store-digital-benefits-game-without-limits-section-background-01-us-30jul18?$native_nt$"/>
                <div className="home__row">
                    <Product title="Gta V" price={1200.0} rating={5} img ="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" />
                    <Product title="CS:GO" price={350.0} rating={4} img ="https://gaming4.cash/wp-content/uploads/2018/08/Who-does-it-best-A-look-at-various-esports-scenes-Part-IV.png" />
                    <Product title="God of War" price={2000.0} rating={5}img ="https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png" />
                    <Product title="CyberPunk 2077" price={4050.0} rating={2} img ="https://images.indianexpress.com/2020/12/cyberpunk2077.jpg"/>
               
                    <Product title="No Mans Sky" price={1200.0} rating={5} img = "https://store-images.s-microsoft.com/image/apps.15909.68818099466568894.ac2f77eb-933c-43dd-9097-146a94c389a9.2490b939-a2cb-41b7-8816-8792d37a5338?w=180&h=270&q=60" />
                    <Product title="MatterFall" price={2000.0} rating={3} img ="https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Matterfall_video_game_cover_art_2017.jpg/220px-Matterfall_video_game_cover_art_2017.jpg" />
                    <Product title="Apex Legends" price={0} rating={2} img ="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg"/>
              
                    <Product title="Valorant" price={0} rating={3} img ="https://cdn.vox-cdn.com/thumbor/7-tq8RKAEPQ5ucDlOUGBq2bp0f4=/0x0:5600x3150/1200x800/filters:focal(2352x1127:3248x2023)/cdn.vox-cdn.com/uploads/chorus_image/image/66575329/LogoVersion_Beta_Key_Art_VALORANT.0.jpg"/>
                    <Product title="Mario Kart" price={250.0} rating={2} img = "https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._SL1500_.jpg"/>
                    <Product title="League of Legends" price={125.0} rating={5} img ="https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg"/>
                    <Product title="Fortnite" price={100.0} rating={1} img = "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg" />
		

                </div>
            </div>
        </div>
    );
}

export default Home;
