import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";

import { Playlist } from "./playlists.entity";

@Entity("music")
export class Music {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 200 })
  artist: string;

  @ManyToMany(() => Playlist)
  playlists: Playlist[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
