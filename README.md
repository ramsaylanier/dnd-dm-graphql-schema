# dnd-dm-graphql-schema

A graphql schema for Dungeons & Dragons DMs.

## Config

Copy `config/sample.json` into `config/dev.json`. This currently holds config settings for the mongo databse. 

## Seed Data into Mongo from JSON

[Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

```bash
brew install mongodb
```

Seed data into mongodb

```bash
npm run seed
```