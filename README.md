**Pictago**

Pictago is a web application that allows users to share and discover photos. It is developed by Islem Azouz, Aziz Belarbi, and Yassine Miraoui as a GreenField project for a fullstack web develeopement courses at RBK (Rebootkamp Tunisia )

**Features**

User authentication: users can sign up, log in, and log out.

Upload photos: users can upload photos with titles and descriptions.

Browse photos: users can browse all uploaded photos or filter them by category.

Save and comment: users can Save on their profil and comment on photos.

Edit and delete photos: users can edit and delete the photos they uploaded.

**Technologies used**

React

Node.js

Express

MySQL

Cloudinary

Axios

React Router

React Toastify


**Installation and usage**

To install and run Pictago on your local machine, follow these steps:

Clone this repository: git clone https://github.com/ShinobiSoftx/Pictago-GreenField-Project-RBK.git

Change the directory  then install the dependencies: (npm install) , in both backend and client . 

Start the server: cd backend / npm start

Start the client: cd client / npm start

Copy the code inside the schema.sql file inside the database folder , open a mysql terminal then paste the schema code  (you can copy the cody below to insert some photos to the database , to see the result , or you can just create posts by pressing the + button or pressing create on the navbar .)

Open your browser and go to http://localhost:3000


**Contributors**

Islem Azouz (https://github.com/Islem-Az)

Aziz Belarbi (https://github.com/Mohamed-Aziz-Belarbi)

Yassine Miraoui (https://github.com/yassinemiraoui)



**Photos to insert examples :** 
INSERT INTO posts (title, description, image_url, created_at, category)
VALUES
  ('Casual street style', 'A comfortable and stylish outfit perfect for a day out in the city', 'https://i.pinimg.com/236x/30/79/b9/3079b92407584ec0ea92bb6ec39a5879.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Chic and elegant', 'A sophisticated dress and coat combination for a night out', 'https://i.pinimg.com/236x/91/69/39/916939c1e1fc024e97651f5eb7520e80.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Denim on denim', 'A classic look featuring denim jacket and jeans', 'https://i.pinimg.com/236x/f8/c8/09/f8c809a0f2ef0e4cd334ff19692ff14e.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Vintage vibes', 'A retro-inspired outfit with a floral dress and platform shoes', 'https://i.pinimg.com/236x/6d/64/ac/6d64ac11bf458a1ed0dcb5836cb6cb04.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Bold and colorful', 'A bright and vibrant outfit featuring a rainbow striped sweater', 'https://i.pinimg.com/236x/75/ae/4a/75ae4ad384de882a31bebde6c7ca6b33.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Monochrome magic', 'A black and white outfit with a stylish blazer and trousers', 'https://i.pinimg.com/236x/68/80/f7/6880f7b248fe7f52e7e3117073c5fcc8.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Feminine and flirty', 'A flowy skirt and crop top combination with delicate floral details', 'https://i.pinimg.com/236x/c0/19/44/c019440e10a65f1ee2231d7e265f6e54.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Effortlessly chic', 'A simple yet stylish outfit with a white tee and high-waisted jeans', 'https://i.pinimg.com/236x/44/12/59/4412598ee95dd230522698a5fefb853d.jpg', '2023-05-12 09:00:00', 'fashion'),
  ('Streetwear style', 'A trendy and casual outfit with a hoodie and cargo pants', 'https://i.pinimg.com/236x/1b/60/f7/1b60f7e61637fed955daadaefb1b0a70.jpg', '2023-05-12 09:00:00', 'fashion');
INSERT INTO posts (title, description, image_url, created_at, category)
VALUES
('Fashion post 1', 'Description of fashion post 1', 'https://i.pinimg.com/236x/30/79/b9/3079b92407584ec0ea92bb6ec39a5879.jpg', NOW(), 'fashion'),
('Fashion post 2', 'Description of fashion post 2', 'https://i.pinimg.com/236x/91/69/39/916939c1e1fc024e97651f5eb7520e80.jpg', NOW(), 'fashion');
INSERT INTO posts (title, description, image_url, created_at, category)
VALUES
  ('Anime girl looking at the stars', 'A beautiful anime girl standing in a field at night looking at the stars', 'https://i.pinimg.com/236x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg', NOW(), 'anime'),
  ('Kawaii anime girl', 'A cute anime girl with pink hair and a big smile', 'https://i.pinimg.com/236x/1a/84/35/1a8435b262f70dc441a52bf15a9c620d.jpg', NOW(), 'anime'),
  ('Anime girl with butterfly', 'An anime girl holding a butterfly', 'https://i.pinimg.com/236x/84/55/7d/84557d25e597de3dc103fa26abf9b752.jpg', NOW(), 'anime'),
  ('Anime girl with umbrella', 'An anime girl standing in the rain with an umbrella', 'https://i.pinimg.com/236x/a3/b9/52/a3b952d943dffc98eff5f07101f7fe6c.jpg', NOW(), 'anime'),
  ('Anime girl with flower crown', 'An anime girl with a flower crown and a peaceful expression', 'https://i.pinimg.com/236x/5b/ba/2b/5bba2b4094e4c82c19c47345ae3edbd2.jpg', NOW(), 'anime'),
  ('Anime girl with guitar', 'An anime girl playing a guitar in a beautiful garden', 'https://i.pinimg.com/236x/c0/37/c3/c037c3126d2a9eec910a8724aed0e8fa.jpg', NOW(), 'anime'),
  ('Anime girl in winter', 'An anime girl wearing a winter outfit and smiling in the snow', 'https://i.pinimg.com/236x/80/90/47/809047dc72705df0dd1eda5f850dc011.jpg', NOW(), 'anime'),
  ('Anime girl with headphones', 'An anime girl wearing headphones and listening to music', 'https://i.pinimg.com/236x/57/3f/c9/573fc9f917681690b49cf43466576f4e.jpg', NOW(), 'anime'),
  ('Anime couple', 'A sweet anime couple holding hands and smiling', 'https://i.pinimg.com/236x/ce/62/68/ce6268ec4bec819f851dfed0deabddda.jpg', NOW(), 'anime');
INSERT INTO posts (title, description, image_url, created_at, category)
VALUES 
('Beautiful Cherry Blossom Tree', 'A stunning view of a cherry blossom tree in full bloom', 'https://i.pinimg.com/236x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg', NOW(), 'travel'),
('A Scenic Road in the Mountains', 'A winding road through the mountains with a breathtaking view', 'https://i.pinimg.com/236x/1a/84/35/1a8435b262f70dc441a52bf15a9c620d.jpg', NOW(), 'travel');

INSERT INTO posts (title, description, image_url, created_at, category)
VALUES ('Gorgeous sunset over the mountains', 'This stunning photo captures a beautiful sunset over the mountains. The warm colors and dramatic clouds create a breathtaking scene.', 'https://i.pinimg.com/236x/b2/b9/de/b2b9de2aaa4b3502bf874e016436897e.jpg', NOW(), 'travel'),
('A cozy cabin in the woods', 'This cozy cabin nestled in the woods looks like the perfect place to escape to for a peaceful getaway. The rustic details and natural surroundings create a serene atmosphere.', 'https://i.pinimg.com/236x/21/4e/4d/214e4dd301bd4162bc8c3ab1b4014d97.jpg', NOW(), 'travel'),
('Stunning views of a crystal-clear lake', 'This photo showcases the stunning beauty of a crystal-clear lake surrounded by mountains. The reflection of the trees and the blue sky in the water creates a mesmerizing sight.', 'https://i.pinimg.com/236x/b0/72/10/b07210512f58b9ecc00fce11538b425d.jpg', NOW(), 'travel'),
('Majestic waterfall in the forest', 'This photo captures the majesty of a waterfall in the midst of a lush forest. The rushing water and verdant greenery make for a stunning contrast.', 'https://i.pinimg.com/236x/c2/b3/16/c2b3164fabf5f29edd61f324b907848a.jpg', NOW(), 'travel'),
('Charming old town street in Europe', 'This photo showcases the charming cobblestone streets and colorful buildings of an old town in Europe. The quaint atmosphere and historic architecture create a unique and memorable experience.', 'https://i.pinimg.com/236x/65/3c/6d/653c6d63188fc73c8e8b755c4e0c2320.jpg', NOW(), 'travel'),
('Breathtaking views from a mountain top', 'This photo captures the breathtaking views from the top of a mountain. The misty clouds and stunning vistas create a sense of wonder and awe.', 'https://i.pinimg.com/236x/04/f7/24/04f7249d2d5c5808d65602729bb549e9.jpg', NOW(), 'travel'),
('Stunning scenery on a coastal road', 'This photo showcases the stunning beauty of a coastal road with the ocean on one side and the mountains on the other. The winding road and dramatic cliffs make for a truly unforgettable drive.', 'https://i.pinimg.com/236x/6a/71/43/6a7143c4f535b190a7f9c976559846ba.jpg', NOW(), 'travel'),
('Picturesque village in the Swiss Alps', 'This photo captures the picturesque beauty of a small village nestled in the Swiss Alps. The snowy peaks and charming architecture create a magical and serene atmosphere.', 'https://i.pinimg.com/236x/e2/74/04/e2740425da4e12ece3d150f0cd7c87db.jpg', NOW(), 'travel'),