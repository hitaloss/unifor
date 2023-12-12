export interface IPlaylistRequest {
  name: string;
  userId: string;
}

export interface IPlaylistPatch {
  name: string;
}

export interface IPlaylistSetSong {
  musicId: string;
}
