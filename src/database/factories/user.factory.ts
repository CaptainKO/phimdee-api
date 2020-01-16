import { define } from "typeorm-seeding"
import Faker = require('faker');
import { User } from "@entity/user.entity"

define(User, (faker: typeof Faker, settings: { roles: string[] }) => {
  console.log('called')
  const gender = faker.random.number(1)
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)
  const email = faker.internet.email(firstName, lastName)


  const user = new User()
  user.firstName = firstName
  user.lastName = lastName
  user.email = email
  user.username = firstName+lastName;
  user.password = faker.internet.password(8)
  user.role = faker.random.arrayElement(settings.roles)
  return user
})