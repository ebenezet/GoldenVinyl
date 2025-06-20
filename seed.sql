create table vinylsreview (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  name TEXT,
  country TEXT,
  album TEXT,
  comment TEXT
)

INSERT INTO vinylsreview (name, country, album, comment) VALUES 
('Max Fox', 'Brazil', 'A Love Supreme', 'My number One album of all time'),
('Julie Sissoko', 'Mali', 'Myfavourite things', 'I just can not stop listenning to this album'),
('Konate Grace', 'France', 'Kind Of Blue', 'An absolute masterpiece'),
('John Bishop', 'United Kingdom', 'Rubber Soul', 'A classic that should be played in every household'),
('Quinn Mary', 'USA', 'A Kind Of Magic', 'I recommended this album to my nephew. He is now a musician'),
('Jianli Xiao', 'China', 'Queen II', 'I like the cover and all the songs of this one'),
('Souba Mohammed', 'Iran', 'Prose Combat', 'The go to album at home'),
('Ravi Shankar', 'Ethiopia', 'Chants Of Inida', 'Awesomeness in every sense of the world'),
('Kodjo Bless', 'Togo', 'New Ancient Strings', 'This album reminds me of home'),
('Juan Gonzalez', 'Peru', '22 Strings', 'A gem in today music'),
('Annabel Hilton', 'Canada', 'Until The End Of Time', 'I met my partner at a bar while this tune was played'),
( 'Gautama Krishna', 'India', 'Passages', 'Bliss. Simply bliss'),
('Irene Chloe', 'Norway', 'Vision', 'The uni years are encapsulated in this album'),
('Souleyman Idriss', 'Rwanda', 'Kaya', '1978 and this Bob Marleys album chaned my life'),
('Stanley Cook', 'USA', 'Gang Signs & Prayer', 'Gang Signs & Prayer was magical. I know all the lyrics of all the tracks'),
('Nathalie Soumatre', 'Italy', 'Glassworks', 'A masterpiece. I usually wash the dishes with this tune on'),
('Nakata Kyoshiro', 'Japan', 'Glass: Saxophone', 'This was my introduction to Glass music: pure joy!'),
('Justine Reine', 'Argentina', 'String Quartets 5&4', 'Every note breathes beauty'),
('Yvette Traore', 'Cameroon', 'Fearless', 'I love this album so much.'),
('Taylor Young', 'Germany', '1989', 'I was named after the artist because my parents loved this album'),
('Diego Degrande', 'Spain', 'Parachutes', 'My early 2000s were unforgettable because of this album'),
('Solene Collette', 'Vietnam', 'Shamanes', 'I give this album to friends for their birthday: it is really good!'),
('Maella Icare', 'Jamaica', 'Night Nurse', 'An all time classic')
