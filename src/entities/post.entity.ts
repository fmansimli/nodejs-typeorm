import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user.entity";
import { Category } from "./category.entity";

@Entity("posts")
export class Post {
  constructor(attrs?: Partial<Post>) {
    Object.assign(this, attrs || {});
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 100 })
  public title: string;

  @Column({ type: "text" })
  public body: string;

  @Column({ nullable: true })
  public userId: number;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"]
  })
  public user: User;

  @ManyToMany(() => Category, (category) => category.posts, {
    cascade: ["insert", "update"]
  })
  @JoinTable()
  public categories: Category[];
}
