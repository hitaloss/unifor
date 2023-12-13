import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./users.entity";
import { Music } from "./musics.entity";

@Entity("playlist")
export class Playlist {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 200 })
  name: string;

  @ManyToOne(() => User, (user) => user.playlists)
  user: User;

  @ManyToMany(() => Music, (music) => music.playlists, { eager: true })
  @JoinTable()
  musics: Music[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
