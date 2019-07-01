-- Starter Data --- looks to be best practice to store the paths to the image files in the DB but not the iamges themselves 
-- (this prevents us from having to convet the images to blobs)
-- at least that is what I found here https://stackoverflow.com/questions/6472233/can-i-store-images-in-mysql

INSERT INTO images_tb (mood, content) VALUES ('confused', '/assets/images/confused1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('confused', '/assets/images/confused2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('angry','/assets/images/angry1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('angry','/assets/images/angry2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('happy','/assets/images/happy1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('happy','/assets/images/happy2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('sad','/assets/images/sad1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('sad','/assets/images/sad2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('inlove','/assets/images/inlove1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('inlove','/assets/images/inlove2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('sassy','/assets/images/sassy1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('sassy','/assets/images/sassy1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('overit','/assets/images/overit1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('overit','/assets/images/overit2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('excited','/assets/images/excitied1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('excited','/assets/images/excitied2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('exhausted','/assets/images/exhausted1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('exhausted','/assets/images/exhausted2.jpg');
INSERT INTO images_tb (mood, content) VALUES ('coding','/assets/images/coding1.jpg');
INSERT INTO images_tb (mood, content) VALUES ('coding','/assets/images/coding2.jpg');