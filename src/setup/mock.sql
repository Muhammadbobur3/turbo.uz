insert into announcements (announcement_title, announcement_content, announcement_price, announcement_img) values
('Cobalt', 'lorem ipsum dolor', '120000', 'img');

insert into users (user_username, password, user_surname) values ('begzod', crypt('123', gen_salt('bf')), 'Rafikhov');

insert into categories (category_name) values ('Elektromobil'), ('Mototsikl'), ('Velosiped');
insert into categories (category_name) values ('Yuk mashinalar');

insert into announcements (announcement_title, announcement_content, announcement_price, announcement_img, phone_number, category_id, user_id) values ('Moshina', 'Yuk kotaradigan', '250000', '/images', '994843110', 2, 1);
insert into announcements (announcement_title, announcement_content, announcement_price, announcement_img, phone_number, category_id) values ('Moshina', 'Yuk kotaradigan', '20', '/images', '994843110', 2);