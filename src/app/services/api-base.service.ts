import { HttpHeaders } from "@angular/common/http";

export class ApiBase {
  public url: string = "http://localhost:8080/api";
  public httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "localhost:4200",
       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    }),
  };
}