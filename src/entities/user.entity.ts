import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "./post.entity";

@Entity("users")
export class User {
  constructor(attrs: Partial<User>) {
    Object.assign(this, attrs);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 50 })
  public email: string;

  @Column({ type: "varchar", length: 20 })
  public username: string;

  @Column({ type: "varchar", length: 20 })
  public firstname: string;

  @Column()
  public password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
