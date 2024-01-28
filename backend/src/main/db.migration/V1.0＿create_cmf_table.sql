CREATE TABLE cmf
(
    id BIGINT UNSIGNED AUTO_INCREMENT,
    bank_code VARCHAR(4) NOT NULL ,
    branch_code VARCHAR(3) NOT NULL ,
    branch_name  VARCHAR(30) NOT NULL ,
    cmf_number  char(7) NOT NULL ,
    kana_name  VARCHAR(48) NOT NULL ,
    name VARCHAR(48) NOT NULL ,
    birthdate  char(10) NOT NULL,
    PRIMARY KEY (id)
);