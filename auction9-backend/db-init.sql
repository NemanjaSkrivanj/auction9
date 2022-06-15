use auction9;

CREATE TABLE users (
user_id int AUTO_INCREMENT, 
first_name varchar(50) NOT NULL,
last_name varchar(50) NOT NULL,
email varchar(100) NOT NULL, 
password varchar(255) NOT NULL, 
username varchar(255) NOT NULL,
PRIMARY KEY(user_id)
)ENGINE=INNODB;

create table auctions ( 
 auction_id int AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 description varchar(255) NOT NULL,
 image blob NOT NULL,
 start_date DATETIME,
 end_date DATETIME,
 starting_price float NOT NULL,
 winner varchar(255),
 status varchar(50) NOT NULL,
 current_bid float,
 end_price float,
 user_id int,
 PRIMARY KEY(auction_id),
 FOREIGN KEY(user_id) REFERENCES users(user_id)
 )ENGINE=INNODB;

create table bids (
bid_id int PRIMARY KEY AUTO_INCREMENT,
 timestamp DATETIME NOT NULL,
 amount float NOT NULL,
 user_id int,
 auction_id int,
 FOREIGN KEY(user_id) REFERENCES users(user_id),
 FOREIGN KEY(auction_id) REFERENCES auctions(auction_id)
 )ENGINE=INNODB;