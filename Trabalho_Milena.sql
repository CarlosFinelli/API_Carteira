CREATE DATABASE carteira_acoes;
USE carteira_acoes;

DROP TABLE carteira;
DROP TABLE users;

CREATE TABLE users(
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome TEXT,
    email TEXT,
    senha Text,
    tipo ENUM("usuario", "agente") DEFAULT "usuario"
);

insert into users(nome, email, senha, tipo) values ('Admin', 'admin@admin.com', '$2b$10$IahKX5aefeETj7YcMBa/W.AEx3w1t4DjFviKJoZfriGTtgFj/b5ai', "agente");

CREATE TABLE carteira(
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    saldoDinheiro DECIMAL(20, 2),
    saldoMilhas DECIMAL(20, 2),
    fk_idUser INT,
    FOREIGN KEY (fk_idUser) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE extratos(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    valorDinheiro DECIMAL(20, 2),
    valorMilhas DECIMAL(20, 2),
    dataTransacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fk_idCarteira INT,
    FOREIGN KEY (fk_idCarteira) REFERENCES carteira(id)
);

CREATE TABLE pacotes (
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    titulo TEXT, 
    destino TEXT, 
    dataIda DATE, 
    dataVolta DATE, 
    hotel TEXT, 
	translado TEXT, 
    descricao TEXT, 
    precoBaseMoeda DECIMAL(20, 2), 
    precoBaseMilhas DECIMAL(20, 2)
);

CREATE TABLE compras (
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    valorPagoMoeda DECIMAL(20, 2),
    valorPagoMilhas DECIMAL(20, 2),
    fk_idUser INT,
    fk_idPacote INT,
    data_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_idUser) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (fk_idPacote) REFERENCES pacotes(id) ON DELETE CASCADE
);

DELIMITER $$

CREATE TRIGGER criar_carteira
AFTER INSERT ON users
FOR EACH ROW
BEGIN
	INSERT INTO carteira(saldoDinheiro, saldoMilhas, fk_idUser)
    VALUES (0, 0, NEW.id);
END$$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER criar_extrato
AFTER UPDATE ON carteira
FOR EACH ROW
BEGIN
	INSERT INTO extratos(valorDinheiro, valorMilhas, fk_idCarteira)
    VALUES (NEW.saldoDinheiro - OLD.saldoDinheiro, NEW.saldoMilhas - OLD.saldoMilhas, NEW.id);
END$$

DELIMITER ;