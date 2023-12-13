import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
} from "typeorm";
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

  @OneToMany(() => Playlist, (playlist) => playlist.user, { eager: true })
  @JoinTable()
  playlists: Playlist[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
