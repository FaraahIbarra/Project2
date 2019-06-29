-- Starter Data --- looks to be best practice to store the paths to the image files in the DB but not the iamges themselves 
-- (this prevents us from having to convet the images to blobs)
-- at least that is what I found here https://stackoverflow.com/questions/6472233/can-i-store-images-in-mysql

INSERT INTO images_tb (mood, content) VALUES ('Confused', '/assets/images/confused1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Confused', '/assets/images/confused2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Angry','/assets/images/angry1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Angry','/assets/images/angry2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Happy','/assets/images/happy1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Happy','/assets/images/happy2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Sad','/assets/images/sad1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Sad','/assets/images/sad2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('In Love','/assets/images/inlove1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('In Love','/assets/images/inlove2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Sassy','/assets/images/sassy1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Sassy','/assets/images/sassy1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Over it','/assets/images/overit1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Over it','/assets/images/overit2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Excited','/assets/images/excitied1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Excited','/assets/images/excitied2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Exhausted','/assets/images/exhausted1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Exhausted','/assets/images/exhausted2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Coding','/assets/images/coding1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('Coding','/assets/images/coding2.jpg');