import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

import { Playlist } from "./playlists.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 200 })
  name: string;

  @Column()
  age: number;

  @OneToMany(() => Playlist, (playlist) => playlist.user)
  playlist: Playlist[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
