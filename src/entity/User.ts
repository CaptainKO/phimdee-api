import * as bcrypt from 'bcryptjs';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  async setPassword(newPassword: string) {
    this.salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(newPassword, this.salt);
  }

  async comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  async encryptPassword() {
    this.salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, this.salt);
  }

}