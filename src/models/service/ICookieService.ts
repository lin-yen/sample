export interface ICookieService {
  set(key: string, value: string, expires?: Date): void;
  get(key: string): string;
  delete(key: string): void;
}
