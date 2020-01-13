import { compare, genSalt, hash } from 'bcryptjs';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn, AfterLoad, BeforeUpdate, OneToMany, BaseEntity } from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  role: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  private _password: string;

  @Column()
  password: string;

  @AfterLoad()
  private loadTempPassword(): void {
    this._password = this.password;
  }

  @BeforeUpdate()
  private async encryptPassword() {
    if (this._password !== this.password) {
      this.password = await this.hashPassword(this.password);
      this.loadTempPassword()
    }
  }

  @Column()
  salt: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  async hashPassword(newPassword: string) {
    this.salt = await genSalt(8);
    return await hash(newPassword, this.salt);
  }

  async comparePassword(password: string) {
    return compare(password, this.password);
  }

}
