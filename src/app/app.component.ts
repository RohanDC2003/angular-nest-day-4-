import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nest day4';
  isadmin = 'false';
  districts: any = [{
    id:1,
    title: 'Alappuzha',
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    desc: "Alappuzha, Kerala: Known as \"Venice of the East\" for its backwaters and houseboat cruises. Famous for Onam snake boat races and coir industry."
  },{
    id:2,
    title: 'Ernakulam',
    image: "https://s3.india.com/travel/wp-content/uploads/2014/09/Ernakulam.jpg",
    desc: "Ernakulam, Kerala: Vibrant district known for its commercial hub, Kochi. Features bustling markets, historical sites, and cultural diversity. Hub of trade and tourism in the region."
  },{
    id:3,
    title: 'Idukki',
    image: "https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B-e1534139417729.jpg",
    desc: "Idukki, Kerala: Picturesque district renowned for its lush hills, tea plantations, and wildlife sanctuaries. Home to the Idukki Dam, one of Asia's largest arch dams. Offers breathtaking views and opportunities for trekking and nature exploration."
  },{
    id:4,
    title: 'Kannur',
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/09/02151433/places-to-visit-in-kannur-shutterstock_1604282707-1200x700-compressed.jpg",
    desc: "Kannur, Kerala: Coastal district famed for its pristine beaches, Theyyam ritual art form, and historic forts. Rich in cultural heritage, offering a blend of natural beauty and traditional art forms."
  },{
    id:5,
    title: 'Kasaragod',
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/09/Places-To-Visit-In-Kasargod-cover.jpg",
    desc: "Kasaragod, Kerala: Northernmost district known for its tranquil beaches, historic forts, and unique Theyyam rituals. Offers a serene escape with pristine landscapes and a rich cultural tapestry."
  },{
    id:6,
    title: 'Kollam',
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
    desc: "Kollam, Kerala: Coastal district renowned for its serene backwaters, historic ports, and scenic beauty. Famous for cashew processing industry and traditional coir manufacturing. Offers a blend of cultural heritage and natural splendor."
  },{
    id:7,
    title: 'Kottayam',
    image: "https://www.clubmahindra.com/blog/media/section_images/15kottayam-d72ed3ff1b8af6f.webp",
    desc: "Kottayam, Kerala: District known for its lush landscapes, backwater stretches, and rubber plantations. Renowned for its publishing industry and educational institutions. Offers a tranquil ambiance amidst nature's beauty."
  },{
    id:8,
    title: 'Kozhikode',
    image: "https://www.keralatourism.org/images/destination/mobile/kozhikode_beach20150811120557_256_1.jpg",
    desc: "Kozhikode, Kerala: Coastal district famous for its historic role in trade, spice markets, and serene beaches. Known for its rich cultural heritage, including the traditional art form of Theyyam. Offers a blend of history, commerce, and natural beauty."
  },{
    id:9,
    title: 'Malappuram',
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/14104744/Top-tourist-attractions-in-Malappuram-and-things-to-do.jpg",
    desc: "Malappuram, Kerala: District known for its cultural diversity, historic mosques, and lush greenery. Renowned for its educational institutions and vibrant festivals. Offers a unique blend of tradition, modernity, and natural beauty."
  },{
    id:10,
    title: 'Palakad',
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Palakkad_Fort_5.jpg",
    desc: "Palakkad, Kerala: District famed for its verdant landscapes, Palakkad Gap, and historical forts. Known for its agricultural richness and traditional art forms like Kathakali. Offers a serene escape with scenic beauty and cultural heritage."
  },{
    id:11,
    title: 'Pathanamthitta',
    image: "https://www.dtpcpathanamthitta.com/uploads/picture_gallery/gallery_images/moozhiyar-dam-pathanamthitta-2-20230506122536954517.webp",
    desc: "Pathanamthitta, Kerala: District renowned for its religious significance, hosting the Sabarimala pilgrimage. Rich in natural beauty with dense forests and river valleys. Known for its tranquil ambiance and spiritual retreats."
  },{
    id:12,
    title: 'Thiruvananthapuram',
    image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101644-Thiruvananthapuram-District.jpg",
    desc: "Thiruvananthapuram, Kerala: Capital district known for its historic landmarks, such as the iconic Padmanabhaswamy Temple and Napier Museum. Offers a mix of cultural heritage, modern amenities, and scenic beaches. Hub of government, education, and tourism in Kerala."
  },{
    id:13,
    title: 'Thrissur',
    image: "https://cdn.britannica.com/79/144379-050-8BC20473/festival-Vadakkumnathan-Temple-Thrissur-India-Kerala.jpg",
    desc: "Thrissur formerly Trichur, also known by its historical name Thrissivaperur, is a city and the headquarters of the Thrissur district in Kerala, India. It is the third largest urban agglomeration in Kerala after Kochi and Kozhikode, and the 21st largest in India."
  },{
    id:14,
    title: 'Wayanad',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/800px-Blue%2C_Green_%26_White.jpg",
    desc: "Wayanad, Kerala: Picturesque district nestled in the Western Ghats known for its lush greenery, wildlife sanctuaries, and tea plantations. Offers serene landscapes, trekking trails, and indigenous tribal culture. A haven for nature lovers seeking tranquility amidst breathtaking scenery."
  }];
}
