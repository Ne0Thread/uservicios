export interface Usuario {
  usuarioId:  number;
  nombre:     string;
  rol:        string;
  convenioId: number | null;
  idExterna:  null | string;
}
