import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("posts")
export class Post {
  constructor(attrs: Partial<Post>) {
    Object.assign(this, attrs);
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
    nullable: true
  })
  user: User;
}
