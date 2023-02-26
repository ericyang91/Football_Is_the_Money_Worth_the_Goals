create table teams (
	id varchar not null,
	Country varchar not null,
	League_ID varchar,
	League varchar not null,
	Team varchar primary key not null,
	Average_Age dec,
	Currency varchar,
	Market_Value bigint not null,
	Lat float not null,
	Long float not null,
	RK int,
	MP int,
	W int not null,
	D int not null,
	L int not null,
	GF int not null,
	GA int not null,
	GD int not null,
	Pts int,
	Pts_per_Match dec not null);


alter table teams
	drop column id;

select * from teams;
