import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Post } from "./post.entity";

@Entity("categories")
export class Category {
  constructor(attrs?: Partial<Category>) {
    Object.assign(this, attrs || {});
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 80 })
  public name: string;

  @Column({ type: "text" })
  public desc: string;

  @ManyToMany(() => Post, (post) => post.categories)
  public posts: Post[];
}
