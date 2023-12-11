import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Post } from "./post.entity";
import { Profile } from "./profile.entity";

@Entity("users")
export class User {
  constructor(attrs?: Partial<User>) {
    Object.assign(this, attrs || {});
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 50 })
  public email: string;

  @Column()
  public password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @Column({ nullable: true })
  profileId: number;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  public profile: Profile;
}
