import { Entity, PrimaryGeneratedColumn, OneToOne, Column } from "typeorm";
import { User } from "./user.entity";

@Entity("profiles")
export class Profile {
  constructor(attrs?: Partial<Profile>) {
    Object.assign(this, attrs || {});
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 20 })
  public username: string;

  @Column({ type: "varchar", length: 20 })
  public firstname: string;

  @Column()
  public lastname: string;

  @OneToOne(() => User, (user) => user.profile)
  public user: User;
}
